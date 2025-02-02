import React, { useContext, useEffect, useState } from "react";
import styles from '../../styles/Card.module.css'
import { UserContext } from "../cardRouter/CardRouter";

type Props = {
    first?: boolean
    pathLen: number,
    title: string
    
    value: number,
    callback: (x: number) => void
}

const CardNumber: React.FC<Props> = ({ first = false, pathLen, title, value, callback,}) => {

    const contextData = useContext(UserContext);

    const [hasValue, setHasValue] = useState(false);
    useEffect(() => {
        if (value != 0) {
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
            contextData.goNext(pathLen)
            
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
                <p>{"0 <"}</p>
                <input type="number" min='1' max='100' value={value} onChange={(e) => callback(Number(e.target.value))} onKeyDown={(event) => {
      event.preventDefault();
    }}></input>
                <p>{"> 101"}</p>
            </div>
            
        </div>
    )
}

export default CardNumber;