import axios from 'axios';
import useForm from '../hooks/useForm'

const USUARIO_API_BASE_URL = 'http://localhost:3003/';


export default function LoginPage() {


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

}

