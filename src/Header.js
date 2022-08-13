import "./App.css";
import { useState } from "react";

const Header = () => {
  const inputVariables = ["email", "password", "phone", "name"];

  // let nekaVariabla = "nekiText";
  const [nekaVariabla, setNekaVariabla] = useState("neki text hahu");

  console.log(nekaVariabla);

  const changeText = (event, dodatniArg) => {
    setNekaVariabla("neki novi text isto hahu");
    console.log(nekaVariabla);
  };

  return (
    <div>
      <h1>POCETAK HEADERA</h1>
      <h1>text neke variable: {nekaVariabla}</h1>
      <button
        // onClick={(event) => changeText(event, "Text za dodatni argument")}
        onClick={(event) => {
          changeText(event, "neki novi text");
        }}
      >
        Izmeni text
      </button>

      <hr></hr>

      {inputVariables.map((element, i) => {
        return (
          <div key={element + i.toString()}>
            <label htmlFor={element}>Unesite {element}</label>
            <input id={element} />
          </div>
        );
      })}

      {/* <label for="email">Unesite mail</label>
      <input id="email"/>
      <label for="password">Unesite password</label>
      <input id="password"/>
      <label for="phone">Unesite phone</label>
      <input id="phone"/>
      <label for="name">Unesite name</label>
      <input id="name"/> */}
      <hr></hr>
    </div>
  );
};

export default Header;
