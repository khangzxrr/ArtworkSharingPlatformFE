import { userAxios } from "utils/axios"

export const audienceGetPublicArtworks = async () => {
    const response = await userAxios.get('/audience/artworks')

    return { list: response.data, totalCount: response.headers['x-total-count'] }
}

export const creatorGetPublicArtworks = async () => {
    const response = await userAxios.get('/creator/artworks')

    return { list: response.data, totalCount: response.headers['x-total-count'] }
}