import React from 'react'
import { Formik} from "formik";
import styles from '../../styles/login.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import Link from 'next/link';


const Login = () => {
   
  let userDeatails={ email: '', password: '' };
  const userValidation=(values)=> {
    console.log(values.password.length)
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if (!values.password) {
      errors.password = 'Required';
    }else if(values.password.length<8){
      
       errors.password='Invalid Password'
    }
    return errors;
  }

  const submitUserData=(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }
  return (
    <>
    {/* <div className={styles.logoContainer}>
        <div className={styles.logoinsta}></div>
        <div><h1 className={styles.title}><span className='text'>in</span>stanpe</h1></div>
    </div>  */}
    
    <div className={styles.signin}>
        <div className={styles.leftLogin}>
            
        </div>
        <div className={styles.box}>
           <div className={styles.wrapper}>
            <h1>Login</h1>
            <Formik
               initialValues={userDeatails}
               validate={userValidation}
               onSubmit={submitUserData}
            >
         {({
           values,
           errors,
           touched,
           handleChange,
           handleBlur,
           handleSubmit,
           isSubmitting,
         /* and other goodies */
       }) => (
        <form onSubmit={handleSubmit}>
            <div className={styles.inputBox1}>
                  <input
                    placeholder='Enter your email'
                    className={styles.inputLogin}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                  <MailOutlineIcon className={styles.iconLogin}/>
            </div>
            <div className={styles.inputBox1}>
                   <input
                     placeholder='Enter your password'  
                     className={styles.inputLogin}
                     type='password' 
                     name="password"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
                     />
                  <KeyIcon className={styles.iconLogin}/>
            </div>
            <div className={styles.forgot}>
              <Link href='/forgot/forgotpassword1'>
                   <span>Forgot password?</span>
              </Link>
                
            </div>

            <button type='submit' className={styles.btn}>Login</button>
            <div className={styles.register}>
                 <p>Dont have account?<span>Register</span></p>

            </div>
        </form>
       )}
       </Formik>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login

