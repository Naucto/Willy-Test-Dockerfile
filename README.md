# Willy-Test-Dockerfile

A throwaway web service for exercising [Willy](https://github.com/Naucto/Willy)'s
**Dockerfile** deploy path.

- Listens on `PORT` (default `3000`); serves a plain-text greeting at `/`.
- `/health` returns `ok` — backing the Docker `HEALTHCHECK`, which Willy uses to
  gate cutover during a health-checked swap.
- Reads an optional `GREETING` env var (handy for testing Willy's env injection).

## Deploy via Willy

Create a **WEB** deployment with build strategy **DOCKERFILE**, service port `3000`,
and a domain. Set an env var `GREETING` to see it reflected at `/`.
