# ts-starter

[![CI](https://img.shields.io/github/actions/workflow/status/OWNER/REPO/ci.yml?style=for-the-badge&label=CI)](https://github.com/OWNER/REPO/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/ts-starter?style=for-the-badge&color=cb3837)](https://www.npmjs.com/package/ts-starter)
[![coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/OWNER/REPO/refs/heads/badges/coverage.json&style=for-the-badge)](https://github.com/OWNER/REPO)
[![size](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/OWNER/REPO/refs/heads/badges/size.json&style=for-the-badge)](https://github.com/OWNER/REPO)
[![license](https://img.shields.io/badge/license-Apache%202.0-blue?style=for-the-badge)](LICENSE)

A personal starter template for TypeScript libraries built for strictness: nothing merges without passing every gate. 100% coverage, tiny bundles, automated releases, signed publishes. Designed for my own projects. You are welcome to use it too, but I built it to hold my own work to an unreasonable standard.

---

## Stack

[![TypeScript](https://img.shields.io/badge/TypeScript%207-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Biome](https://img.shields.io/badge/Biome-60A5FA?style=for-the-badge&logo=biome&logoColor=white)](https://biomejs.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-6E9F18?style=for-the-badge&logo=vitest&logoColor=white)](https://vitest.dev/)
[![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

---

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

- `NPM_TOKEN` -- npm automation token for publishing (or set up npm OIDC and drop the token entirely)

Replace `OWNER/REPO` in the badges above with your GitHub handle and repo name so the shields.io endpoint badges work.

---

## Scripts

| Script | What it does |
| --- | --- |
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
| `pnpm run audit` | Security audit (fails on high or critical) |
| `pnpm pubcheck` | Validate package exports and types (publint + attw) |
| `pnpm preflight` | Run everything. If this is green, it ships. |

---

## How a Release Works

1. Write [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, etc.)
2. Open a PR to `main`. CI runs lint, types, tests, coverage, build, size, dead code, audit, and package checks.
3. Merge the PR. Release Please opens or updates a **Release PR** with the next version and a changelog.
4. When you are ready to ship, merge the Release PR. Release Please bumps the version, updates `CHANGELOG.md`, creates a Git tag, and publishes a GitHub Release.
5. The tag dispatches `publish.yml`: it checks out the tag, verifies the version matches `package.json`, builds, and runs `pnpm publish --provenance`.

You can also publish manually by pushing a `v*` tag or running the `publish.yml` workflow dispatch from the Actions tab.

---

## License

[Apache-2.0](LICENSE)
