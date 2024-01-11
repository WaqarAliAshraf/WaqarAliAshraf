import React from "react";
import "./App.css";
import { NavLink, Link } from "react-router-dom";
import Routers from "./component/Routers";

// import Person2 from "./component/person2";
// import Person1 from "./component/person1";
// import UpdatedComponent from "./component/HOC";
// import { Loader } from "./component/loader";


// const EnhancedPerson1 = UpdatedComponent(Person1);
// const EnhancedPerson2 = UpdatedComponent(Person2);

function App() {
  return (
    <>
      <div className="bg-secondary py-3">
        <header className="container d-flex  justify-content-between align-items-center">
          <a href="...">Logo</a>
          <nav>
            <ul className="list-unstyled d-flex align-items-center mb-0">
              <li className="me-3">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="me-3">
                <Link to="about">About</Link>
              </li>
              <li className="me-3">
                <Link to="contact">Contact</Link>
              </li>
              <li className="me-3">
                <Link to="students">Students</Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <Routers />
     
      {/* <!-- {/* <div className="HOC">
        <h1>HOC Practice</h1>
        <EnhancedPerson1 />
        <EnhancedPerson2 />
      </div> */}
      <div>
        {/* <Loader /> */}
      </div> 
    </>
  );
}

export default App;
