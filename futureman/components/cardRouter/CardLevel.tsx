import React, { useEffect } from "react";
import { locationType } from "../types";

type Props = {
    children: JSX.Element | JSX.Element[],
    location: locationType,
    onEnter?: () => void
}

const CardLevel: React.FC<Props> = ({children, location, onEnter}) => {
    
    useEffect(() => {
        if (onEnter) {
            onEnter();
        }
    }, [])
    
    return (
        <>
            {children.constructor === Array? children[location.path] : children}
        </>
    )
}

export default CardLevel;