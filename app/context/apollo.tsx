import { createContext } from "react";

// don't want to throw error on the server when trying to access window
const initialState =
  typeof window !== "undefined" ? window.__APOLLO_STATE__ : {};

export default createContext(initialState);
