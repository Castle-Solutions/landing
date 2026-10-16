# 0001: Next.js and Vercel for Castle Solutions Landing Page

- **Status**: accepted
- **Date**: 2026-10-15

## Context

Castle Solutions needs an immediate web presence following the acquisition of the domain `castlesolutions.com.co`. The immediate requirement is a clean, modern "Coming Soon" landing page with company value propositions and direct contact information, deployed with continuous delivery on Vercel. Full product and service definitions will be refined in subsequent iterations.

## Decision

We chose **Next.js (App Router) with TypeScript and Tailwind CSS**, deployed to **Vercel** via GitHub continuous integration from the `main` branch:

1. **Next.js + Vercel**: Zero-config deployment on Vercel, optimized asset delivery, native edge routing, and seamless extensibility for full application features planned for future iterations.
2. **Tailwind CSS**: Rapid, utility-first styling allowing a polished, responsive dark-mode aesthetic for the placeholder hero without heavy component libraries.
3. **Domain Strategy**: `castlesolutions.com.co` configured as the canonical apex domain, with `www.castlesolutions.com.co` redirecting to apex.

## Consequences

- The repo is initialized with a standard Next.js directory structure (`src/app/`, `src/components/`).
- GitHub pushes to `main` automatically trigger production deployments on Vercel.
- DNS configuration requires an `A` record for `@` pointing to `76.76.21.21` and a `CNAME` for `www` pointing to `cname.vercel-dns.com`.
