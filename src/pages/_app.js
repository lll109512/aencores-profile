import 'tailwindcss/tailwind.css'
import React, { useEffect } from 'react'
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
    useEffect(() => {
        window.history.scrollRestoration = 'manual'
      }, []);
    return (
    <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
    )
}

export default MyApp