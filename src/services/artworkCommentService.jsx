import { userAxios } from "utils/axios"

export const creatorCreateArtworkComment = async (artworkId, content) => {
    const response = await userAxios.post(`/creator/artworks/${artworkId}/comments`, {
        content
    })

    return response.data
}


export const AudienceCreateArtworkComment = async (artworkId, content) => {
    const response = await userAxios.post(`/audience/artworks/${artworkId}/comments`, {
        content
    })

    return response.data
}


export const AudienceGetArtworkComments = async (artworkId, pageIndex, pageSize) => {
    const response = await userAxios.get(`/audience/artworks/${artworkId}/comments?sort=createdDate,desc&page=${pageIndex}&size=${pageSize}`)

    return { list: response.data, totalCount: response.headers['x-total-count'] }
}

export const CreatorGetArtworkComments = async (artworkId, pageIndex, pageSize) => {
    const response = await userAxios.get(`/creator/artworks/${artworkId}/comments?sort=createdDate,desc&page=${pageIndex}&size=${pageSize}`)

    return { list: response.data, totalCount: response.headers['x-total-count'] }
}