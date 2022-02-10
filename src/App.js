import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl, checklistUrl, populate } from "./utils/app";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(baseUrl + checklistUrl + populate)
      .then((response) => setData(response.data.data));
  }, []);

  const getData = (url) => {
    axios.get(url).then((response) => console.log(response.data.data));
  };

  const getChecklist = () => {
    getData(baseUrl + checklistUrl + populate);
  };

  return (
    <>
      <button onClick={getChecklist}>get checklist</button>
      <ul>
        {data.length > 0
          ? data.map((checklist, idx) => {
              return <li key={idx}>{checklist.attributes.title}</li>;
            })
          : null}
      </ul>
    </>
  );
}

export default App;