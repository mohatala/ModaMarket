import React, { useState } from 'react';
import Navigation from "../Navigation";
import Compte from "../Compte";
const ChangePasswordComponent = ({ CartItem}) => {
  const [passactuel, setPassActuel] = useState('');
  const [Npass, setNPass] = useState('');
  const [SNpass, setSNPass] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Npass === SNpass) {
      try {
        // Replace with your API call to check the current password
        const response = await fetch(`/api/checkPassword/${getSessionId()}/${passactuel}`);
        const data = await response.json();

        if (data.isValid) {
          // Replace with your API call to update the password
          const updateResponse = await fetch(`/api/updatePassword/${getSessionId()}/${Npass}`, {
            method: 'POST',
          });

          if (updateResponse.ok) {
            // Password updated successfully
            // You may want to redirect or show a success message
            console.log('Password updated successfully');
          } else {
            console.error('Error updating password');
          }
        } else {
          // Current password is incorrect
          console.error('Incorrect current password');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      // Passwords do not match
      console.error('Passwords do not match');
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
      <h2>Modifier votre mot de passe</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" name="p" value="pass" hidden />
        <div className="row">
          <div className="form-floating mb-1 mt-2 col">
            <input
              type="password"
              className="form-control"
              id="passactuel"
              placeholder="Mot de passe actuel"
              value={passactuel}
              onChange={(e) => setPassActuel(e.target.value)}
              name="passactuel"
            />
            <label htmlFor="passactuel">Mot de passe actuel</label>
          </div>
        </div>
        <div className="row">
          <div className="form-floating mb-1 mt-2 col">
            <input
              type="password"
              className="form-control"
              id="Npass"
              placeholder="Nouveau mot de passe"
              value={Npass}
              onChange={(e) => setNPass(e.target.value)}
              name="Npass"
            />
            <label htmlFor="Npass">Nouveau mot de passe</label>
          </div>
        </div>
        <div className="row">
          <div className="form-floating mb-1 mt-2 col">
            <input
              type="password"
              className="form-control"
              id="SNpass"
              placeholder="Saisissez à nouveau le mot de passe"
              value={SNpass}
              onChange={(e) => setSNPass(e.target.value)}
              name="SNpass"
            />
            <label htmlFor="SNpass">Saisissez à nouveau le mot de passe</label>
          </div>
        </div>
        <div className="row">
          <input
            type="submit"
            name=""
            className="btn btn-warning"
            onClick={() => {
              /* You can call matchPassword() logic here if needed */
            }}
            value="Enregistrer"
          />
        </div>
      </form>
    </main>
    </div>
  );
};

export default ChangePasswordComponent;
