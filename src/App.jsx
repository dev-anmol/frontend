import { useState } from "react";
import "./App.css";
import TopBar from "./components/TopBar";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return <>
    <TopBar />
    <Form />
  </>;
}

export default App;
