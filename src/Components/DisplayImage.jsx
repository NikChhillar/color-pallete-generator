import React from "react";
import styles from "../styles/Home.module.css";
import ListItem from "./ListItem";

const DisplayImage = ({ uploadedImg, clrPalettte }) => {
  //

  const toHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = "0" + hex;
    }

    return hex;
  };

  //
  return (
    <div className={styles.content}>
      <div className="image">
        {uploadedImg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={uploadedImg} alt="uploaded-picture" />
        ) : (
          <h2>Upload an image to get the color palettes</h2>
        )}
      </div>

      {clrPalettte && (
        <ul className={styles.colors}>
          {clrPalettte.map((clr, idx) => {
            const rgb = `rgb(${clr.join(",")})`;
            const hex = `#${toHex(clr[0])}${toHex(clr[1])}${toHex(clr[2])}`;

            console.log(hex, rgb);

            return <ListItem key={idx} rgb={rgb} hex={hex} />;
          })}
        </ul>
      )}
    </div>
  );
};

export default DisplayImage;
