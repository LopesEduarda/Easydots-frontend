import axios from 'axios';

// const USUARIO_API_BASE_URL = 'http://localhost:9999/v1/usuarios';
const USUARIO_API_BASE_URL = 'http://localhost:3003/';

function UsuarioService() {
  const findAll = ({ ativo }) => {
    // TODO  utilizar o filtro ativo na busca
    return axios.get(`${USUARIO_API_BASE_URL}ativo=${ativo}`);
  };

  const create = usuario => {
    // ------------------------------------
    // TODO criar a rota de criação de novos usuarios
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
  };

  const getById = id => {
    // ------------------------------------
    // TODO criar a rota de busca por ID
    // ------------------------------------
  };

  const updateByID = (usuario, id) => {
    // ------------------------------------
    // TODO criar a rota de atualizar usuario por ID
    // ------------------------------------
  };

  const deleteByID = id => {
    return axios.delete(`${USUARIO_API_BASE_URL}/${id}`);
  };

  const restoreByID = id => {
    return axios.patch(`${USUARIO_API_BASE_URL}/${id}`);
  };

  return {
    findAll,
    create,
    // TODO retornar as funçoes para permitir o uso
  };
}

export default UsuarioService();
