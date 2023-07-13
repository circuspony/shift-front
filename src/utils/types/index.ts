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
    avatarId: string,
    email: string,
    bio: string
    money: number
    personalWebLink: string
    facebookLink: string
    twitterLink: string
    instagramLink: string
    projects: number
}


export enum ProjectStatus {
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED"
}
export interface Project {
    id?: string
    title: string
    summary?: string
    description?: string
    avatarId?: string
    image?: string
    status: ProjectStatus
    isApproved: boolean
    collectedAmount: number
    targetAmount: number
    sponsors: number
    creationDate: Date
    finishDate: Date
    category: string
    creator: Creator
}
