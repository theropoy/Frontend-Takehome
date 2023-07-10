import styles from '../styles/Card.module.css'
type Props = {
    
    first?: boolean
    title: string
    
    value: Date,
    callback: (x: Date) => void
    next: () => void
    back: () => void
}

const CardDate: React.FC<Props> = ({ first = false, title, value, callback, next, back}) => {



    const goBack = () => {
        if (!first) {
            back();
        }
    }

    const goNext = () => {

            next();
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