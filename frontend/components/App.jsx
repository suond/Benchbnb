import React from 'react'
import GreetingContainer from './greeting/greeting_container'
import {Route} from 'react-router-dom'

import SignUpFormContainer from './session/signup_form_container'
import LoginFormContainer from './session/login_form_container'
import SearchContainer from './search/search_container'
import {AuthRoute} from '../util/route_util'

const App = () => {
    return (
        <div> 
            <header>
            <h1>Bench BnB</h1>
            <GreetingContainer />
            </header>

            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/" component={SearchContainer} />
        </div>
    )
}

export default App;