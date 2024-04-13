import React, { useState } from "react";
import explorer  from "./explorerData";
import Folder  from './subComponents/Folder'
import './fileExplorere.css'

const FileExplorer = () => {

  const [explorerData, setExplorereData] = useState()

  return (
    <>
      <Folder explorer={explorer}/> 
    </>
  );
};
export default FileExplorer;
