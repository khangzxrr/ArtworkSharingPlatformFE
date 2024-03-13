import { bothRolesPost } from "utils/axios"

export const sellArtwork = async (artworkId, type, sellingDuration, expectedSellingPrice) => {
    const response = await bothRolesPost(`artworks/${artworkId}/sellings`, {
        type,
        sellingDuration,
        expectedSellingPrice
    })

    return response.data
}

export const buyArtwork = async (id, artworkId) => {
    const response = await bothRolesPost(`artworks/${artworkId}/sellings/${id}/direct-buy`)

    return response.data
}