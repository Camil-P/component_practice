import { useRef } from "react";
import "./SearchInput.css";

const SearchInput = ({ handleOnChange, categoryOptions }) => {
  const selectRef = useRef();

  const handleSelect = () => {
    console.log(selectRef.current.value);
  };

  return (
    <header>
      <h1 id="sl">SatroLogo</h1>
      <input
        placeholder="Search by name..."
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      />
      <label htmlFor="category">Select category: </label>
      <select onChange={handleSelect} ref={selectRef} id="category">
        {categoryOptions.map((c) => (
          <option>{c}</option>
        ))}
        {/* <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
        <option>Option 4</option> */}
      </select>
    </header>
  );
};

export default SearchInput;
