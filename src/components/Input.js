import { useState } from 'react';
import database from '../firebase';

const Input = () => {
  const [date, setDate] = useState();
  const [vax, setVax] = useState();
  const [unVax, setUnVax] = useState();
  const [unKnown, setUnKnown] = useState();

  // Push Function
  const handleSubmit = (e) => {
    e.preventDefault();
    // for validation purposes
    const fieldDate = document.querySelector('.date');
    const fieldVax = document.querySelector('.vax');
    const fieldUnVax = document.querySelector('.unvax');
    const fieldUnKnown = document.querySelector('.unknown');
    const validDate = fieldDate.value;
    const validVax = fieldVax.value;
    const validUnVax = fieldUnVax.value;
    const validUnKnown = fieldUnKnown.value;
    if (!validDate || !validVax || !validUnVax || !validUnKnown) {
      alert('Mõni väljadest on tühi');
    } else {
      database
        .ref('events/' + date)
        .set({
          date: date,
          vax: vax,
          unVax: unVax,
          unKnown: unKnown,
        })
        .then(() => {
          alert('Andmed sisestatud');
        })
        .catch((error) => {
          alert(error.message);
        });

      setDate('');
      setVax('');
      setUnVax('');
      setUnKnown('');
    }
  };

  return (
    <div classdate="App">
      <form></form>
      <center>
        <input
          placeholder="Date"
          type="date"
          className="text-center text-pink-500 p-2 date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br />
        <br />
        <input
          placeholder="Vaktsineeritud"
          className="text-center text-pink-500 p-2 vax"
          value={vax}
          onChange={(e) => setVax(e.target.value)}
        />
        <input
          placeholder="Vaktsineerimata"
          className="text-center text-pink-500 p-2 unvax"
          value={unVax}
          onChange={(e) => setUnVax(e.target.value)}
        />
        <input
          placeholder="Teadmata"
          className="text-center text-pink-500 p-2 unknown"
          value={unKnown}
          onChange={(e) => setUnKnown(e.target.value)}
        />
        <br />
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-8"
          onClick={handleSubmit}
        >
          Saada
        </button>
      </center>
    </div>
  );
};

export default Input;
