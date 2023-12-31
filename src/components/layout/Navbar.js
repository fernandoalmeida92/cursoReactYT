import React from "react";
import {Link} from "react-router-dom"
import Container from "./Container";
import styles from "./Navbar.module.css"
import logo from "../../assets/costs_logo.png"

export default function Navbar(){
    return(
        <nav className={styles.navbar}>  
            <Container>

                <Link to="/">
                    <img src={logo} alt="Costs" />
                </Link>
            <ul className={styles.list}>
                <li className={styles.item}><Link to="/">Home</Link></li>
                <li className={styles.item}><Link to="/project">Projetos</Link></li>
                <li className={styles.item}><Link to="/company">Contato</Link></li>
                <li className={styles.item}><Link to="/contact">Contact</Link></li>
            </ul>
            </Container>
        </nav>
    )
}