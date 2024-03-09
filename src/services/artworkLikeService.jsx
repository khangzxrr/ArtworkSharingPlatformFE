import { bothRolesGet, bothRolesPost } from "utils/axios"

export const likeArtworkById = async (artworkId) => {
    const response = await bothRolesPost(`artworks/${artworkId}/like`)

    return response.data
}

export const unlikeArtworkById = async (artworkId) => {
    const response = await bothRolesPost(`artworks/${artworkId}/unlike`)

    return response.data
}
export const getLikeByArtworkId = async (artworkId) => {
    const response = await bothRolesGet(`artworks/${artworkId}/like`)

    return response.data
}
