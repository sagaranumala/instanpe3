import React from 'react'
import Link from 'next/link'
import {signIn,signOut,useSession} from "next-auth/react"
import styles from '../../styles/Navbar.module.css'

export default function Navbar() {
    console.log(process.env.GOOGLE_ID);
     const { data: session, status } = useSession()
     console.log(status)
  return (
    <div className={styles.header}>
          <h1 className={styles.logo1}>
             <span className={styles.text0}>in</span>stanpe
           </h1>

        <ul className={styles.mainNav}>
            <li>
                <Link href='/'>
                    <span className={styles.nav}>Home</span>
                </Link>
            </li>
            <li>
                <Link href='/dashboard'>
                    <span className={styles.nav}>dashboard</span> 
                </Link>
            </li>
            <li>
                <Link href='/blog'>
                <span className={styles.nav}>blog</span>
                </Link>
            </li>
             {
                status==="unauthenticated" && !session &&(
                    <li>
                <Link href='/login/login'>
                {/* onClick={e=>{
                    e.preventDefault();
                    // signIn()
                }}> */}
                    <span className={styles.nav}>Sign In</span>
                </Link>
                </li>)
                
             }
             {session &&(
             <li>
                <Link href='/api/auth/signout' onClick={e=>{
                    e.preventDefault();
                    signOut()
                }}>
                    <span className={styles.nav}>Sign Out</span>
                </Link>
              </li>
            )}
        </ul>
    </div>

  )
}
