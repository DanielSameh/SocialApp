import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "./src/graphql/client";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => (
  <ApolloProvider client={client}>
    <AppNavigator />
  </ApolloProvider>
);

export default App;
