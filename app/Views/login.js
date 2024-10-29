import React, { useState } from 'react';
import './Login.css'; 
import loginGestor2 from '../../images/loginGestor2.png';
import logo from '../../images/logo.png';

const Login = () => {
    const [dni, setDni] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Controlador del formulario de login
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/pruebaRest/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dni, email, password }),
        });
        const data = await response.json();
        if (data.success) {
            console.log('Login exitoso');
        } else {
            console.log('Error al iniciar sesión:', data.message);
        }
    };
    
    

    return (
        <div className="body-login">
            <div className="container-login">
                <div className="izquierda-img-login">
                    <img src={loginGestor2} alt="Imagen de incidencias" className="LoginGestor" />
                </div>
                <div className="derecha-form-login">
                    <div className="login-box">
                        <div className="logo-login">
                            <img src={logo} alt="Logo"/>
                        </div>
                        <h1>Hola <span>¡Bienvenido!</span></h1>
                        <p>¡Hola! Bienvenido de vuelta, por favor ingrese sus datos.</p>

                        <form className="formulario-login" onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder="Ingrese su DNI" 
                                value={dni}
                                onChange={(e) => setDni(e.target.value)}
                                required 
                            />
                            <input 
                                type="email" 
                                placeholder="Ingrese su correo electrónico" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                            />
                            <input 
                                type="password" 
                                placeholder="Ingrese su contraseña" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required 
                            />
                            <div className="opciones-login">
                                <label>
                                    <input type="checkbox" />¿Recordar contraseña?
                                </label>
                                <a href="#">¿Olvidaste tu contraseña?</a>
                            </div>
                            <button className="btn-login" type="submit">Iniciar sesión</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="camion-icono"></div>
        </div>
    );
};

export default Login;


// import React from 'react';
// import './Login.css'; 
// import loginGestor2 from '../../images/loginGestor2.png'
// import logo from '../../images/logo.png'

// const Login = () => {
//     return (
//         <div className="body-login">
//             {/* Los triángulos como decoración */}

//             <div className="container-login">
//                 {/* Imagen del lado izquierdo */}
//                 <div className="izquierda-img-login">
//                     <img src={loginGestor2} alt="Imagen de incidencias" className="LoginGestor" />
//                 </div>

//                 {/* Formulario de Login */}
//                 <div className="derecha-form-login">
//                     <div className="login-box">
//                         <div className="logo-login">
//                             <img src={logo} alt="Logo"/>
//                         </div>
//                         <h1>Hola <span>¡Bienvenido!</span></h1>
//                         <p>¡Hola! Bienvenido de vuelta, por favor ingrese sus datos.</p>

//                         <form className="formulario-login" action="#">
//                             <input type="text" placeholder="Ingrese su DNI" required />
//                             <input type="email" placeholder="Ingrese su correo electrónico" required />
//                             <input type="password" placeholder="Ingrese su contraseña" required />
//                             <div className="opciones-login">
//                                 <label>
//                                     <input type="checkbox" />¿Recordar contraseña?
//                                 </label>
//                                 <a href="#">¿Olvidaste tu contraseña?</a>
//                             </div>
//                             <button className="btn-login" type="submit">Iniciar sesión</button>
//                         </form>
//                     </div>
//                 </div>
//             </div>

//             {/* Icono del camión - falta*/}
//             <div className="camion-icono"></div>
//         </div>
//     );
// };

// export default Login;