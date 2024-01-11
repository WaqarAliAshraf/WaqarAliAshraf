import React, { useState } from "react";

const UpdatedComponent = (OriginalComponent) => {
  function NewComponent() {
    const [money, setMoney] = useState(10);

    const handleIncrement = () => {
      setMoney(money * 5);
    };

    return (
      <OriginalComponent handleIncrement={handleIncrement} money={money} />
    );
  }

  return NewComponent;
};

export default UpdatedComponent;
