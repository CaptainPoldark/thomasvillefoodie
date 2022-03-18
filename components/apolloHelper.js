import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

function ApolloHelper() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://foodiedb.battlegroundls.com";
  const link = new HttpLink({ uri: `${API_URL}/graphql` });
  const cache = new InMemoryCache();
  const client = new ApolloClient({ link, cache });

  return client;
}

export default ApolloHelper;
