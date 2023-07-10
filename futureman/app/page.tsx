"use client"
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { locationType } from '@/components/types'
import CardRouter from '@/components/cardRouter/CardRouter';
import CardLevel from '@/components/cardRouter/CardLevel';
import CardPath from '@/components/cardRouter/CardPath';
import CardNumber from '@/components/card/CardNumber';
import CardText from '@/components/card/CardText';
import CardDate from '@/components/card/CardDate';

export default function Home() {
	const [locations, setLocations] = useState<locationType[]>([{level: 0, path: 0, question: 0}]);
	const location: locationType = locations[locations.length - 1];

	const [val0, setVal0] = useState({q1: 0, q2: 0});
	const [val1, setVal1] = useState({q1: "", q2: new Date()});
	const [result, setResult] = useState("");

	const goNext = (max: number) => {
		const currentLocations = [...locations];
		const currentLocation = {...locations[locations.length - 1]};
	
		if (currentLocation.question + 1 == max) {
	
		  // Check if coming from level 0
		  if (currentLocation.level == 0) {
			if(!((val0.q1 + val0.q2) % 2==0)) currentLocation.path = 1;
		  } else {
			currentLocation.path = 0;
		  }
	
		  currentLocation.question = 0;
		  currentLocation.level += 1;
		} else {
		  currentLocation.question += 1;
		}
	
	
		currentLocations.push(currentLocation);
		setLocations(currentLocations);
	}

	const goBack = () =>  {
		const currentLocations = [...locations];
		const currentLocation = {...locations[locations.length - 1]};
	
		if (currentLocation.question == 0) {
		  currentLocation.question = 1;
		  currentLocation.level -= 1;
		} else {
		  currentLocation.question -= 1;
		}
	
		currentLocations.pop();
		setLocations(currentLocations);
	  }

	return (
    	<main className={styles.main}>
      		<h1 className={styles.title}>FIND YOUR DESTINY</h1>

			<CardRouter location={location} goNext={goNext} goBack={goBack}>
				<CardLevel key={0} location={location}>
					<CardPath location={location}>
						<CardNumber first={true} pathLen={2} title= "Choose your favorite number" value={val0.q1} callback={(x: number) => setVal0({...val0, q1: x}) }/>
						<CardNumber pathLen={2}  title= "Choose your least favorite number" value={val0.q2} callback={(x: number) => setVal0({...val0, q2: x}) } />
					</CardPath>
				</CardLevel>

				<CardLevel key={1} location={location}>
					<CardPath location={location}>
						<CardText  pathLen={2} title= "Name your crush" value={val1.q1} callback={(x: string) => setVal1({...val1, q1: x}) }/>
						<CardDate  pathLen={2} title= "When was your crush born?" value={val1.q2} callback={(x: Date) => setVal1({...val1, q2: x}) }/>
					</CardPath>
					<CardPath location={location}>
						<CardText  pathLen={2} title= "Name your best friend" value={val1.q1} callback={(x: string) => setVal1({...val1, q1: x}) }/>
						<CardDate  pathLen={2} title= "When is the next birthday of your best friend?" value={val1.q2} callback={(x: Date) => setVal1({...val1, q2: x}) }/>
					</CardPath>
				</CardLevel>
      		</CardRouter>
		</main>
  	)
}
