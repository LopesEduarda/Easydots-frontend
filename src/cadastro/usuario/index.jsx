import React from 'react';

import { MdDelete, MdEdit, MdRestore } from 'react-icons/md';

const UsuarioItem = ({ onClickAction, item }) => (
  <li className='list-group-item'>
    <div key={item.id} className=' d-flex justify-content-between'>
      <div>{item.id}</div>
      <div>{item.nome}</div>
      {/* // ------------------------------------ */}
      {/* TODO  mostrar o email do usuario*/}

      {/* // ------------------------------------ */}
      <div>{item.ativo ? 'Ativo' : 'inativo'}</div>

      <div className=' d-flex justify-content-between'>
        <div role='button'>
          <MdEdit size={24} color='#424242' onClick={() => onClickAction('EDITAR', item)} />
        </div>
        {item.deletedAt === null ? (
          <div role='button'>
            <MdDelete
              size={24}
              color='#EF5350'
              onClick={() => {
                console.log(item);
                onClickAction('REMOVER', { ...item });
              }}
            />
          </div>
        ) : (
          <div role='button'>
            <MdRestore
              size={24}
              color='#EF5350'
              onClick={() => {
                console.log(item);
                onClickAction('RESTAURAR', { ...item });
              }}
            />
          </div>
        )}
      </div>
    </div>
  </li>
);

export default function UsuarioList({ items = [], onClickAction }) {
  return (
    <div>
      <div className='card'>
        <ul className='list-group list-group-flush'>
          {items.map(item => (
            <UsuarioItem key={item.id} onClickAction={onClickAction} item={item}></UsuarioItem>
          ))}
        </ul>
      </div>
    </div>
  );
}