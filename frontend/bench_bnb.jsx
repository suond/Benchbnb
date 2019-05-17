import React from 'react'
import ReactDOM from 'react-dom'
import {login,logout,signup} from './actions/session'
import {fetchBenches} from './actions/bench_actions'
import configureStore from './store/store'
import Root from './components/root'

document.addEventListener("DOMContentLoaded", ()=> {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser){
        const preloadedState = {
            entities: {
                users: {
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                id: window.currentUser.id
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //testing
    window.login = login;
    window.state = store.getState;
    window.dispatch = store.dispatch;
    window.fetchBenches = fetchBenches
    //end testing
    ReactDOM.render(<Root store={store} />, root);
});