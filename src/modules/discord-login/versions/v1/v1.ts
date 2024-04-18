import { DomainError } from "@/core/errors"
import { Either } from "@/core/logic"
import { RequestManager } from "@/lib"
import { WarpStore } from "@/main"
import { DiscordUserDto } from "./dto"

export class DiscordLoginV1 {
    async getLoginUrl(): Promise<Either<DomainError, { url: string }>> {
        return await RequestManager.makeRequest<{ url: string }, DomainError>("/template/v1/discord-login-url", {
            method: "GET",
            query: {
                storeId: WarpStore.storeId
            }
        })
    }

    async changeCodeForToken(input: DiscordLoginV1.ChangeCodeForTokenInput): Promise<DiscordLoginV1.ChangeCodeForTokenOutput> {
        return await RequestManager.makeRequest<{ accessToken: string }, DomainError>("/template/v1/discord-login/change-code-for-token", {
            method: "GET",
            query: {
                ...input,
                storeId: WarpStore.storeId
            }
        })
    }

    async getCurrentUser(input: DiscordLoginV1.GetCurrentUserInput): Promise<DiscordLoginV1.GetCurrentUserOutput> {
        return await RequestManager.makeRequest<DiscordUserDto, DomainError>("/template/v1/discord-login/current-user", {
            method: "GET",
            query: {
                ...input,
                storeId: WarpStore.storeId
            }
        })
    }
}

export namespace DiscordLoginV1 {
    export type GetLoginUrlOutput = Either<DomainError, {
        url: string
    }>

    export type ChangeCodeForTokenInput = {
        code: string
    }

    export type ChangeCodeForTokenOutput = Either<DomainError, {
        accessToken: string
    }>

    export type GetCurrentUserInput = {
        accessToken: string
    }

    export type GetCurrentUserOutput = Either<DomainError, DiscordUserDto>
}