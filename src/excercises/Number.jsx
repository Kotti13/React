import React, { useState } from "react";

function Number() {
  const [code, setCode] = useState(""); 
  const [sample, setData] = useState([]); 

  const submit = (e) => {
    e.preventDefault();

    const num = Number(code); 
    if (num > 0 && num <= 50) {
      setData([...sample, num]);
      setCode("");
    } else {
      alert("Please enter a number between 0 and 50");
    }
  };

  return (
    <>
      <div>
        <form onSubmit={submit}>
          <input
            type="number"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter number between 0 and 50"
          />
          <button type="submit" >Add</button>
        </form>
      </div>

      <div>
        <h3>Entered Numbers:</h3>
        <p>{sample.join(", ")}</p> 
      </div>
    </>
  );
}

export default Number;
