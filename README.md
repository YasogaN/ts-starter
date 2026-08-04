# ts-starter

[![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/ts-starter)](https://www.npmjs.com/package/ts-starter)
[![coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/OWNER/REPO/refs/heads/badges/coverage.json)](https://github.com/OWNER/REPO)
[![size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/OWNER/REPO/refs/heads/badges/size.json)](https://github.com/OWNER/REPO)
[![license](https://img.shields.io/github/license/OWNER/REPO)](LICENSE)

A production-grade TypeScript library with strict linting, 100% coverage, automated releases, and tiny bundle sizes.

## Features

- **TypeScript 7** — native Go compiler, 10x faster type-checking
- **Biome** — all-in-one linting & formatting, `preset: all` with curated overrides
- **Vitest 4** — 100% per-file coverage enforced in CI
- **Size Limit** — PR comments on bundle size changes, budget enforcement
- **tsup** — dual ESM/CJS output with `.d.ts` generation
- **Release Please** — automated changelogs and version bumps from conventional commits
- **Lefthook** — pre-commit quality gates, commit message linting
- **knip** — dead code and unused dependency detection
- **publint + attw** — package entry point and types validation
- **npm provenance** — signed publishes via GitHub OIDC

## Quick Start

```bash
# Clone and rename
cp -r ts-starter my-library
cd my-library
rm -rf .git && git init

# Update package name and description
# Edit package.json → name, description

pnpm install
pnpm preflight
```

## Scripts

| Script | Description |
|---|---|
| `pnpm build` | Build ESM + CJS output with tsup |
| `pnpm dev` | Watch mode for development |
| `pnpm check` | Run Biome linter and formatter check |
| `pnpm check:fix` | Auto-fix lint and format issues |
| `pnpm typecheck` | Type-check with TypeScript 7 |
| `pnpm test` | Run tests |
| `pnpm test:coverage` | Run tests with coverage report |
| `pnpm test:watch` | Watch mode for tests |
| `pnpm size` | Check bundle size against budget |
| `pnpm knip` | Find dead code and unused dependencies |
| `pnpm audit` | Security audit (fails on high/critical) |
| `pnpm pubcheck` | Validate package exports and types |
| `pnpm preflight` | Run all checks — lint, types, tests, build, size, dead code, package check |

## How a Release Works

1. Write [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, etc.)
2. Merge PRs to `main`
3. Release Please opens/updates a **Release PR** with the next version + changelog
4. Merge the Release PR → version bump, tag `vX.Y.Z`, GitHub Release
5. The tag triggers `publish.yml` → `pnpm build` + `pnpm publish --provenance`

## License

[Apache-2.0](LICENSE)
