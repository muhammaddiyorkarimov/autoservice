import './loginPage.css'
import React, { useState } from 'react';
import UiInput from '../../ui/UiInput';
import { LuUser2 } from 'react-icons/lu';
import { CiLock } from 'react-icons/ci';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../features/authSlice';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user, loading, error} = useSelector(state => state.auth)

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await dispatch(loginUser({ username, password })).unwrap()
            if (response) {
                navigate('/')
            }
        } catch (error) {

        }

    }

    return (
        <div className='login-page'>
            <form onSubmit={handleSubmit}>
            <div className="title">
                <span className="text-wrapper">
                    <span className="login-text">Login</span>
                    <span className="welcome-text">Xush kelibsiz</span>
                </span>
            </div>
                <label className="input-wrapper">
                    <LuUser2 />
                    <UiInput
                        type="text"
                        state={username}
                        setState={setUsername}
                        placeholder="Имя пользователя..."
                    />
                </label>
                <label className="input-wrapper password-wrapper">
                    <CiLock />
                    <UiInput
                        type={showPassword ? "text" : "password"}
                        placeholder="Пароль..."
                        state={password}
                        setState={setPassword}
                    />
                    <span
                        className={`password-toggle ${showPassword ? 'visible' : ''}`}
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </span>
                </label>
                <button type="submit" disabled={loading}>
                    {loading ? 'Загрузка...' : 'Вход'}
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
