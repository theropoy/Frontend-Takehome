import styles from '../styles/Result.module.css'
import { useContext, useEffect } from 'react'
import { locationType } from './types'
import { UserContext } from './cardRouter/CardRouter'

type Props = {
    text: string
    val0: {q1: number, q2: number}
    val1: {q1: string, q2: Date}
}

const Result: React.FC<Props> = ({text, val0, val1,}) => {
    const contextData = useContext(UserContext);

    return(
        <div className={styles.container}>
            <nav>
                
                {contextData.locations.map(( _, k) => {
                   const isLast = k + 1 == contextData.locations.length;
                   return <button key={k} onClick={() => !isLast? contextData.goTo(k): null} className={isLast? styles.end : ''}>
                        { !isLast? k + 1 : 'Result'}
                    </button>
                })}
            </nav>
            <h2>Your Result Is:</h2>
            <h3>{text}</h3>

            <ul className={styles.questions}> 
                <li onClick={() => contextData.goTo(0)}>Qustion 1: {val0.q1}</li>
                <li onClick={() => contextData.goTo(1)}>Qustion 2: {val0.q2}</li>
                <li onClick={() => contextData.goTo(2)}>Qustion 3: {val1.q1}</li>
                <li onClick={() => contextData.goTo(3)}>Qustion 4: {val1.q2.toDateString()}</li>
            </ul>
        </div>
    )
}

export default Result;