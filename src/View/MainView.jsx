import React from "react";
import FileExplorer from "../FileExplorer/FileExplorer";
import Pagination from "../Pagination/Pagination";
import Home from "../components/Home";
import GridLights from "../GridLights/GridLights";

const MainView = ({ comp }) => {
  console.log("sdfsdf", comp);
  switch (comp) {
    case "FileExplorer":
      return <FileExplorer />;
    case "Pagination":
      return <Pagination />;
    case "GridLights":
      return <GridLights />;
    default:
      return <Home />;
  }
};

export default MainView;
