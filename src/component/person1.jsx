import React from "react";

const Person1 = ({ money, handleIncrement }) => {
  return (
    <div>
      <h2 style={{ backgroundColor: "gray", padding: 40, marginTop: 20 }}>
        Ali is offering the money ${money}
      </h2>
      <br />
      <button onClick={handleIncrement}>Increase</button>
    </div>
  );
};

export default Person1;
