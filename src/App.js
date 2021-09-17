import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import ListaProductos from "./components/productos/ListaProductos";
import AgregarProductos from "./components/productos/AgregarProductos";
import Navegacion from "./components/commons/Navegacion";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/commons/Footer";
import "./App.css";

function App() {
  const URL = process.env.REACT_APP_API_URL;
  console.log(URL);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const consulta = await fetch(URL);
      console.log("consunlta", consulta);

      const respuesta = await consulta.json();
      console.log("respuesta", respuesta);
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router>
      <Navegacion></Navegacion>
      <Switch>
        <Route exact path="/">
          <Inicio></Inicio>
        </Route>
        <Route exact path="/productos">
          <ListaProductos
            productos={productos}
            consultarApi={consultarAPI}
          ></ListaProductos>{" "}
        </Route>
        <Route exact path="/productos/nuevo">
          <AgregarProductos consultarApi={consultarAPI}></AgregarProductos>{" "}
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
