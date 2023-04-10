import React from "react";
import { useState, useEffect } from "react";
import useTitle from "./useTitle";

function TitleOne() {
  const [num, setNum] = useState(0);

  //   useEffect(() => {
  //     document.title = `Number ${num}`;
  //   }, [num]);

  useTitle(num);

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Number - {num}</button>
    </div>
  );
}

export default TitleOne;
