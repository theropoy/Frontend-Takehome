import { createContext } from "react";
import { cardRouterType, locationType } from "../types";


export const UserContext = createContext<cardRouterType>({
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
        <UserContext.Provider value={{goNext: goNext, goBack: goBack}}>
            { children[location.level] }
        </UserContext.Provider>
    )
}

export default CardRouter;