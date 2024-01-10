import {FC, useEffect, useState} from "react"
import "./style.css"
import {animate, motion} from "framer-motion"

type notifications_type = "success" | "error" | "warning" | "info"

interface notifications {
    type: notifications_type,
    text: string,
    title: string,
    show?: boolean,
    func: () => void
}

const motionOptions = {
    hidden: {
        x: 100000,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1
    }
}

const Notifications: FC<notifications> = ({type, text, title, show = false, func}) => { 

    const styles = `absolute bottom-[10px] right-[10px] p-4 rounded text-[#e2e8f0] ${type}`
    
    useEffect(()=>{

        if (show) {
            
            const timer = setTimeout(()=>{
                func()
            }, 5000)

            return () => {
                clearTimeout(timer)
            }
        }

    }, [])

    return (
        <motion.div initial={'hidden'} animate={'visible'} transition={{delay: 2}} variants={motionOptions} className={styles}>
            <div className="notifications_body">
                <div className="notifications_title">
                    {title}
                </div>
                <div className="notifications_text">
                    {text}
                </div>
            </div>
        </motion.div>
    )
}

export default Notifications;