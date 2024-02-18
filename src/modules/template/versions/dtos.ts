

export  const  PlanEnum = {
    BASIC: "BASIC",
    SUPER: "SUPER",
    ADVANCED: "ADVANCED"
} as const

export const PaymentMethodsEnum = {
    MERCADO_PAGO: 'MERCADO_PAGO',
    PIX: 'PIX',
    STRIPE: 'STRIPE',
} as const

export type StoreInfoDto = {
    id: string
    title: string
    description: string
    logo: string
    favicon: string
    banner: string
    subdomain: string
    domain: string | undefined
    currency: string
    keywords: string
    template: number
    plan: keyof typeof PlanEnum
    discordLogin: {
        isEnabled: boolean
    }
    theme: {
        primaryColor: string
        secondaryColor: string
        backgroundPrimaryColor: string
        backgroundSecondaryColor: string
    },
    widgets: {
        FEATURED_PRODUCT?: {
            id: string
            name: string
            image: string
            price: number
        } 
        DISCORD?: {
            discordURL: string
        }
        ONLINE_PLAYERS?: {
            ip: string
            port: number
        }
    },
    visualEffects: {
        SNOW_FLAKE?: { 
            color: string, 
            radius: number, 
            snowFlakeCount: number 
        }
    },
    socialMedia: {
        instagram?: string
        tiktok?: string
        youtube?: string
        discord?: string
    },
    paymentMethods: keyof typeof PaymentMethodsEnum[]
    
    categories: {
        id: string
        title: string
        slug: string
        description: string   
    }[]
}

export type ProductInfoDto = {
    products: {
        id: string
        name: string
        description: string
        price: number
        image: string
        stockQuantity: number
    }
    lastPage: number
    quantityReturned: number
    totalQuantity: number | null
}