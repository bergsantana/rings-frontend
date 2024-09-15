import { Bearer } from "./bearer"

export interface Ring {
    name: string
    bearer: string
    power: string
    forgedBy: 'Elves' | 'Dwarves' | 'Men' | 'Sauron'
    image: string
    Bearer : Bearer

}