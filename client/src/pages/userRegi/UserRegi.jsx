import './UserRegi.css'
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";
export default function Register() {
    function refreshPage() {
        setTimeout(()=>{
            window.location.reload(false);
        }, 500);
        console.log('page to reload')
    }

    return (
        <>
            <Header />
            <div className="register">
                <span className="registerTitle">Register with us!</span>
                <div className="container">
                    <div className="row justify-content-around">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <img className="ureg-img" src="https://media.istockphoto.com/vectors/vector-modern-flat-doctor-and-patient-character-illustration-female-vector-id1193121403?k=20&m=1193121403&s=612x612&w=0&h=BRBK0SYCWnlsy0aRpTk0coSYYFF7ZiTihm7UxnPjK50="></img>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            <form className="registerForm">
                                <label>Username</label>
                                <input type="text" className="registerInput" placeholder='Enter your name...' />
                                <label>Email</label>
                                <input type="text" className="registerInput" placeholder='Enter your Email...' />
                                <label>Password</label>
                                <input type="password" className="registerInput" placeholder='Enter your password...' />
                                <button className="registerButton">
                                    <Link to="/register_as_user" className="link ureg-text">Register</Link></button>
                            </form>
                            <button onClick={ refreshPage } className="registerLoginButton">
                                <Link to="/login_as_user" className="link ureg-text">Login</Link></button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}