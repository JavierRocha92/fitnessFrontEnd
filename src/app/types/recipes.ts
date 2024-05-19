export interface Recipes {
    recipes: any
    next: string | boolean
    previous: string | boolean
}

export interface total {
    label: string
    total: number
    unit: number
  }
export interface daily {
    label: string
    quantity: number
    unit: string
  }