export type AuthStatus = boolean | undefined

export interface Creator {
    firstName: string
    lastName: string
    avatar: string
    projectNumber: number
}

export interface Profile {
    name: string
    surname: string
    patronymic: string,
    bio: string
    money: number
    personalWebLink: string
    facebookLink: string
    twitterLink: string
    instagramLink: string
    projects: number
}

export interface Project {
    name: string
    shortDescription: string
    fullDescription: string
    image: string
    finished: boolean
    needed: number
    collected: number
    sponsors: number
    startDate: Date
    endDate: Date
    category: string
    creator: Creator
}
