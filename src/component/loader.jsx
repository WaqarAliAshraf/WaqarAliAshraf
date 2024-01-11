import React, { useEffect, useState } from "react";

export const Loader = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 3000);
    
  }, []);

  return (
    <div>
      {loader ? (
        <div class="spinner-border" role="status">
          <span class="sr-only"></span>
        </div>
      ) : (
        <h1>Data</h1>
      )}
    </div>
  );
};
