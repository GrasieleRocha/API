import { useEffect, useState } from "react";

export default () => {

  const[cars, setCars] = useState([]);
  const[loading, setLoading] = useState(false);

  const getCars = () => {
    setCars([]);
    setLoading(true);

    let url =`https://api.b7web.com.br/carros/api/carros?ano=${year}`;

    fetch(url)
      .then(function (result) {
        return result.json();
      })
      .then(function(json) {
        setLoading(false);
        if(json.error ===  ''){
          setCars(json.cars);
        }else{
          alert(json.error);
        }
      });
  };

useEffect(() =>{  
  getCars();
}, []); 

  return (
    <div>
      <h1>Lista de Carros</h1>

    <select>
      <option></option>
      <option>2020</option>
      <option>2019</option>
      <option>2018</option>
      <option>2017</option>
    </select>

      <button onClick={getCars}>Atualizar Lista</button>

      <hr />

      {loading === true &&
      <h2>Carregando carros...</h2>
      }

      {cars.map((item, index)=>(
      <div key={index}>
      <img src={item.photo} width="200"/>
      <h3>{item.brand} - {item.name}</h3>
      <p>{item.year} - R${item.price}</p>
      </div>
      ))}

    </div>
  );
}
