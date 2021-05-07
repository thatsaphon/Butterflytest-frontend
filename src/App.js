import { useState, useEffect } from "react";
import axios from "axios";
import mqtt from "mqtt";

function App() {
  // const client = mqtt.connect("tcp://localhost:1883");

  const [opacity, setOpacity] = useState([0.5, 0.25]);
  const handleInstall = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8000/", {
      topic: "first",
      message: "Installing",
    });
    if (res.data.message === "Success") setOpacity([1, 0.5]);
    console.log(res.data.message);
  };

  return (
    <div style={{ boxSizing: "border-box" }}>
      <div
        style={{ background: "brown", padding: "3vh", marginBottom: "3vw" }}
      ></div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          src="Wood.png"
          alt="Wood.png"
          style={{ marginRight: "3vw", opacity: opacity[0] }}
        />
        <img
          src="Wood.png"
          alt="Wood.png"
          style={{ marginLeft: "3vw", opacity: opacity[1] }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            marginTop: "5vh",
            background: "darkred",
            color: "white",
            padding: "1vh 5vw",
            borderRadius: "7px",
          }}
          onClick={handleInstall}
        >
          INSTALL
        </button>
      </div>
    </div>
  );
}

export default App;
