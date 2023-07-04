import { useState } from "react";
import { Alert } from "react-bootstrap";

export default function Card(props) {
  const [showAlert, setAlert] = useState(false);
  async function clickHandler() {
    try {
      await navigator.clipboard.writeText(props.link);
      setAlert(true);
      setTimeout(() => {
        setAlert(false);
      }, 1500);
    } catch (err) {
      console.log("Failed to copy: ", err);
      setAlert(false);
    }
  }
  return (
    <div className="card" onClick={clickHandler}>
      {showAlert ? (
        <div className="alert--container">
          <Alert variant="success" dismissible style={{ height: "10vh" }}>
            <span id="copy__text">
              <strong>Copied Successfully!</strong>
            </span>
          </Alert>
        </div>
      ) : (
        <div>
          <div>
            <img src={require(`../assets/${props.image}`)} alt={props.title} />
          </div>
          <div>
            <h3>{props.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
