import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <>
      <h1>Font awesome</h1>
      <p>icon</p>
      <FontAwesomeIcon icon={faBell} className="text-green-500 text-3xl" />
    </>
  );
}

export default App;
