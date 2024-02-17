import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import UploadPage from "./pages/UploadPage/UploadPage.js";
import HomePage from "./pages/HomePage/HomePage.js";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
        <Route path="upload" element={<UploadPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
