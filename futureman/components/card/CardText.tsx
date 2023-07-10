import React, { useContext, useEffect, useState } from "react";
import styles from '../../styles/Card.module.css'
import { UserContext } from "../cardRouter/CardRouter";

type Props = {
    
    first?: boolean
    pathLen: number
    title: string
    
    value: string,
    callback: (x: string) => void

}

const CardText: React.FC<Props> = ({ first = false, pathLen, title, value, callback}) => {
    const contextData = useContext(UserContext);
    const [hasValue, setHasValue] = useState(false);
    useEffect(() => {
        if (value != "") {
            setHasValue(true);
        }
    }, [value])

    const goBack = () => {
        if (!first) {
            contextData.goBack();
        }
    }

    const goNext = () => {
        if (hasValue) {
            contextData.goNext(pathLen);
            //next();
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <button className={first? styles.disabled : styles.active} onClick={goBack}>Back</button>
                <button className={hasValue? styles.active : styles.disabled} onClick={goNext}>Next</button>
            </div>
            <h2>{title}</h2>
            <div className={styles.content}>
                <input className={styles.text} type="text" value={value} onChange={(e) => callback(e.target.value)} placeholder="Name..."></input>
            </div>
            
        </div>
    )
}

export default CardText;