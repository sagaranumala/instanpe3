//import Navbar from '../components/Navbar.js'
import Navbar from './components/Navbar'
import '../styles/globals.css'
import '../styles/login.module.css'
import {useRouter} from 'next/router'

import {motion,AnimatePresence} from 'framer-motion'
//import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { SessionProvider, useSession } from "next-auth/react";
export default function App({ Component, pageProps: { session, ...pageProps }, }) {
      const router=useRouter();
      const transition ={type:'spring',duration:3}
  return (
    <SessionProvider session={session}>
                <AnimatePresence>
                  <motion.div
                 initial={{opacity:0,x:100}}
                 whileInView={{opacity:1,x:0}}
                exit={{opacity:0,x:-100}}
                 transition={transition}
                 >
                          <Navbar/>
                          <Component {...pageProps} />
                     </motion.div>
                </AnimatePresence>
    </SessionProvider>
    
  
  )
  
}

// import '@/styles/globals.css'
// //import Navbar from '../components/Navbar'
// //import '../components/Navbar.css'

// export default function App({ Component, pageProps }) {

//   return <Component {...pageProps} />
  
// }
