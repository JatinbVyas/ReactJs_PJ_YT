import "./App.css";
import ClockCurrentTime from "./components/ClockCurrentTime";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";

function App() {
  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <ClockCurrentTime></ClockCurrentTime>
    </center>
  );
}

export default App;
