import React from 'react';
import './style.css'

function ListaTemp({temp, num, removerTemp}) {
  return (
    <div className={temp.estado ? 'temp' : 'AddedTemp'} key={num}>
      {temp.t}
      <input
        type="checkbox"
        name="radio"
        className="checkmark"
      />
      <button onClick={() => DelTemp(num)}>
        
      </button>
    </div>
  );
}

export default ListaTemp;