import 'tailwindcss/tailwind.css'
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
    // return  <Component {...pageProps} key={router.route}/>
    return (
    <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
    )
}

export default MyApp