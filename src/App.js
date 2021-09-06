import './App.css';
import Homepage from './Components/Homepage';
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
    <div className="App">
      <AnimatedCursor
      innerSize={10}
      outerSize={30}
      color="250, 194, 120"
      outerAlpha={0.4}
      innerScale={0.6}
      outerScale={0}
    />
      <Homepage />
    </div>
  );
}

export default App;
