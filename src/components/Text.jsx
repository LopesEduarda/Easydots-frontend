import React from 'react';

export function Text({ id, name, label, value, onChange, type, autoComplete, fullWidth }) {
  return (
    // TODO Alterar para mostrar em linhas
    <div className='XXX'>
      <label htmlFor={id} className='col-2'>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        className='form-control'
        // ------------------------------------
        //TODO Mostrar o value no campo

        // ------------------------------------
        onChange={onChange}
      />
    </div>
  );
}

export default Text;
