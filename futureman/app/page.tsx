import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'
import { locationType } from '@/components/types'

export default function Home() {
  const [locations, setLocations] = useState<locationType[]>([{level: 0, path: 0, question: 0}]);

  
  return (
    <main className={styles.main}>
      
    </main>
  )
}
