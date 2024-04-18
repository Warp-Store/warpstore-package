export const PlanEnum = {
    BASIC: "BASIC",
    SUPER: "SUPER",
    ADVANCED: "ADVANCED"
} as const

export const PaymentMethodsEnum = {
    MERCADO_PAGO: 'MERCADO_PAGO',
    PIX: 'PIX',
    STRIPE: 'STRIPE',
} as const

export type CategoryDetailsDto = {
    id: string
    title: string
    slug: string
    description: string
}

export type GatewayDto = {
    name: keyof typeof PaymentMethodsEnum
    fee: number,
    feeType: "FIXED" | "PERCENTAGE",
    feeEnabled: boolean
}

export type StoreInfoDto = {
    id: string
    title: string
    description: string
    body: string
    logo: string
    favicon: string
    banner: string | null
    subdomain: string
    domain: string | null
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
            name: "FEATURED_PRODUCT",
            id: string
            image: string
            price: number
        }
        DISCORD?: {
            name: "DISCORD",
            discordURL: string
        }
        ONLINE_PLAYERS?: {
            name: "ONLINE_PLAYERS",
            ip: string
            port: number
        },
        CHAT_ONLINE?: {
            name: "CHAT_ONLINE",
            token: string
        }
    },
    visualEffects: {
        SNOW_FLAKE?: {
            color: string,
            radius: number,
            snowFlakeCount: number
        }
    },
    gateways: GatewayDto[]
    categories: CategoryDetailsDto[]
}