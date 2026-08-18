# Teamboard

The Teamboard Web App owns task presentation, filtering, and interaction. Shared Types owns the serialized schema contract, which the Web App treats as its upstream contract. This compact demo currently mirrors the closed task model locally. API validation belongs to the API, while notification delivery belongs to Infrastructure.

## Development

Install dependencies:

```sh
npm ci
```

Run the TypeScript checks:

```sh
npm run typecheck
```

Run the tests:

```sh
npm test
```
