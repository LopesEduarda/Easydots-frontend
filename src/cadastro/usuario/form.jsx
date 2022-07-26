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
          id='name'
          label='Name'
          name='Name'
          autoComplete='Name'
          value={item.name}
          onChange={v => {
            let valor = v.target?.value;
            setValue({ ...item, name: valor });
          }}
        />

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
          id='password'
          name='password'
          label='Password'
          type='password'
          value={item.password}
          autoComplete='current-password'
          onChange={v => {
            let valor = v.target?.value;
            setValue({ ...item, password: valor });
          }}
        />
      </div>

       {/* <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label' htmlFor='flexCheckDefault'>
          Ativo
        </label> */}
        
        {/* <div className='col-sm-10'>
          <input
            className='form-check-input float-start'
            type='checkbox'
            value={item.ativo ? 'checked' : ''}
            id='flexCheckDefault'
            onChange={v => {
              let valor = v.target?.checked;
              setValue({ ...item, ativo: valor });
            }}
          /> */}
        </div>  
        );
}
