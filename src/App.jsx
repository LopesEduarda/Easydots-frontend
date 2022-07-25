import { useState, useEffect } from 'react';
import './App.css';

import UsuarioList from './cadastro/usuario';
import UsuarioForm from './cadastro/usuario/form';
import UsuarioService from './services/UsuarioService';
import useForm from './hooks/useForm';
import axios from 'axios'

function App() {
  const [item, setItem] = useState({});
  const [items, setItems] = useState([
    {
      id: 1,
      nome: 'easy.user',
      email: 'easydots@crmesys.com.br',
      ativo: true,
    },
  ]);

  const [editMode, setEditMode] = useState(false);

  const [paranoid, setParanoid] = useState(true);
  const [notificacao, setNotificacao] = useState({ show: false });

  const init = async paranoid => {
    try {
      setNotificacao({});

      const response = null;

      // ------------------------------------
      // TODO Implementar a busca de usarios na API utilizando o Service de usuario e atualizar a lista  de "items" com os valores retornados
      if (response.status === 200) {
      }
      // ------------------------------------
    } catch (error) {
      handleError(error.response);
    }
  };

  useEffect(() => {
    init();
  }, []);

  const { form, InputChange, clear } = useForm({
    email: "",
    password: ""
})

const login = (event) => {
    console.log('oie')
    event.preventDefault();
    const body = form

    axios
        .post(`${USUARIO_API_BASE_URL}/user`, body)
        .then((res) => {
            alert('Success!')
        })
        .catch((error) => {
            console.log(error)
            alert("Error! Try again.")
        })
}

  const handleError = async response => {
    if (response?.data?.message) setNotificacao({ show: true, message: response.data.message });
  };

  const handleMessage = async response => {
    if (response && typeof response === 'string') setNotificacao({ show: true, message: response });
  };

  const adicionar = async item => {
    try {
      const response = await UsuarioService.create(item);

      if (response.status === 200) init(paranoid);
      handleMessage(response);
    } catch (error) {
      handleError(error.response);
    }
  };

  const atualizar = async item => {
    try {
      setNotificacao({});
      const response = await UsuarioService.updateByID(item, item.id);

      if (response.status === 200) init(paranoid);
      handleMessage(response);

      setEditMode(false);
    } catch (error) {
      handleError(error.response);
    }
  };

  const remover = async id => {
    try {
      setNotificacao({});
      // ------------------------------------
      // TODO Implementar a remoção de usuarios por ID
      const response = null;

      if (response.status === 200) init(paranoid);
      handleMessage(response);

      if (response && response.status === 200) init(paranoid);
      // ------------------------------------
      handleMessage(response);
    } catch (error) {
      handleError(error.response);
    }
  };

  const restaurar = async id => {
    try {
      setNotificacao({});
      // ------------------------------------
      // TODO Implementar a remoção de usuarios por ID
      const response = null;

      if (response.status === 200) init(paranoid);
      handleMessage(response);
      // ------------------------------------
    } catch (error) {
      handleError(error.response);
    }
  };

  const onClickAction = async (action, v) => {
    setNotificacao({});

    if (action === 'ADICIONAR') {
      setItem({});
      setEditMode(true);
    } else if (action === 'MOSTRAR_REMOVIDOS') {
      setParanoid(!paranoid);
      init(!paranoid);
    } else if (action === 'EDITAR') {
      setItem(v);
      setEditMode(true);
    } else if (action === 'GRAVAR') {
      atualizar(v);
    } else if (action === 'REMOVER') {
      remover(v.id);
    } else if (action === 'RESTAURAR') {
      restaurar(v.id);
    } else if (action === 'VOLTAR') {
      setEditMode(false);
      setItem({});
    }
  };

  const Notificacao = () => {
    return (
      <div className='d-flex justify-content-end'>
        <div className='toast-container top-0 end-0 p-3'>
          <div
            className={notificacao.show ? 'show toast float-end' : 'toast'}
            role='alert'
            aria-live='assertive'
            aria-atomic='true'
          >
            <div className='toast-header'>
              <strong className='me-auto'>Desafio React/Node</strong>
              <small>2 seconds ago</small>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='toast'
                aria-label='Close'
                onClick={() => setNotificacao({})}
              ></button>
            </div>
            <div className='toast-body'>
              {/* TODO Mostrar a mensagem da API */}
              MENSAGEM DA API AQUI
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (editMode) {
    return (
      <div className='App m-5 d-flex row'>
        <Notificacao />
        <div className='card col-12'>
          <div className='card-body'>
            <div className='mb-2'>
              <h5 className='card-title'>Usuários</h5>
              <h6 className='card-subtitle mb-2 text-muted'>Cadastro de usuário</h6>
            </div>

            <div className='d-flex justify-content-between align-items-center mb-2'>
              <a
                href='#'
                className='card-link btn btn-warning'
                onClick={() => onClickAction('VOLTAR', {})}
              >
                Voltar
              </a>
              <a
                href='#'
                className='card-link btn btn-success'
                onClick={() => onClickAction('GRAVAR', login)}
              >
                Gravar
              </a>
            </div>

            <UsuarioForm item={item} setValue={setItem} onClickAction={onClickAction} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='App m-5 d-flex'>
      <Notificacao />
      <div className='card col-12'>
        <div className='card-body'>
          <div className='mb-2'>
            <h5 className='card-title'>Usuários</h5>
            <h6 className='card-subtitle mb-2 text-muted'> Lista de usuários cadastrados</h6>
          </div>

          <div className='d-flex justify-content-between align-items-center mb-2'>
            {paranoid ? (
              <a
                href='#'
                className='card-link btn btn-outline-warning'
                onClick={() => onClickAction('MOSTRAR_REMOVIDOS')}
              >
                Mostrar removidos
              </a>
            ) : (
              <a
                href='#'
                className='card-link btn btn-warning'
                onClick={() => onClickAction('MOSTRAR_REMOVIDOS')}
              >
                Ocultar removidos
              </a>
            )}
            <a
              href='#'
              className='card-link btn btn-success'
              onClick={() => onClickAction('ADICIONAR')}
            >
              Adicionar
            </a>
          </div>

          {/* // ------------------------------------ */}
          {/* TODO Adicionar o componente de Lista de usuarios e passar os parametros items e onClickAction */}

          {/* // ------------------------------------ */}
        </div>
      </div>
    </div>
  );
}

export default App;
