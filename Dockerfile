# syntax=docker/dockerfile:1

# Node 24 LTS on Alpine, pinned to an exact version.
ARG NODE_IMAGE=node:24.21.0-alpine3.24

# ---- base: toolchain shared by deps and builder ----
FROM ${NODE_IMAGE} AS base
WORKDIR /app
# pnpm version must match package.json "packageManager".
RUN corepack enable && corepack prepare pnpm@10.34.6 --activate

# ---- deps: install dependencies from the lockfile ----
FROM base AS deps
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile

# ---- builder: compile the Next.js standalone output ----
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml tsconfig.json next.config.mjs eslint.config.mjs ./
COPY public ./public
COPY src ./src
RUN pnpm build

# ---- runner: minimal runtime, no package manager use, non-root ----
FROM ${NODE_IMAGE} AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3005 \
    HOSTNAME=0.0.0.0

COPY --from=builder --chown=node:node /app/.next/standalone ./
COPY --from=builder --chown=node:node /app/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/public ./public

# Writable cache location for next/image; mount a tmpfs/volume here when the root FS is read-only.
RUN mkdir -p .next/cache && chown node:node .next/cache

USER node
EXPOSE 3005

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD ["node", "-e", "fetch('http://127.0.0.1:3005/api/health',{signal:AbortSignal.timeout(4000)}).then(r=>process.exit(r.ok?0:1),()=>process.exit(1))"]

CMD ["node", "server.js"]
