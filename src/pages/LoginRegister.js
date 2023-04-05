import '../styles/LoginRegister.css';

export function LoginRegister() {
    return (
        <div className="container" id="container">

            <div className="form-container register-container">
                <form action="#">
                    <h1>Register here.</h1>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button>Register</button>
                    <span>or use your account</span>
                    <div className="social-container">
                    <a href="#" className="social"><i className="lni lni-facebook-fill"></i></a>
                    <a href="#" className="social"><i className="lni lni-google"></i></a>
                    </div>
                </form>
            </div>

            <div className="form-container login-container">
                <form action="#">
                    <h1>Login here.</h1>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <div className="content">
                    <div className="checkbox">
                        <input type="checkbox" name="checkbox" id="checkbox"/>
                        <label>Remember me</label>
                    </div>
                    <div className="pass-link">
                        <a href="#">Forgot password?</a>
                    </div>
                    </div>
                    <button>Login</button>
                    <span>or use your account</span>
                    <div className="social-container">
                    <a href="#" className="social"><i className="lni lni-facebook-fill"></i></a>
                    <a href="#" className="social"><i className="lni lni-google"></i></a>
                    </div>
                </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                    <h1 className="title">Hello <br/> peeps!</h1>
                    <p>if you already have an account, login here and start your mangkir journey</p>
                    <button className="ghost" id="login">Login
                        <i className="lni lni-arrow-left login"></i>
                    </button>
                    </div>
                    <div className="overlay-panel overlay-right">
                    <h1 className="title">Start your <br/> mangkir now!</h1>
                    <p>if you don't have an account yet, join us and start your mangkir journey.</p>
                    <button className="ghost" id="register" onClick={{
                        
                    }}>Register
                        <i className="lni lni-arrow-right register"></i>
                    </button>
                    </div>
                </div>
            </div>

        </div>
    );
}