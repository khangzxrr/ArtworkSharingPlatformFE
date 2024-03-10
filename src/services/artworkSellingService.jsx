import { bothRolesPost } from "utils/axios"

export const sellArtwork = async (artworkId, type, sellingDuration, expectedSellingPrice) => {
    const response = await bothRolesPost(`artworks/${artworkId}/sellings`, {
        type,
        sellingDuration,
        expectedSellingPrice
    })

    return response.data
}