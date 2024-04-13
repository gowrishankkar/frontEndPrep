import React, { useState } from "react";
import explorer from "./explorerData";
import Folder from "./subComponents/Folder";
import useTraverseTree from "./hooks/use-traverse-tree.js";
import "./fileExplorere.css";

const FileExplorer = () => {
  const [explorerData, setExplorereData] = useState(explorer);
  const { insertNode } = useTraverseTree();
  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorereData(finalTree);
  };
  return (
    <>
      <Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
    </>
  );
};
export default FileExplorer;
