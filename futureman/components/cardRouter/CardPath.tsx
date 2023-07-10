import React from "react";
import { locationType } from "../types";

type Props = {
    children: JSX.Element | JSX.Element[]
    location: locationType
}

const CardPath: React.FC<Props> = ({children, location}) => {
    return(
        <>
            {children.constructor === Array? children[location.question] : children}
        </>
    )
}

export default CardPath;