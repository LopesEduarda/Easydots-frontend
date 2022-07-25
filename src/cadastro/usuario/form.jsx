import React from 'react';

import { Text } from '@components/Text';

export default function UsuarioForm({ item, setValue }) {
  console.log('UsuarioForm', item);
  return (
    <div>
      <div className='mb-3 row'>
        {/* // ------------------------------------ */}
        {/* TODO adicione o campo nome  */}

        {/* // ------------------------------------ */}

        <Text
          id='email'
          label='E-mail'
          name='email'
          autoComplete='email'
          value={item.email}
          onChange={v => {
            let valor = v.target?.value;
            setValue({ ...item, email: valor });
          }}
        />
        <Text
          required
          id='senha'
          name='senha'
          label='Senha'
          type='password'
          value={item.senha}
          autoComplete='current-password'
          onChange={v => {
            let valor = v.target?.value;
            setValue({ ...item, senha: valor });
          }}
        />
      </div>

      <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label' htmlFor='flexCheckDefault'>
          Ativo
        </label>
        <div className='col-sm-10'>
          <input
            className='form-check-input float-start'
            type='checkbox'
            value={item.ativo ? 'checked' : ''}
            id='flexCheckDefault'
            onChange={v => {
              let valor = v.target?.checked;
              setValue({ ...item, ativo: valor });
            }}
          />
        </div>
      </div>
    </div>
  );
}
