import React from "react";

const Person2 = ({ money, handleIncrement }) => {
  return (
    <div>
      <h2 style={{ backgroundColor: "black", padding: 40, marginTop: 20 }}>
        Bilal is offering the money ${money}
      </h2>
      <br />
      <button onClick={handleIncrement}>Increase</button>
    </div>
  );
};

export default Person2;
