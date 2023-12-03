import React, { useState, useEffect } from 'react';
import Navigation from "../Navigation";
import Compte from "../Compte";
const CommandeComponent = ({ CartItem}) => {
  const [commandes, setCommandes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your API call to fetch user's commands
        const response = await fetch(`/api/userCommands/${getSessionId()}`);
        const data = await response.json();
        setCommandes(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getSessionId = () => {
    // Replace this with your actual session ID retrieval logic
    return 'replace_with_actual_session_id';
  };

  return (
    <div>
      <div><Navigation CartItem={CartItem}/> </div>
      <div><Compte CartItem={CartItem}/> </div>
    <main className="cmpcontent">
      <h2>Vos Commandes</h2>
      <hr />

      {commandes.map((commande) => (
        <div key={commande.id_commande} className="row">
          <div className="col">
            <p>Commande N°: {commande.id_commande}</p>
            <p>Prix Totale: {commande.prixt}</p>
            <p>Etat: {commande.Etat}</p>
          </div>
          <div className="col">
            {/* You can add additional details here if needed */}
          </div>
          <div className="col">
            <a href={`/dcmd?idcmd=${commande.id_commande}`} className="btn btn-primary">
              Details
            </a>
          </div>
        </div>
      ))}

      <style>
        {`
          .row {
            border: 1px solid;
            margin-top: 2%;
            margin-left: 1%;
          }
        `}
      </style>
    </main>
    </div>
  );
};

export default CommandeComponent;
