import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

function Client() {
  const client = new ApolloClient({
    // `restore` rehydrates the cache so it will match the cache on the server
    cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
    uri: "https://flyby-gateway.herokuapp.com/",
  });

  return (
    <ApolloProvider client={client}>
      <RemixBrowser />
    </ApolloProvider>
  );
}

hydrate(<Client />, document);
