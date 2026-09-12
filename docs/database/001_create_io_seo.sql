create table if not exists public.io_seo (
  id uuid primary key default gen_random_uuid(),
  project_id text not null,
  nombre text,
  telefono text,
  email text,
  metadata jsonb,
  created_at timestamptz not null default now()
);

alter table public.io_seo enable row level security;

create index if not exists io_seo_project_id_idx on public.io_seo (project_id);
create index if not exists io_seo_created_at_idx on public.io_seo (created_at desc);
