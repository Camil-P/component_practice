import "./App.css";

const Header = () => {
  let nekaVariabla = "nekiText";

  console.log(nekaVariabla);

  const changeText = (event, dodatniArg) => {
    console.log(event.target);
    console.log(dodatniArg);
    nekaVariabla = "NEKI DRUGI TEXT";
    console.log(nekaVariabla);
  };

  return (
    <div>
      <h1>POCETAK HEADERA</h1>
      <h1>{nekaVariabla}</h1>
      <button
        onClick={(camil) => changeText(camil, "Text za dodatni argument")}
      >
        Izmeni text
      </button>
      <hr></hr>
    </div>
  );
};

export default Header;
