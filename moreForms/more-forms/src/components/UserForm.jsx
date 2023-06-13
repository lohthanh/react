import React, { useState } from  'react';
import styles from './UserForm.module.css'
    
const UserForm = () => {
    //this is the form or 'this' state/current inputs

    const [firstName, setFirstName] = useState("");
    const [firstNameErr, setFirstNameErr] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameErr, setLastNameErr] = useState("");
    const [email, setEmail] = useState("");
    const [emailErr, setEmailErr] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErr, setPasswordErr] = useState("");
    const [confirmPsw, setConfirmPsw] = useState("");
    const [confirmPswErr, setConfirmPswErr] = useState("");

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setFirstNameErr("First name must be at least 2 characters");
        } else {
            setFirstNameErr("");
        }
    }
    
    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2 && e.target.value.length > 0) {
            setLastNameErr("Last name must be at least 2 characters");
        } else {
            setLastNameErr("");
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5 && e.target.value.length > 0) {
            setEmailErr("Email must be at least 5 characters");
        } else {
            setEmailErr("");
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8 && e.target.value.length > 0) {
            setPasswordErr("Password must be at least 8 characters");
        } else {
            setPasswordErr("");
        }
    }

    const validateConfirmPsw = (e) => {
        setConfirmPsw(e.target.value);
        if (e.target.value !== password) {
            setConfirmPswErr("Password does not match")
        } else if ( e.target.value.length > 0) {
            setConfirmPswErr("")
        } else {
            setConfirmPswErr("")
        }
    }



    return(
        <>
        <form>
            <div className={`${styles.formLabel} ${styles.display}`}>
                <label className={styles.marginLeft}>First Name: </label> 
                <input className={styles.formInput} type="text" name="firstName" value={firstName} onChange={ validateFirstName } />
            </div>
                {
                    firstNameErr ? 
                    <p className={styles.errorMsg}>{firstNameErr}</p> :
                    ''
                }
            <div className={`${styles.formLabel} ${styles.display}`}>
                <label className={styles.marginLeft}>Last Name: </label> 
                <input className={styles.formInput} type="text" value={lastName} onChange={ validateLastName } />
            </div>
                {
                    lastNameErr ? 
                    <p className={styles.errorMsg}>{lastNameErr}</p> :
                    ''
                }
            <div className={`${styles.formLabel} ${styles.display}`}>
                <label className={styles.marginLeft}>Email Address: </label> 
                <input className={styles.formInput} type="text" value={email} onChange={ validateEmail }/>
            </div>
                {
                    emailErr ? 
                    <p className={styles.errorMsg}>{emailErr}</p> :
                    ''
                }
            <div className={`${styles.formLabel} ${styles.display}`}>
                <label className={styles.marginLeft}>Password: </label>
                <input className={styles.formInput} type="password" value={password} onChange={ validatePassword }/>
            </div>
                {
                    passwordErr ? 
                    <p className={styles.errorMsg}>{passwordErr}</p> :
                    ''
                }
            <div className={`${styles.formLabel} ${styles.display}`}>
                <label className={styles.marginLeft}>Confirm Password: </label> 
                <input className={styles.formInput} type="password" value={confirmPsw} onChange={ validateConfirmPsw } />
            </div>
                {
                    confirmPswErr ? 
                    <p className={styles.errorMsg}>{confirmPswErr}</p> :
                    ''
                }
        </form>

        </>
    );
};
    
export default UserForm;
