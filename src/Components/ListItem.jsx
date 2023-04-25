import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const ListItem = ({ rgb, hex }) => {
  //
  const [copied, setCopied] = useState(false);

  const copyToCb = (e) => {
    const clr = e.target.innerText;
    navigator.clipboard.writeText(clr);
  };

  //
  return (
    <li className={styles.colorName} style={{ background: rgb }}>
      <span
        onClick={(e) => {
          copyToCb(e);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1000);
        }}
      >
        {copied ? "Copied!!!" : hex} <i className="far fa-copy"></i>
      </span>
    </li>
  );
};

export default ListItem;
