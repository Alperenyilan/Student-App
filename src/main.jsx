import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./login/page.jsx"; // LoginPage'i import edin
import RegisterPage from "./register/page.jsx";
import { FilterProvider } from "../components/FilterContext";
import { StoreProvider } from "./StoreProvider";
import Home from "./page.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StoreProvider>
    <FilterProvider>
      <ChakraProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route index element={<Home />} /> */}
            <Route path="/login" element={<LoginPage />} />{" "}
            {/* LoginForm yerine LoginPage kullanın */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
            <Route path="/applications" element={<App />} />
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </FilterProvider>
  </StoreProvider>
);
