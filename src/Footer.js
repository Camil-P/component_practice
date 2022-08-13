import { useState } from "react";

const Footer = () => {
  const [vrednostIzInputa, setVrednostIzInputa] = useState();

  const renderInput = (event) => {
    setVrednostIzInputa(event.target.value);
  };

  return (
    <div>
      <h1>{vrednostIzInputa}</h1>
      <input onChange={renderInput} />
    </div>
  );
};

export default Footer;
