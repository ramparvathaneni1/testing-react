import { useState } from "react"; //import useState

function App() {
  const [showAboutUs, setShowAboutUs] = useState(false); //set up state var and setState function

  const handleShowAboutUs = () => {
    //callback for when the user clicks on the button
    setShowAboutUs(true); //set state var to true for use in DOM
  };

  const handleCloseBtn = () => {
    setShowAboutUs(false);
  }

  return (
    <>
      <h1>Super Duper Company</h1>
      <button onClick={handleShowAboutUs}>About Us</button>
      <button onClick={handleCloseBtn}>Close</button> {/*set up click handler*/}
      {showAboutUs ? ( //user ternary to decide whether or not to display <main>
        <main>We Rock</main>
      ) : null}
    </>
  );
}

export default App;
