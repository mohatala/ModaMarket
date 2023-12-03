
import React, { useState } from "react"
const Compte = () => {

 return (
   <div>
     <nav className="compte">
         <div className="leftmenu">
           <a href="/infos" className="btn btn-outline-warning">Informations personnelles</a>
             <a href="/npass" className="btn btn-outline-warning">Modifier votre mot de passe</a>
             <a href="/orders" className="btn btn-outline-warning">Vos commandes</a>
         </div>
   </nav>
   </div>
);
};

export default Compte;
