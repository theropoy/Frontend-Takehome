export type locationType = {
    level: number,
    path: number,
    question: number
}

type cardRouterType = {
	locations: locationType[],
	location: locationType,
    goNext: (max: number) => void,
	goBack: () => void,
	goTo: (n: number) => void
}