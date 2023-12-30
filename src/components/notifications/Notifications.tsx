import {FC, useEffect, useState} from "react"
import "./style.css"

type notifications_type = "success" | "error" | "warning" | "info"

interface notifications {
    type: notifications_type,
    text: string,
    title: string,
    show?: boolean,
}

const Notifications: FC<notifications> = ({type, text, title, show = false}) => { 

    const styles = `absolute bottom-[10px] right-[10px] p-4 rounded text-[#e2e8f0] ${type}`
    const [isVisible, setIsVisible] = useState<boolean>(show)
    
    useEffect(()=>{
        if (show) {
            const timer = setTimeout(()=>{
                setIsVisible(false)
            }, 10000)

            return () => {
                clearTimeout(timer)
            }
        }

    }, [show])

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