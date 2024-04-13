import React from "react";
import HomeButton from "./HomeButton";
class Home extends React.Component {
  render() {
    return (
      <>
        <h1>HOME</h1>
        {/* <ReRoute path="/users" /> */}
        <HomeButton hidden="true" />
      </>
    );
  }
}
export default Home;
