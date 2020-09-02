import React from "react";

export default function Links(props) {
  return (
    <li className="nav__item">
      <a className="nav__link" href={`#${props.title}`}>
        {props.title}
      </a>
    </li>
  );
}
