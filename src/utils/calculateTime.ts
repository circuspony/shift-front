export const calculateTime = (time1: number, time2: number) => {
    let timeRemaining = (time1 - time2) / (1000 * 3600 * 24)
    if (timeRemaining >= 1) return Math.floor(timeRemaining) + " дн."
    if (timeRemaining * 24 >= 1) return Math.floor(timeRemaining * 24) + " ч."
    if (timeRemaining * 24 * 60 >= 1) return Math.floor(timeRemaining * 24 * 60) + " мин."
    throw Error("No correct time estimates")
}