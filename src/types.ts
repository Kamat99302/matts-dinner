export type MenuItem = {
    id: number
    name: string
    nameKey?: string
    ingredients: string
    price: string
    img: string
    badge: Badge
    type?: "ice-cream" | "cold-drink" | "hot-drink" | "fries" | "nuggets" | "burger"
}



export type Badge = {
    include: boolean
    color?: "yellow" | "green"
    text?: "popular" | "new"
    showIcon?: boolean
    variant?: "square"
}