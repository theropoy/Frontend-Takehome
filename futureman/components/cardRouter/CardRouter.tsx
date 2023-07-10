import { locationType } from "../types";

type Props={
    children: JSX.Element[],
    location: locationType,
}

const CardRouter: React.FC<Props> = ({children, location}) => {
    return (
        <>
            { children[location.level] }
        </>
    )
}

export default CardRouter;