import { BrowserRouter as Router } from "react-router-dom";
import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateItem from "./pages/CreateItem";
import { Items } from "./pages/Items";
import { Item } from "./pages/Item";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/:id" element={<Item />} />
        <Route path="/create" element={<CreateItem />} />
      </Routes>
    </Router>
  );
}

export default App;
