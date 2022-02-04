import "./DocList.css"
import { Link } from "react-router-dom";
export default function Patient() {
    return (
        <>
            <div>
                <h1 className="title">Patient</h1>
                <h3 className="name">Hello, name!</h3>
                <div className="elli1"></div>
                <div className="elli2"></div>
            </div>
            <h1 className="title2">Doctors</h1>
            <div className="main style-nav nav__menu">
                
                <ul className="nav nav-fill text nav__list">
                    <li className="nav-item nav__items">
                        <Link to="/general" className="nav-link">General Physician</Link>
                        {/* <a className="nav-link" href="/general">General Physician</a> */}
                    </li>
                    <li className="nav-item nav__items">
                        <Link to="/pediatrical" className="nav-link">Pediatricial</Link>
                        {/* <a className="nav-link" href="/pediatrical">Pediatricial</a> */}
                    </li>
                    <li className="nav-item nav__items">
                        <Link to="/neurologist" className="nav-link">Neurologist</Link>
                        {/* <a className="nav-link" href="/neurologist">Neurologist</a> */}
                    </li>
                    <li className="nav-item nav__items">
                        <Link to="/orthopedics" className="nav-link">Orthopedics</Link>
                        {/* <a className="nav-link" herf="/orthopedics">Orthopedics</a> */}
                    </li>
                    <li className="nav-item nav__items">
                        <Link to="/cardiologist" className="nav-link">Cardiologist</Link>
                        {/* <a className="nav-link" herf="/cardiologist">Cardiologist</a> */}
                    </li>
                    <li className="nav-item nav__items">
                        <Link to="/dermatologist" className="nav-link">Dermatologist</Link>
                    </li>
                </ul>


            </div>
        </>
    )
}