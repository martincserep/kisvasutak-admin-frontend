import React , {useState} from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../../backend/login";
import {Redirect} from "react-router-dom";

import styles from "./Login.module.scss";

import bgimage from '../../assets/images/bgimage.jpg'

const Signin = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect,setRedirect] = useState(false);
   
    const dispatch = useDispatch();
    const logInUserAction = (email, password) => dispatch(loginUser(email, password));


    const login = async(e) => {
        e.preventDefault()
        
        if(email !== "" && password !== ""){
            console.log("login user in");
            let user = await logInUserAction(email, password);
            if (user){
              setRedirect(true);
            }
            
        }else{
            console.log("need to fill the credentials")
        }
        
    } 

    const redirectTo = redirect;
    if(redirect){
        return <Redirect to="/" />  
    }


    return(
        <>
            <div className={styles.background} />
            <div className={styles.backdrop} />
                <div className={styles.login}>
                    <div className={styles.formContainer}>
                        <form onSubmit={login}>
                            <span className={styles.title}>Kisvasutak Admin</span>
                                <input placeholder="Email" className={styles.input} type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                                <input placeholder="Password" className={styles.input} name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
                            <button className={styles.button} type="submit">Login</button>
                        </form>
                    </div>  
                </div>
        </>
    )

}

export default Signin;
