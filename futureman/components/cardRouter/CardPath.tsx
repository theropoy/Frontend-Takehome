import React, { useContext } from "react";
import { locationType } from "../types";
import { UserContext } from "./CardRouter";

type Props = {
    children: JSX.Element | JSX.Element[]
}

const CardPath: React.FC<Props> = ({children}) => {
    const contextData = useContext(UserContext);
    return(
        <>
            {children.constructor === Array? children[contextData.location.question] : children}
        </>
    )
}

export default CardPath;