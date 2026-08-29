# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install dependencies (including devDependencies for build)
# Pin pnpm major version: pnpm@latest (12.x) re-enforces the
# onlyBuiltDependencies gate on every `pnpm run`, not just install.
RUN npm install -g pnpm@10 && pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Build Next.js app
RUN pnpm run build

# Runtime stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Install only production dependencies
RUN npm install -g pnpm@10 && pnpm install --frozen-lockfile --production

# Copy built app from builder
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose port 3005
EXPOSE 3005

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3005', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start Next.js in production mode
CMD ["npm", "start"]
