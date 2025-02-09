import { useDispatch } from "react-redux";
import css from './LoginForm.module.css';
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.currentTarget;
      dispatch(
        login({
          email: form.elements.email.value,
          password: form.elements.password.value,
        })
      );
      form.reset();
    };
  
    return (
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    );
}

export default LoginForm