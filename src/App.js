import { Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import NewGame from "./components/Game/NewGame";
import Game from "./components/Game/Game";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={<NewGame numberOfBalls={15} ballsMoveNumber={3} />}
        />
        <Route path="/game" element={<Game />} />
        <Route path="/settings" element={<h1>Settings!</h1>} />
        <Route path="/about" element={<h1>About!</h1>} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
