import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(process.env.NEXT_PUBLIC_ENDPOINT, {
  headers: {
    authorization: `${process.env.NEXT_PUBLIC_TOKEN}`,
  },
});

export { client, gql };
