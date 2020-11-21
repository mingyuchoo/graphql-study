# Back-End

## Reference

- https://helloinyong.tistory.com/265

## Using GraphQL Codegen for TypeScript

1. `yarn add --dev @graphql-codegen/cli`
2. `yarn add --dev @graphql-codegen/typescript @graphql-codegen/typescript-resolvers @graphql-codegen/typescript-operations`
3. `yarn graphql-codegen init` - generate codegen.yml
4. `yarn codegen`

## Health check

```
http://localhost:4000/.well-known/apollo/server-health
```
