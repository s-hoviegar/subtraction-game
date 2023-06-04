import "./App.css";
import Orb from "./components/Orb";

function App() {
  const balls = [];
  for (var i = 0; i < 10; i++) {
    balls.push(i);
  }
  return balls.map(() => <Orb />);
}

export default App;
