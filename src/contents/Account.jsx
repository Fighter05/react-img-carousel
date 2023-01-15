import React, { useState } from 'react'
import InputBox from '../components/InputBox';
import bg from '../images/bg1.jpg'
import { Link } from "react-router-dom";

function Account() {
    const [toggle, setToggle] = useState(true);

    const [emailArray, setEmailArray] = useState([]);
    const [passwordArray, setPasswordArray] = useState([]);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const setInputEmail = (e) => { setEmail(e.target.value) };
    const setInputPassword = (e) => { setPassword(e.target.value) };
    const setInputConfirmPassword = (e) => { setConfirmPassword(e.target.value) };


    const registerHandle = (e) => {
        e.preventDefault();

        if (email === '' || password === '' || confirmPassword === '') {
            alert('Please enter your detail!');
            return;
        } else if (emailArray.indexOf(email) !== -1) {
            alert('This email have my account already!');
            return;
        } else if (password !== confirmPassword) {
            alert('Password is not different!')
            return;
        } else {
            alert('Register complete')
            setEmailArray([...emailArray, email]);
            setPasswordArray([...passwordArray, password]);

            setEmail('');
            setPassword('');
            setConfirmPassword('');

            return console.log(emailArray, passwordArray);
        }
    }

    const loginHandle = (e) => {
        e.preventDefault();
        var i = emailArray.indexOf(email);
        if (email === '' || password === '') {
            alert('Please enter your detail!');
            return;
        } else if (emailArray.indexOf(email) === -1) {
            alert('This email not have your account!, Please register first');
            return;
        } else if (passwordArray[i] !== password) {
            alert('Password is not correct!');
            return;
        }
        else {
            alert('Welcome, ' + email);
            setEmail('');
            setPassword('');
            return;
        }
    }

    const inputs = [
        {
            id: 1,
            name: 'email',
            label: 'Email',
            type: 'email',
            value: email,
            placeholder: 'Login@gmail.com',
            onchange: setInputEmail
        },
        {
            id: 2,
            name: 'password',
            label: 'Password',
            type: 'password',
            value: password,
            placeholder: '********',
            onchange: setInputPassword
        },
        {
            id: 3,
            name: 'confirmPassword',
            label: 'Confirm Password',
            type: 'password',
            value: confirmPassword,
            placeholder: '********',
            onchange: setInputConfirmPassword
        }
    ]

    return (
        <div className='bg-gray-800 py-52 px-80 h-screen'>
            <div className='w-full h-full bg-white flex items-center justify-between rounded-3xl pr-32'>
                <img className='h-full rounded-l-3xl -ml-1' src={bg} alt="" />
                <div className='flex flex-col items-center justify-start'>
                    <div>
                        <Link to = '/imgCarousel'>
                            <button className='transition ease-in-out duration-300 p-3 hover:scale-110 text-white border-solid border-2 border-gray-800 bg-gray-800 rounded-2xl mr-2'>Img Carousel</button>
                        </Link>
                        <button className='transition ease-in-out duration-300 p-3 rounded-2xl hover:text-white text-gray-800 border-solid border-2 border-gray-800 hover:bg-gray-800 ' onClick={() => { setToggle(!toggle); }}>Toggle</button>
                    </div>
                    {toggle
                        ? <form id="login" >
                            <h1 className='text-3xl text-center my-4'>Login Form</h1>
                            <InputBox name='email' label='Email' type='email' placeholder='Login@gmail.com' value={email} onChange={setInputEmail} />
                            <InputBox name='password' label='Password' type='password' placeholder='********' value={password} onChange={setInputPassword} />
                            <div className='text-center'>
                                <button className='transition ease-in-out duration-300 p-3 hover:text-white text-gray-800 border-solid border-2 border-gray-800 hover:bg-gray-800  rounded-2xl mt-4' type="submit" onClick={loginHandle}>Login</button>
                            </div>
                        </form>
                        // login
                        : <form id="register">
                            <h1 className='text-3xl text-center my-4'>Register Form</h1>                    
                            {inputs.map((input)=>{
                                return <InputBox key={input.id} name={input.name} label={input.label} type={input.type} placeholder={input.placeholder} value={input.value} onChange={input.onchange} />;
                            })}

                            <div className='text-center'>
                                <button className='transition ease-in-out duration-300 p-3 hover:text-white text-gray-800 border-solid border-2 border-gray-800 hover:bg-gray-800  rounded-2xl mt-4' type="submit" onClick={registerHandle}>Register</button>
                            </div>
                        </form>
                        // register
                    }
                    {/* toggle */}
                </div>
            </div>
        </div>
    )
}

export default Account
