import React from "react";
import FileExplorer from "../ReactPrep/FileExplorer/FileExplorer";
import Pagination from "../ReactPrep/Pagination/Pagination";
import Home from "../components/Home";
import GridLights from "../ReactPrep/GridLights/GridLights";
import UseMemo from "../ReactPrep/UseMemo/UseMemo";
import LikeButton from "../ReactPrep/LikeButton/LikeButton";
import DarkMode from "../ReactPrep/DarkMode/DarkMode";

const MainView = ({ comp }) => {
  console.log("sdfsdf", comp);
  switch (comp) {
    case "FileExplorer":
      return <FileExplorer />;
    case "Pagination":
      return <Pagination />;
    case "GridLights":
      return <GridLights />;
    case "UseMemo":
      return <UseMemo />;
    case "LikeButton":
      return <LikeButton />;
    default:
      return <DarkMode />;
  }
};

export default MainView;
