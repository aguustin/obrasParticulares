import './login.css';

const Login = () => {
    return(
        <div>
                <nav className="nav-direccion-obras">
                    <div>
                        <img src="" alt=""></img>
                    </div>
                    <div>
                        <h1>Dirección de Obras Particulares</h1>
                    </div>
                </nav>
                <div>
                    <div>
                            <a href=""><img src="" alt=""></img></a>
                            <a href=""><img src="" alt=""></img></a>
                            <a href=""><img src="" alt=""></img></a>
                            <a href=""><img src="" alt=""></img></a>
                    </div>
                    <div className='form mx-auto'>
                        <form className='mx-auto text-center'>
                            <div className="card-header">
                                <label>INGRESAR A MI CUENTA</label>
                            </div>
                            <div className='card-body mx-auto'>
                                <div className='alignment-inputs mx-auto'>
                                    <div className="input-div">
                                        
                                        <input className='form_input' type="text" name="email" placeholder=" "></input>
                                        <label className='form_label' for="email">Email</label>
                                    </div>
                                    <div className="input-div">
                                    
                                        <input className='form_input' type="password" name="contrasena" placeholder=" "></input>
                                        <label className='form_label' for="email">Contraseña</label>
                                    </div>
                                </div>
                                <div className='entrar-registrarme'>
                                    <button className='mt-4'>Entrar</button>
                                    <div className='mx-auto'>
                                        <button>Registrarme</button>
                                        <button>Olvide mi contraseña</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        </div>
    )
}

export default Login;
