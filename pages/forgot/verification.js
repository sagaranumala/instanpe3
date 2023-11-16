import React,{useState} from 'react'
import { Formik} from "formik";
import Link from 'next/link';
import styles from '../../styles/login.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';

const Verification = () => {
  const [disableSubmitBtn,setDisableSubmitBtn]=useState(true)
  let errors={}
  let userDeatails={ email: '', password: '' };
  const userValidation=(values)=> {
    console.log(values.password.length)
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }
    console.log(Object.keys(errors).length)
    if(Object.keys(errors).length===0){
        setDisableSubmitBtn(false)
    }else{
        setDisableSubmitBtn(true)
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
            <h1>Verification Code</h1>
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
            <div className={styles.text99}>
              <h4>Enter Your Verification Code</h4>
            </div>
            <div className={styles.inputBox1}>
                  <input
                    className={styles.inputLogin1}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <input
                    className={styles.inputLogin1}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <input
                    className={styles.inputLogin1}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <input
                    className={styles.inputLogin1}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <input
                    className={styles.inputLogin1}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                <input
                    className={styles.inputLogin1}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                /> 
            </div>
            <Link href='/forgot/resetpassword'>
               <button  type='submit' style={{marginTop:'50px'}}  className={styles.btn}>Submit</button>
            </Link>
        
            
        </form>
       )}
       </Formik>
    </div>
    </div>
    </div>
    </>
  )
}

export default Verification

