import React from "react";
import FileSaver from "file-saver";

const CV = () => {
  FileSaver.saveAs(process.env.PUBLIC_URL + "/resource/cv.pdf", "CV.pdf");
  return (
    <>
      <button className="cv" onClick={CV}>
        Download File
      </button>
    </>
  );
};

export default CV;
