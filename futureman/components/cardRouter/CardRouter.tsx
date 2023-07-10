import { createContext, useState } from "react";
import { cardRouterType, locationType } from "../types";


export const UserContext = createContext<cardRouterType>({
    locations: [{level: 0, path: 0, question: 0}],
    location: {level: 0, path: 0, question: 0},
    goNext: (max: number) => null,
    goBack: () => null,
    goTo: (n: number) => null
});

type Props={
    children: JSX.Element[],
    locations: locationType[],
    setLocations: (location: locationType[]) => void
    decider: (locat: locationType) => locationType
}

const CardRouter: React.FC<Props> = ({children, locations, setLocations, decider}) => {

    
    const goNext = (max: number) => {
		const currentLocations = [...locations];
		let currentLocation = {...locations[locations.length - 1]};
	
		if (currentLocation.question + 1 == max) {
	
            currentLocation = decider(currentLocation);
      
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

    const goTo = (n: number) => {
		const currentLocations = {...locations};
		const newLocations: locationType[] = [];
	
		for (let i = 0; i <= n; i++) {
		  newLocations.push(currentLocations[i]);
		}
		setLocations(newLocations);
	}

    return (
        <UserContext.Provider value={{locations: locations, location: locations[locations.length - 1], goNext: goNext, goBack: goBack, goTo: goTo}}>
            { children[locations[locations.length - 1].level] }
        </UserContext.Provider>
    )
}

export default CardRouter;