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

export type CartItem = MenuItem & {
    quantity: number
    options: string[]
}

export type MenuCategory = 'burgers' | 'sides' | 'beverages' | 'desserts'

export type CartContextType = {
    cartItems: CartItem[]
    addToCart: (product: CartItem) => void
    clearCart: () => void
    removeFromCart: (id:number) => void
    tax: number
    subTotal: number
    total: number
    activeCategory: MenuCategory
    setActiveCategory: (activeCategory: MenuCategory) => void
    activeIndex: number
    setActiveIndex: (activeIndex:number) => void
}