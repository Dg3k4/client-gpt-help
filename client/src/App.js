import React, {useContext, useEffect} from "react";
import {observer} from "mobx-react-lite";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {Context} from "./index";


function App() {
    const {userStore} = useContext(Context)


    useEffect(() => {
        if(localStorage.getItem("token")) {
            userStore.checkAuth()
        }
    }, [userStore])

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default observer(App);
