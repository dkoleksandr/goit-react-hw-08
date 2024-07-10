import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectSearchValue } from "../../redux/constants";

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
