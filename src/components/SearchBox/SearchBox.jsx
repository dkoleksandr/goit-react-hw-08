import { useDispatch, useSelector } from "react-redux";
import { selectSearchValue } from "../../redux/contacts/selectors";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const searchValue = useSelector(selectSearchValue);
  const dispatchFilter = useDispatch();

  const handleChange = (e) => {
    dispatchFilter(changeFilter(e.target.value));
  };

  return (
    <>
      <span>Find contacts by name</span>
      <br />
      <input value={searchValue} onChange={handleChange}></input>
    </>
  );
};

export default SearchBox;
