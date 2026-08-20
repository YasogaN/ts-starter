# Security Policy

## Supported Versions

Only the latest major version receives security patches.

## Reporting a Vulnerability

**Do not open a public issue.** Instead, report security vulnerabilities privately:

1. Go to the **Security** tab → **Report a vulnerability**
2. Or email the maintainers directly

We aim to acknowledge reports within 48 hours and ship a fix within 7 days.

## Dependency Auditing

This project uses `pnpm audit --audit-level high` in CI to catch known vulnerabilities. Dependabot is configured to open weekly PRs for dependency updates.
