import {FC, useEffect, useState} from "react"
import "./style.css"
import {} from "@formkit/auto-animate"

type notifications_type = "success" | "error" | "warning" | "info"

interface notifications {
    type: notifications_type,
    text: string,
    title: string,
    show?: boolean,
    func: () => void
}

const Notifications: FC<notifications> = ({type, text, title, show = false, func}) => { 

    const styles = `absolute bottom-[10px] right-[10px] p-4 rounded text-[#e2e8f0] ${type} ${show ? "animated-element" : "animated-element_out"}`
    
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
        <div className={styles}>
            <div className="notifications_body">
                <div className="notifications_title">
                    {title}
                </div>
                <div className="notifications_text">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Notifications;