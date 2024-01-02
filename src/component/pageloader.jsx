import React, { useEffect, useState } from "react";

export const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
    
  }, []);

  if (loading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <h2>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi tenetur
      officiis cum pariatur eius! Vero, voluptate expedita? Ullam, neque
      sapiente!
    </h2>
  );
};
