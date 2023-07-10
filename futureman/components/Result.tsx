import styles from '../styles/Result.module.css'
import { useEffect } from 'react'
import { locationType } from './types'

type Props = {
    locations:  locationType[]
    goTo: (n: number) => void
    text: string
    val0: {q1: number, q2: number}
    val1: {q1: string, q2: Date}
}

const Result: React.FC<Props> = ({locations, goTo, text, val0, val1,}) => {

    useEffect(() => {
        fetch("/api/result", 
            { 
                method: "POST",
                mode: "cors", 
                cache: "no-cache", 
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({result: text})
            }
        );
    }, [])

    return(
        <div className={styles.container}>
            <nav>
                
                {locations.map(( _, k) => {
                   const isLast = k + 1 == locations.length;
                   return <button key={k} onClick={() => !isLast? goTo(k): null} className={isLast? styles.end : ''}>
                        { !isLast? k + 1 : 'Result'}
                    </button>
                })}
            </nav>
            <h2>Your Result Is:</h2>
            <h3>{text}</h3>

            <ul className={styles.questions}> 
                <li onClick={() => goTo(0)}>Qustion 1: {val0.q1}</li>
                <li onClick={() => goTo(1)}>Qustion 2: {val0.q2}</li>
                <li onClick={() => goTo(2)}>Qustion 3: {val1.q1}</li>
                <li onClick={() => goTo(3)}>Qustion 4: {val1.q2.toDateString()}</li>
            </ul>
        </div>
    )
}

export default Result;