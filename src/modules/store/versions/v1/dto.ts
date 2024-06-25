export const PlanEnum = {
    BASIC: "BASIC",
    SUPER: "SUPER",
    ADVANCED: "ADVANCED"
} as const

export const TemplateEnum = {
    PRISMA: "PRISMA"
} as const

export const PaymentMethodsEnum = {
    MERCADO_PAGO: 'MERCADO_PAGO',
    PIX: 'PIX',
    STRIPE: 'STRIPE',
    PAYPAL: 'PAYPAL'
} as const

export type CategoryDetailsDto = {
    id: string
    title: string
    slug: string
    description: string | null
}

export type GatewayDto = {
    name: keyof typeof PaymentMethodsEnum
    fee: number,
    feeType: "FIXED" | "PERCENTAGE",
    feeEnabled: boolean
}

export type PrismaBannerCleanDto = {
    type: "clean",
    options: {
        showLogo: boolean,
        logoPosition: "left" | "center" | "right"
    }
}

export type PrismaBannerFullDto = {
    type: "full",
    options: {
        showLogo: boolean,
        connect: {
            title: string,
            subTitle: string,
            href: string
        },
        discord: {
            title: string,
            subTitle: string,
            href: string
        }
    }
}

export type StoreInfoPrismaDto = {
    template: keyof typeof TemplateEnum,
    components: {
        Banner: PrismaBannerCleanDto | PrismaBannerFullDto
    }
}

export type StoreInfoDto = {
    id: string
    title: string
    description: string
    body: string | null,
    terms: string | null,
    logo: string
    favicon: string
    banner: string | null
    subdomain: string
    domain: string | null
    currency: string
    keywords: string
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
            productId: string,
            product: {
                name: string,
                price: number
                image: string | null
            }
        }
        DISCORD?: {
            name: "DISCORD",
            discordURL: string
        }
        ONLINE_PLAYERS?: {
            name: "ONLINE_PLAYERS";
            serverIp: string;
            serverPort: number;
        }
        CHAT_ONLINE?: {
            name: "CHAT_ONLINE",
            token: string
        }
    },
    networkSocial: {
        discord: string | null,
        youtube: string | null,
        github: string | null
    } | null,
    visualEffects: {
        SNOWFLAKE?: {
            color: string,
            radius: number,
            snowFlakeCount: number
        }
    },
    gateways: GatewayDto[]
    categories: CategoryDetailsDto[]
} & StoreInfoPrismaDto