import React from "react";
import "./globals.css";
import { StoreProvider } from "./StoreProvider";

export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <div>{children}</div>
    </StoreProvider>
  );
}
