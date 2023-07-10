export type locationType = {
    level: number,
    path: number,
    question: number
}

type cardRouterType = {
    goNext: (max: number) => void,
	goBack: () => void
}