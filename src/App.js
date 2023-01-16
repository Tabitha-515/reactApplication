import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://touchinspiration-0ada.restdb.io/rest/sample?apikey=63be7360969f06502871ad7f')

    
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  function handlePatch(updatedData) {
    axios.patch('https://touchinspiration-0ada.restdb.io/rest/sample/{_id}?apikey=63be7360969f06502871ad7f', updatedData)

   
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div>
      <h1>Data from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <button onClick={() => handlePatch({ name: 'new name' })}>
        Update Name
      </button>
    </div>
  );
}

export default App;
