import { createContext } from "react";
import { cardRouterType, locationType } from "../types";


export const UserContext = createContext<cardRouterType>({
    location: {level: 0, path: 0, question: 0},
    goNext: (max: number) => null,
    goBack: () => null,
});

type Props={
    children: JSX.Element[],
    location: locationType,
    goNext: (max: number) => void,
    goBack: () => void
}

const CardRouter: React.FC<Props> = ({children, location, goNext, goBack}) => {
    return (
        <UserContext.Provider value={{location: location, goNext: goNext, goBack: goBack}}>
            { children[location.level] }
        </UserContext.Provider>
    )
}

export default CardRouter;