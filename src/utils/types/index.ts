export type AuthStatus = boolean | undefined

export interface iProfile {
    id?: string
    name: string
    surname: string
    patronymic?: string,
    role?: string,
    avatarId?: string,
    email: string,
    bio: string
    money: number
    personalWebLink?: string
    facebookLink?: string
    twitterLink?: string
    instagramLink?: string
    projects?: number
}


export enum ProjectStatus {
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED"
}
export interface iProject {
    id?: string
    title: string
    summary?: string
    description?: string
    authorId?: string
    avatarId?: string
    attachmentIds: string[]
    image?: string
    status: ProjectStatus
    isApproved: boolean
    collectedAmount: number
    targetAmount: number
    sponsors: number
    creationDate: Date
    finishDate: Date
    category: string
    creator: iProfile
}

export interface iRequest {
    id: string
    creationDate: Date
    fullProjectDto: iProject
}