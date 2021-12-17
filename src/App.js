import "./App.css";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import Author from "./Author";

export default function App() {
  const [data, setData] = useState(" ");
  useEffect(() => {
    // Nothing to do here since you already tied
    // data to a prop in the Author component. If
    // you were doing something fancier then there
    // could be stuff to do here.
  }, [data]);

  return (
    <div>
      <Nav setData={setData} />
      <Author data={data} />
    </div>
  );
}
