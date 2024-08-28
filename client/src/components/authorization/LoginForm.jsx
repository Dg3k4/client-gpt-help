import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const LoginForm = () => {
    const [nameEmail, setNameEmail] = useState("")
    const [password, setPassword] = useState("")
    const {userStore} = useContext(Context)

    return (
        <div>
            <input
                type="text"
                placeholder="Name or Email"
                onChange={e => setNameEmail(e.target.value)}
                value={nameEmail}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <button onClick={() => userStore.login(nameEmail, nameEmail, password)}>
                Войти
            </button>
        </div>
    );
};

export default observer(LoginForm);