import React, { useContext, useEffect } from "react";
import { locationType } from "../types";
import { UserContext } from "./CardRouter";

type Props = {
    children: JSX.Element | JSX.Element[],
    onEnter?: () => void,
}

const CardLevel: React.FC<Props> = ({children, onEnter}) => {
    
    const contextData = useContext(UserContext);
    
    useEffect(() => {
        if (onEnter) {
            onEnter();
        }
    }, [])
    
    return (
        <>
            {children.constructor === Array? children[contextData.location.path] : children}
        </>
    )
}

export default CardLevel;