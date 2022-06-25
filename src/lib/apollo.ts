import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4t69w9d2y5v01yyb5j99v7r/master",
  cache: new InMemoryCache(),
});
