import React,{useState} from 'react'
import { Formik} from "formik";
import styles from '../../styles/login.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Resetpassword = () => {
   const [showPassword,setShowPassword] = useState(false);

   const handlePassword=()=>{
        setShowPassword(!showPassword);
   }
  let userDeatails={ email: '', password1: '',password2:'' };
  const userValidation=(values)=> {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    if(values.password1===values.password2){
        errors.passwordmatch='Password does not matched';
    }
    return errors;
  }

  const submitUserData=(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 3));
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
        <blockquote className={styles.boxshodow}>
        <div className={styles.box}>
           <div className={styles.wrapper}>
            <h1>Reset password</h1>
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
                     placeholder='New password'
                     className={styles.inputLogin}
                     type={
                        showPassword ? "text" : "password"
                    } 
                     name="password1"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password1}
                     />
                  <VisibilityOffOutlinedIcon onClick={handlePassword} className={styles.iconLogin}/>
            </div>
            <div className={styles.inputBox1}>
                   <input
                     placeholder='Confirm new password'  
                     className={styles.inputLogin}
                     type='password' 
                     name="password2"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password2}
                     />
                  <KeyIcon className={styles.iconLogin}/>
            </div>
            <div className={styles.forgot}>
                <span>Forgot password?</span>
            </div>

            <button type='submit' className={styles.btn}>Submit</button>
            
        </form>
       )}
       </Formik>
    </div>
    </div>
    </blockquote>
    </div>
    </>
  )
}

export default Resetpassword

