import Head from "next/head";
import styles from "@/styles/Home.module.css";
import DisplayImage from "@/Components/DisplayImage";
import ColorThief from "colorthief";
import { useState } from "react";

export default function Home() {
  //
  //
  const [uploadedImg, setUploadedImg] = useState(null);
  const [clrPalettte, setClrPalette] = useState(null);

  //
  const uploadImage = (e) => {
    const file = e.target.files[0];
    // console.log(e);
    const reader = new FileReader();

    reader.onload = async (ev) => {
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 6);

        setUploadedImg(ev.target.result);
        setClrPalette(colorPalette);

        // console.log("clrpalette" + colorPalette);
        // console.log(reader);
      };
      img.src = ev.target.result;
    };

    reader.readAsDataURL(file);
  };

  //
  return (
    <>
      <Head>
        <title>Colors from image generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <header>
        <h1>Palette Generator</h1>
        <div className="input">
          <label htmlFor="file">
            <i className="fas fa-images"></i> Upload Image
          </label>
          <input type="file" id="file" hidden onChange={uploadImage} />
        </div>
      </header>
      <main className={styles.main}>
        <DisplayImage uploadedImg={uploadedImg} clrPalettte={clrPalettte} />
      </main>
    </>
  );
}
