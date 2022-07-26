import axios from 'axios';

// const USUARIO_API_BASE_URL = 'http://localhost:9999/v1/usuarios';
const USUARIO_API_BASE_URL = 'http://localhost:3003';
const CRIAR_USUARIO_BASE_URL = 'http://localhost:3003/user'

function UsuarioService() {
  const findAll = async users => {
    // TODO utilizar o filtro ativo na busca
    try {
      const res = await axios.get(`${USUARIO_API_BASE_URL}/getallusers`)
      return res
    } catch (error) {
      console.log(error)
    }
  };

  const create = async user => {
    const body = user
    // ------------------------------------
    // TODO criar a rota de criação de novos usuarios
    return axios.post(`${CRIAR_USUARIO_BASE_URL}`, body)
      .then((res) => {
        console.log(res)
        alert('Usuário cadastrado com sucesso!')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getById = id => {
    // ------------------------------------
    // TODO criar a rota de busca por ID
    // ------------------------------------
    return axios.get(`${USUARIO_API_BASE_URL}/getuserbyid/${id}`)
  };

  const updateByID = async (form, id) => {
    console.log(id, 'testando o update')
    const body = form
    // ------------------------------------
    // TODO criar a rota de atualizar usuario por ID
    // ------------------------------------
    return axios.put(`${USUARIO_API_BASE_URL}/updateuser/${id}`, body)
      .then((res) => {
        console.log(res)
        alert('Usuário editado com sucesso!')
      })
      .catch((error) => {
        console.log(error)
        alert('Erro ao editar usuário!')
      })
  };

  const deleteByID = async id => {
    return axios.delete(`${USUARIO_API_BASE_URL}/${id}`)
      .then((res) => {
        console.log(res)
        alert('Usuário deletado com sucesso!')
      })
      .catch((error) => {
        console.log(error)
        alert('Erro ao deletar usuário!')
      })
  };

  const restoreByID = id => {
    return axios.patch(`${USUARIO_API_BASE_URL}/${id}`);
  };

  return {
    findAll,
    create,
    getById,
    updateByID,
    deleteByID,
    restoreByID
    // TODO retornar as funçoes para permitir o uso
  };
}

export default UsuarioService();
