import 'tailwindcss/tailwind.css'
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
    return (
    <AnimatePresence exitBeforeEnter>
        <Component {...pageProps}/>
    </AnimatePresence>
    )
}

export default MyApp