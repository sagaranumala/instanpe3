import React from 'react'
import { Formik} from "formik";
import styles from '../../styles/login.module.css'
import Link from 'next/link';

let errors={};
const Verification = () => {
  const userValidation=(values)=> {
      if(!values.num1&&!values.num1&&!values.num1&&!values.num1&&!values.num1&&!values.num1&&!values.num1){
        errors.code="Enter all fields";
      }
      return errors
  }

  function handleInput(event){
      if (!/[0-9a-zA-Z]/.test(event.key)) {
        event.preventDefault();
      }
  }
  
  const submitUserData=(values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 6));
      setSubmitting(false);
    }, 400);
  }
  return (
    <>
    
    <div className={styles.signin}>
        <div className={styles.leftLogin}>
            
        </div>
        <div className={styles.box}>
           <div className={styles.wrapper}>
            <h1>Verification Code</h1>
         <Formik
       initialValues={{ num1: '',  num2: '', num3: '', num4: '', num5: '', num6: '' }}
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
                  name="num1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num1}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num2}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num3}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num4"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num4}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num5}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num6"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num6}
                  maxLength={1}
                  onKeyPress={handleInput}
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
