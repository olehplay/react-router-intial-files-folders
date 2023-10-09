import React from "react";
import s from "./Bar.module.css";

const Bar = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li>Home</li>
        <li>About</li>
        <li>Contacts</li>
      </ul>
      <hr />
    </nav>
  );
};

export default Bar;
