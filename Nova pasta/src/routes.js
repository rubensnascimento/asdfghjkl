import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Cadastro from './pages/cadastro';
import Consumidor from './pages/dashConsumidor'


export default function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Consumidor} />
            {/* <Route path="/Consumidor"  component={Consumidor} /> */}
        </Switch>
        </BrowserRouter>
    )
}