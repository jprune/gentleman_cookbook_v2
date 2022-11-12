import { useContext, useState } from 'react';
import { loginFields } from '../constants/formFields';
import Input from './Input';
import axios from "axios";
import FormAction from './FormAction';
import { AppContext } from './Context';
import { useNavigate } from 'react-router-dom';

const fields = loginFields;
const fieldsState = {};
// eslint-disable-next-line no-return-assign
fields.forEach((field) => fieldsState[field.id] = '');

const Login = () => {

  const [loginState, setLoginState] = useState(fieldsState);
  const { dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
    console.log(loginState)
  };

  // Handle Login API Integration here
  const authenticateUser = async () => {
    const response = await axios.post("/user/login", loginState)
    if (response.data.success) {
      dispatch({
          type: 'login',
          payload: response.data.user.username
      })
    navigate("/")
  }};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log()
    authenticateUser()
  };

  return (
    <form className="mt-8 space-y-6 max-w-md w-full" onSubmit={handleSubmit}>
      <div className="-space-y-px">
        {
          fields.map((field) => (
            <Input
              key={field.id}
              handleChange={handleChange}
              value={loginState[field.id]}
              labelText={field.labelText}
              labelFor={field.labelFor}
              id={field.id}
              name={field.name}
              type={field.type}
              isRequired={field.isRequired}
              placeholder={field.placeholder}
            />
          ))
        }
        <FormAction handleSubmit={handleSubmit} text="Login" />
      </div>
    </form>
  );
}
export default Login