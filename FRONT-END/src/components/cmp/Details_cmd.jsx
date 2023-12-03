import React, { useState, useEffect } from 'react';
import Navigation from "../Navigation";
import Compte from "../Compte";

const CmdDetailsComponent = () => {
  const [commandeDetails, setCommandeDetails] = useState([]);
  const [prixTotal, setPrixTotal] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your API call to fetch command details
        const response = await fetch(`/api/commandeDetails/${getCmdId()}`);
        const data = await response.json();
        setCommandeDetails(data);

        // Calculate total price
        const total = data.reduce((acc, plat) => acc + plat.prix_plat * plat.quantite, 0);
        setPrixTotal(total);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getCmdId = () => {
    // Replace this with your actual logic to get the command ID from the URL
    return 'replace_with_actual_command_id';
  };

  return (
    <div>
      <div><Navigation CartItem={CartItem}/> </div>
      <div><Compte CartItem={CartItem}/> </div>
    <main className="cmpcontent">
      <h2>
        <a href="Compte.php?p=Vcmd">&lt;-</a> Détails de la commande
      </h2>
      <hr />

      {commandeDetails.map((cmd) => (
        <div key={cmd.id_commande} className="row">
          <div className="col">
            <p>Commande N°: {cmd.id_commande}</p>
            <p>Prix Totale: {prixTotal}</p>
            <p>Etat : {cmd.Etat}</p>
          </div>
          <div className="col">
            <p>Adresse Livraison: {cmd.adresse}</p>
          </div>
        </div>
      ))}
      <hr />
      <h5>Liste Plats</h5>
      <hr />

      {commandeDetails.map((plat) => (
        <div key={plat.id_plat} className="row" id="cmdliste">
          <div className="col">
            <img src={`./images/${plat.image_plat}`} alt={plat.intitule_plat} />
          </div>
          <div className="col">
            <p>{plat.intitule_plat}</p>
          </div>
          <div className="col">
            <p>Prix:</p>
            <p>{plat.prix_plat * plat.quantite}</p>
          </div>
        </div>
      ))}
    </main>
      </div>
  );
};

export default CmdDetailsComponent;
