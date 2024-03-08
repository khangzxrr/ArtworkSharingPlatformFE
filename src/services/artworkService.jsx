import { bothRolesGet, bothRolesPost, bothRolesPut, userAxios } from "utils/axios"


export const getArtworkById = async (artworkId) => {
    const response = await bothRolesGet(`artworks/${artworkId}`)

    return response.data
}


export const audienceGetPublicArtworks = async () => {
    const response = await userAxios.get('/audience/artworks')

    return { list: response.data, totalCount: response.headers['x-total-count'] }
}

export const audienceGetPrivateArtworks = async () => {
    const response = await userAxios.get('/audience/artworks/mine')

    return { list: response.data, totalCount: response.headers['x-total-count'] }
}

export const creatorGetPublicArtworks = async () => {
    const response = await userAxios.get('/creator/artworks')

    return { list: response.data, totalCount: response.headers['x-total-count'] }
}

export const creatorGetPrivateArtworks = async () => {
    const response = await userAxios.get('/creator/artworks/mine')

    return { list: response.data, totalCount: response.headers['x-total-count'] }
}

export const updateArtworkById = async (artworkId, categoryId, name, description, visibility, thumbnailUrl, otherAssetUrls) => {
    const assets = [
        {
            thumbnail: true,
            media: {
                url: thumbnailUrl
            }
        },
        ...otherAssetUrls.map(u => ({
            thumbnail: false,
            media: { url: u }
        }))
    ]

    const response = await bothRolesPut(`artworks/${artworkId}`, {
        name,
        categoryId,
        description,
        assets,
        visibility
    })

    return response.data
}

export const creatorCreateArtwork = async (categoryId, name, description, visibility, thumbnailUrl, otherAssetUrls) => {

    const assets = [
        {
            thumbnail: true,
            media: {
                url: thumbnailUrl
            }
        },
        ...otherAssetUrls.map(u => ({
            thumbnail: false,
            media: { url: u }
        }))
    ]

    const response = await userAxios.post('/creator/artworks', {
        name,
        categoryId,
        description,
        assets,
        visibility
    })

    return response.data
}