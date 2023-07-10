export type locationType = {
    level: number,
    path: number,
    question: number
}

type cardRouterType = {
	location: locationType,
    goNext: (max: number) => void,
	goBack: () => void,
}