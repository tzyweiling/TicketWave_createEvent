import React from "react";
import { Route, Routes } from "react-router-dom";
import { CreateEvent } from "./pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CreateEvent />} />
      </Routes>
    </div>
  );
};

export default App;
