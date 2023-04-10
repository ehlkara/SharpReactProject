import "./App.css";
import { useState, useTransition } from "react";
import Characters from './Characters';

function App() {
  const [input, setInput] = useState("");
  // const [myList, setMyList] = useState([]);
  // const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);

    // startTransition(() => {
    //   const myArray = [];
    //   for (let i = 0; i < 2000; i++) {
    //     myArray.push(e.target.value);
    //   }
    //   setMyList(myArray);
    // });
  };

  return (
    <>
      <input type="text" value={input} onChange={handleChange} />
      <Characters input={input}/>

      {/* {isPending
        ? "Loading..."
        : myList.map((item, index) => {
            return <div key={index}>{item}</div>;
          })} */}
    </>
  );
}

export default App;
