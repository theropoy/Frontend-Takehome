import React, { useEffect, useState } from "react";
import styles from '../styles/Card.module.css'

type Props = {
    
    first?: boolean
    title: string
    
    value: string,
    callback: (x: string) => void
    next: () => void
    back: () => void
}

const CardText: React.FC<Props> = ({ first = false, title, value, callback, next, back}) => {

    const [hasValue, setHasValue] = useState(false);
    useEffect(() => {
        if (value != "") {
            setHasValue(true);
        }
    }, [value])

    const goBack = () => {
        if (!first) {
            back();
        }
    }

    const goNext = () => {
        if (hasValue) {
            next();
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