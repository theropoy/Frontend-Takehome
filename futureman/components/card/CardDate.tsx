import { useContext } from 'react'
import styles from '../../styles/Card.module.css'
import { UserContext } from '../cardRouter/CardRouter'
type Props = {
    
    first?: boolean
    pathLen: number
    title: string
    
    value: Date,
    callback: (x: Date) => void
}

const CardDate: React.FC<Props> = ({ first = false, pathLen, title, value, callback,}) => {

    const contextData = useContext(UserContext);

    const goBack = () => {
        if (!first) {
            contextData.goBack();
        }
    }

    const goNext = () => {
            contextData.goNext(pathLen);
            //next();
    }

    return (
        <div className={styles.container}>
            <div className={styles.navigation}>
                <button className={first? styles.disabled : styles.active} onClick={goBack}>Back</button>
                <button className={styles.active} onClick={goNext}>Next</button>
            </div>
            <h2>{title}</h2>
            <div className={styles.content}>
                <input className={styles.date} type="date" value={value.toISOString().substring(0, 10)} onChange={(e) => callback(new Date(e.target.value))} ></input>
            </div>
            
        </div>
    )
}

export default CardDate;