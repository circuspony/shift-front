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

export interface Creator {
    firstName: string
    lastName: string
    avatar: string
    projectNumber: number
}

export interface Profile {
    firstname: string
    lastname: string
    description: string
    personalWebLink: string
    facebookLink: string
    twitterLink: string
    instagramLink: string
    projects: number
}