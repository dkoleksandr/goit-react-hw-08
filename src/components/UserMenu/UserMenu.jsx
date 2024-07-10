import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import css from './UserMenu.module.css';


const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, <span className={css.name}>{user.name}</span></p>
      <button onClick={handleLogOut}>LogOut</button>
    </div>
  );
};

export default UserMenu;
