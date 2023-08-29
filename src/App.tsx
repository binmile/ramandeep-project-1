import React from "react";
import { BrowserRouter } from "react-router-dom"
import RoutesComponent from "./RoutesComponent"

const App: React.FC = () => {
  return (

    <div className="App">
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </div>



  );
}

export default App;
