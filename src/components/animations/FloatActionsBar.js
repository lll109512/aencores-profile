import React, {useEffect} from 'react'
import { motion, useMotionValue, useAnimation, useTransform } from "framer-motion"
import { CgWorkAlt,  CgListTree ,CgToolbox, CgWebsite ,CgImage, CgDarkMode, CgHome } from 'react-icons/cg';
import { MdLanguage } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';
import { defaultTransition } from 'helper/animationHelper'
import NavIcon from './NavIcon'

const iconVariants = {
    initial:({index})=>({
        y:-200 + 30 * ((index % 2)===0?1:-1),
        opacity:0,
    }),
    firstEnter:({index})=>({
        opacity:1,
        y:-200,
        transition:{
            ...defaultTransition,
            delay:0.3 + index * 0.05
        }
    }),
    moveToBottom:({index})=>({
        y:0,
        transition:{
            ...defaultTransition,
            delay:0.3 + index * 0.05
        }
    })
}

const FloatActionsBar = (props) => {
    const controls = useAnimation()
    useEffect(async () => {
        await controls.start('firstEnter')
        await controls.start('moveToBottom')
    }, [])

    const icons = [
        {
            label:'Home',
            icon:<CgHome size={30} color='white'/>
        },
        { 
            label:'Skills',
            icon:<CgListTree size={30} color='white'/>
        },
        { 
            label:'Experience',
            icon:<CgWorkAlt size={30} color='white'/>
        },
        { 
            label:'Tools',
            icon:<CgToolbox size={30} color='white'/>
        },
        { 
            label:'Projects',
            icon:<CgWebsite size={30} color='white'/>
        },
        { 
            label:'Educations',
            icon:<FaUniversity size={30} color='white'/>
        },
        { 
            label:'Arts',
            icon:<CgImage size={30} color='white'/>
        },
        { 
            label:'Language',
            icon:<MdLanguage size={30} color='white'/>
        },
        // { 
        //     label:'Color mode',
        //     icon:<CgDarkMode size={30} color='white'/>
        // },
    ]
    return (
        <div className='absolute bottom-1/4 left-1/2 transform -translate-x-1/2'>
            <motion.div initial='initial' animate={controls} className='flex flex-row'>
                {icons.map(({label,icon},index)=>
                    <motion.div 
                        className='lg:mx-6 sm:mx-4' 
                        key={label} 
                        variants={iconVariants} 
                        custom={{index}}>
                       <NavIcon label={label} icon={icon}/>
                    </motion.div>
                )}
            </motion.div>
        </div>
    )
}

export default FloatActionsBar
