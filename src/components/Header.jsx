import React, { useState } from "react";

import NewTask from "./NewTask";
import "../assets/Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = (event) => {
    setOpen(true);
  };
  const handleClose = (event) => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div className="navBar">
        <ul>
          <li>
            <button onClick={handleOpen}>Nueva Tarea</button>
            <NewTask isOpen={open} isClose={handleClose} />
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Header;
