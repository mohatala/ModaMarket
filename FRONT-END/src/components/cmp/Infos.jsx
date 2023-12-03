import React, { useState, useEffect } from 'react';
import Navigation from "../Navigation";
import Compte from "../Compte";
const Infos = ({ CartItem}) => {
  const [data, setData] = useState({
    Id_client: '',
    Nom: '',
    Prenom: '',
    Tel: '',
    Email: '',
    Adresse: '',
  });

  const fetchData = async () => {
    // Assuming you have an API endpoint to fetch client data
    try {
      const response = await fetch(`/api/client/${getSessionId()}`);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Fetch data when the component mounts

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming you have an API endpoint to update client data
    try {
      const response = await fetch('/api/updateClient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Id_client: getSessionId(),
          ...data,
        }),
      });

      if (!response.ok) {
        console.error('Error updating data');
      } else {
        // Refresh data after successful update
        fetchData();
      }
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const getSessionId = () => {
    // Replace this with your actual session ID retrieval logic
    return 'replace_with_actual_session_id';
  };

  return (
    <div>
      <div><Navigation CartItem={CartItem}/> </div>
      <div><Compte CartItem={CartItem}/> </div>
      <main className="cmpcontent">
      <form onSubmit={handleSubmit}>
  <div>
    <label htmlFor="Id_client">Id_client:</label>
    <input
      type="text"
      id="Id_client"
      name="Id_client"
      value={data.Id_client}
      onChange={handleChange}
    />
  </div>

  <div>
    <label htmlFor="Nom">Nom:</label>
    <input type="text" id="Nom" name="Nom" value={data.Nom} onChange={handleChange} />
    <label htmlFor="Prenom">Prenom:</label>
    <input type="text" id="Prenom" name="Prenom" value={data.Prenom} onChange={handleChange}/>
  </div>



  <div>
    <label htmlFor="Tel">Tel:</label>
    <input type="text" id="Tel" name="Tel" value={data.Tel} onChange={handleChange} />
    <label htmlFor="Email">Email:</label>
    <input type="text" id="Email" name="Email" value={data.Email} onChange={handleChange}/>
  </div>

  <div>
    <label htmlFor="Adresse">Adresse:</label>
    <input
      type="text"
      id="Adresse"
      name="Adresse"
      value={data.Adresse}
      onChange={handleChange}
    />
  </div>

  <button type="submit">Submit</button>
</form>
      </main>
    </div>

  );
};

export default Infos;
