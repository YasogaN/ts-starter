# ts-starter

[![CI](https://github.com/OWNER/REPO/actions/workflows/ci.yml/badge.svg)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/ts-starter)](https://www.npmjs.com/package/ts-starter)
[![coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/OWNER/REPO/refs/heads/badges/coverage.json)](https://github.com/OWNER/REPO)
[![size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/OWNER/REPO/refs/heads/badges/size.json)](https://github.com/OWNER/REPO)
[![license](https://img.shields.io/github/license/OWNER/REPO)](LICENSE)

A personal starter template for TypeScript libraries. Built for strictness: nothing merges without passing every gate. 100% coverage, tiny bundles, automated releases, signed publishes. Designed for my own projects — you are welcome to use it too, but I built it to hold my own work to an unreasonable standard.

## Stack

| Concern | Tool | Why |
|---|---|---|
| **Language** | TypeScript 7 (native Go compiler) | ~10x faster type-checking than TS 6, parallel workers in CI via `--checkers` |
| **Lint + Format** | Biome 2.5 | Single binary, `preset: recommended` base plus 48 curated strict rules across correctness, suspicious, complexity, style, performance, and security |
| **Tests** | Vitest 4 | v8 coverage provider, 100% per-file thresholds, PR coverage comments |
| **Bundle** | tsup (esbuild) | Dual ESM + CJS, declaration emit via tsc |
| **Size budget** | Size Limit | PR comments on bundle diffs, rejects over-budget pushes |
| **Dead code** | knip | Finds unused files, exports, and dependencies |
| **Package audit** | publint + attw | Validates exports map, types resolution, and entry points |
| **Security** | pnpm audit | CI gate at `high` severity, Dependabot weekly bumps |
| **Git hooks** | Lefthook | Biome on staged files, commitlint on message, typecheck on push |
| **Commits** | commitlint | Conventional Commits enforced locally and in CI |
| **Releases** | Release Please | Automated changelogs, version bumps, GitHub Releases |
| **Publish** | npm provenance (OIDC) | Signed publishes via GitHub Actions, no long-lived tokens |

## Setup

```bash
# Fork, clone, or copy
cp -r ts-starter my-library && cd my-library
rm -rf .git && git init

# Update these fields in package.json:
#   name, description, exports

pnpm install
pnpm preflight   # should be all green
```

After pushing to GitHub, create one repository secret:

- `NPM_TOKEN` — npm automation token for publishing (or set up npm OIDC and drop the token entirely)

Replace `OWNER/REPO` in the README badges with your GitHub handle and repo name so the shields.io endpoint badges work.

## Scripts

| Script | Description |
|---|---|
| `pnpm build` | Build ESM + CJS with tsup, then emit declarations with tsc |
| `pnpm dev` | Watch mode for development |
| `pnpm check` | Biome lint and format check |
| `pnpm check:fix` | Auto-fix lint and format issues |
| `pnpm typecheck` | Type-check both tsconfigs with TypeScript 7 |
| `pnpm test` | Run tests |
| `pnpm test:coverage` | Run tests with coverage (100% per-file enforced) |
| `pnpm test:watch` | Watch mode for tests |
| `pnpm size` | Check bundle sizes against budget |
| `pnpm knip` | Find dead code and unused dependencies |
| `pnpm run audit` | Security audit (fails on high/critical) |
| `pnpm pubcheck` | Validate package exports and types (publint + attw) |
| `pnpm preflight` | Run everything — if this is green, it ships |

## How a Release Works

1. Write [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, etc.)
2. Open a PR to `main` — CI runs lint, types, tests, coverage, build, size, dead code, audit, and package checks
3. Merge the PR. Release Please opens or updates a **Release PR** with the next version and a changelog
4. When you are ready to ship, merge the Release PR. Release Please bumps the version, updates `CHANGELOG.md`, creates a Git tag, and publishes a GitHub Release
5. The tag dispatches `publish.yml` — it checks out the tag, verifies the version matches `package.json`, builds, and runs `pnpm publish --provenance`

You can also publish manually by pushing a `v*` tag or running the `publish.yml` workflow dispatch from the Actions tab.

## License

[Apache-2.0](LICENSE)
