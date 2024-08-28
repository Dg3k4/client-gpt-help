import React, {useContext} from 'react';
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import {observer} from "mobx-react-lite";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, ANIME_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";

const AuthorizationForm = () => {
    const history = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE

    return (
        <div>
            Яви себя сайту
            {isLogin ?
                <LoginForm/>
                :
                <RegistrationForm/>
            }
            <button onClick={() => history(isLogin ? REGISTRATION_ROUTE : LOGIN_ROUTE)}></button>
            {/*{isLogin ?*/}
            {/*    <div>Без аккаунта?<NavLink to={REGISTRATION_ROUTE}>Тогда жми</NavLink></div>*/}
            {/*    :*/}
            {/*    <div>Уже существуешь?<NavLink to={LOGIN_ROUTE}>Тебе сюда</NavLink></div>*/}
            {/*}*/}
        </div>
    );
};

export default observer(AuthorizationForm);