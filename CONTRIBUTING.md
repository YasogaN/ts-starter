# Contributing

## Commit Conventions

This project enforces [Conventional Commits](https://www.conventionalcommits.org/). Every commit message must follow the format:

```
type(scope?): description
```

### Types

| Type | Description | Semantic Version |
|---|---|---|
| `feat` | A new feature | MINOR |
| `fix` | A bug fix | PATCH |
| `docs` | Documentation changes | — |
| `style` | Formatting, missing semicolons, etc. | — |
| `refactor` | Code restructuring without behavior change | — |
| `perf` | Performance improvements | PATCH |
| `test` | Adding or updating tests | — |
| `build` | Changes to the build system | — |
| `ci` | Changes to CI configuration | — |
| `chore` | Other maintenance tasks | — |
| `revert` | Reverts a previous commit | — |

### Breaking Changes

Add `!` after the type/scope, or include `BREAKING CHANGE:` in the footer:

```
feat!: drop Node 18 support
```

## Pre-commit Hooks

Lefthook runs automatically on every commit:

- **pre-commit**: Biome checks staged files
- **commit-msg**: Validates conventional commit format
- **pre-push**: Type-checks the full project

## CI Pipeline

Every PR must pass:

1. **Lint** — `biome ci`
2. **Typecheck** — `tsc --noEmit`
3. **Tests** — `vitest run --coverage` (100% per-file)
4. **Build** — `tsup`
5. **Size Limit** — bundle budget enforcement
6. **Dead Code** — `knip`
7. **Security Audit** — `pnpm audit`
8. **Package Check** — `publint && attw`
9. **Commit Lint** — conventional commits enforced on PR

## Testing

- Write tests alongside source files (`src/math.test.ts`)
- Aim for 100% coverage on new code
- Use `describe`/`it` from Vitest
- Run `pnpm preflight` before pushing
