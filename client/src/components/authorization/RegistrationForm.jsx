import React, {useContext, useState} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const RegistrationForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {userStore} = useContext(Context)

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                onChange={e => setName(e.target.value)}
                value={name}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={e => setEmail(e.target.value)}
                value={email}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                value={password}
            />
            <button onClick={() => userStore.registration(name, name, password)}>
                Зарегистрироваться
            </button>
        </div>
    );
};

export default observer(RegistrationForm);