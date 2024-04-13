import React  from "react";
// import { Route, Link, BrowserRouter, Routes } from "react-router-dom";
import FileExplorer from "./FileExplorer/FileExplorer";
import Home from "./components/Home";
import { Sidenav, Nav, Toggle } from "rsuite";
import DashboardIcon from "@rsuite/icons/legacy/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import Grid from "@material-ui/core/Grid";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />}>
//           {/* <Route index element={<Home />} /> */}
//           <Route path="/fileExplorer" element={<FileExplorer />} />
//           {/* <Route path="contact" element={<Contact />} />
//           <Route path="*" element={<NoPage />} /> */}
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };
const App = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState("1");
  // const [showComp, setShowComp] = React.useState(<Home />);

  const changeComp = () => {
    console.log("reresr");
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <div style={{ width: 240 }}>
          <Toggle
            onChange={setExpanded}
            checked={expanded}
            checkedChildren="Expand"
            unCheckedChildren="Collapse"
          />
          <hr />
          <Sidenav expanded={expanded} defaultOpenKeys={["3", "4"]}>
            <Sidenav.Body>
              <Nav activeKey={activeKey} onSelect={setActiveKey}>
                <Nav.Item eventKey="1" icon={<DashboardIcon />}>
                  Dashboard
                </Nav.Item>
                <Nav.Item eventKey="2" icon={<GroupIcon />}>
                  User Group
                </Nav.Item>
                <Nav.Menu
                  placement="rightStart"
                  eventKey="3"
                  title="Advanced"
                  icon={<MagicIcon />}
                >
                  <Nav.Item
                    eventKey="3-1"
                    onSelect={() => changeComp("FileExplorer")}
                  >
                    FileExplorer
                  </Nav.Item>
                  <Nav.Item eventKey="3-2" onSelect={() => changeComp("test")}>
                    Devices
                  </Nav.Item>
                  <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
                  <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
                </Nav.Menu>
                <Nav.Menu
                  placement="rightStart"
                  eventKey="4"
                  title="Settings"
                  icon={<GearCircleIcon />}
                >
                  <Nav.Item eventKey="4-1">Applications</Nav.Item>
                  <Nav.Item eventKey="4-2">Channels</Nav.Item>
                  <Nav.Item eventKey="4-3">Versions</Nav.Item>
                  <Nav.Menu eventKey="4-5" title="Custom Action">
                    <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
                    <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
                  </Nav.Menu>
                </Nav.Menu>
              </Nav>
            </Sidenav.Body>
            <Sidenav.Toggle
              expanded={expanded}
              onToggle={(expanded) => setExpanded(expanded)}
            />
          </Sidenav>
        </div>
      </Grid>
      <Grid item xs={9}>
        <FileExplorer />
      </Grid>
    </Grid>
  );
};

export default App;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);
