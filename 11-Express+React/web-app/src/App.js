import React, { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Results from "./components/Results";
import "./App.css";

function App() {
  const [data, setData] = useState(null);
  const handleSubmit = async (form) => {
    console.log(form);
    try {
      const d = await axios.get(`/weather?address=${form.address}`);
      setData(d.data);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="App">
      {!data ? (
        <Form
          text="Enter your address to get the weather"
          inputs={[{ type: "text", name: "Address" }]}
          handleSubmit={handleSubmit}
        />
      ) : (
        <Results forecast={data.forecast} location={data.location} />
      )}
    </div>
  );
}

export default App;
// useEffect(() => {
//   fetch("/users")
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       setData(data);
//     })
//     .catch((err) => setData(err));
// }, []);
