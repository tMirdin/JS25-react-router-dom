import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { MoonLoader, PulseLoader } from "react-spinners";

const UserDetails = () => {
  const [onePok, setOnePok] = useState(null);
  const { pokemon } = useParams();
  let navigate = useNavigate();
  // console.log(navigate);

  async function getPokemonDetails() {
    const detailsData = await axios(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );
    // console.log(detailsData);
    setOnePok(detailsData);
  }
  //   getPokemonDetails();
  useEffect(() => {
    getPokemonDetails();
  }, []);
  // console.log(onePok);
  // console.log(Boolean({}), "Проверка");

  function handleClick() {
    let value = prompt("Вы уверены что хотите уйти?");
    if (value === "да") {
      navigate("/");
    } else {
      navigate("/users");
    }
  }
  return (
    <div>
      {onePok ? (
        <>
          <img src={onePok.data.sprites.front_default} alt="" />
          <h2>{onePok.data.name}</h2>
          <h3>{onePok.data.height} см</h3>
          <button onClick={handleClick}>Перейти на главную</button>
        </>
      ) : (
        <MoonLoader color="#36d7b7" />
      )}
    </div>
  );
};

export default UserDetails;
