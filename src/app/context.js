"use client";

import { createContext } from "react";

export const Context = createContext();

export default function ContextProvider({ children, data }) {
  return <Context.Provider value={data}>{children}</Context.Provider>;
}
