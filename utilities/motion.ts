

// @ts-ignore
export const leftToRightDelay = (delay, transition) => {
    return {
        hidden: {
            x: "-100vw",
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: transition,

            }
        },
    }
}

// @ts-ignore
export const rightToLeftDelay = (delay, transition) => {
    return {
        hidden: {
            x: "100vw",
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: transition,

            }
        },
    }
}
// @ts-ignore
export const rightToLeftNormal = () => {
    return {
        hidden: {
            x: "100vw",
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    }
}


// @ts-ignore
export const leftToRightNormal = (delay, transition) => {
    return {
        hidden: {
            x: "-100vw",
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
        },
    }
}


// @ts-ignore

export const hiddenToVisibleDelay = (delay, transition) => {
    return {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: delay,
                duration: transition,

            }
        },
    }
}