import { useNavigate  } from "react-router-dom";

function HomeButton() {
  // let history = useHistory();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  function fnGoBack() {
    navigate.goBack();
  }


  return (
    <>
      <button type="button" onClick={handleClick}>
        {" "}
        {/** Naming Conventions => handleClick, what is it doing??
         * Avoide fnGoBack such fancy words.  // okay
         */}
        Go home
      </button>
      <br />
      <br />
      <button type="button" onClick={fnGoBack}>
        Go Back
      </button>
      <br />
      <br />
      {/* <button onClick={navigate("/")}>Go Home using navigate</button> */}
    </>
  );
}
export default HomeButton;
