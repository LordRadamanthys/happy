import React from 'react'
import {BrowserRouter, Switch, Route, Router} from 'react-router-dom'
import Landing from './screens/landing'
import OrphanegesMap from './screens/OrphanegesMap'


function Routes(){
    return(
        <BrowserRouter>
            <Route  path="/" exact component={Landing} />
            <Route  path="/map" component={OrphanegesMap} />
        </BrowserRouter>
    )
}

export default Routes