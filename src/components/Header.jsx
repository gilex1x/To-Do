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
            <button onClick={handleOpen} className="add-bt">
              +
            </button>
            <NewTask isOpen={open} isClose={handleClose} />
          </li>
          <li>
            <form>
              <label>BUSCAR </label>
              <input type="search" placeholder="Buscar Tarea" />
            </form>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Header;
