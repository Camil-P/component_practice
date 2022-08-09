const Footer = () => {
  const nekaVariabla = "Neka galama";
  const nekiString = `${nekaVariabla} uz neki text`;
  const nekiNiz = [null, null, null];
  const modifikovaniNiz = nekiNiz.map((element) => {
    return "neki stringovi";
  });

  return (
    <div>
      {nekiString}
      {modifikovaniNiz.map((elementNiza, i, niz) => {
        return (
          <div key={elementNiza + i.toString()}>
            {elementNiza}
            <h1>Neki text</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
