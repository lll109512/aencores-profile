import React from 'react'
import { defaultTransition } from 'helper/animationHelper'
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion"

const whileHoverIconAnimation = {
    hover:{
        y:-30,
        opacity:1,
        color:'rgb(167,189,220)',
        transition:{
            ...defaultTransition,
        }
    }
}
const whileHoverTextAnimation = {
    initial:{
        opacity:0,
        y:0,
    },
    hover:{
        y:-25,
        opacity:1,
        transition:{
            ...defaultTransition,
            delay:0
        }
    }
}

const NavIcon = (props) => {
    const { icon, label } = props
    return (
        <motion.div initial="initial" whileHover={'hover'} className='w-10 flex flex-col cursor-pointer items-center'>
            <motion.div variants={whileHoverIconAnimation}>{icon}</motion.div>
            <motion.h1 variants={whileHoverTextAnimation} className='text-white'>{label}</motion.h1>
        </motion.div>
    )
}

export default NavIcon
