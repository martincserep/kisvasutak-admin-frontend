import React from 'react';

import Routes from "./utils/routes";

import Store from "./store/store";
import {Provider} from "react-redux";




function App() {

  return (

    <Provider store={Store}>
      <div className="App">
        <main>
          <Routes />
        </main>
    
      </div>
    </Provider>
  );
}

export default App;