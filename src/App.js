import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import NewGame from "./components/Game/NewGame";
import Game from "./components/Game/Game";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<NewGame numberOfBalls={15} ballsMoveNumber={3} />}
        />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
