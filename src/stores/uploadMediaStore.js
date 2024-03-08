import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { v4 as uuidv4 } from 'uuid';

export const useUploadMediaStore = create(devtools(
    (set, get) => ({
        medias: [],
        thumbnail: [],
        loading: false,
        mapThumbnailToUrl: () => get().thumbnail[0].url,
        mapMediasToUrls: () => get().medias.map(m => m.url),
        setMediaUrls: (mediaUrls) => {

            const mapMediaUrlToFiles = mediaUrls.map(u =>
            ({
                uid: uuidv4(),
                name: `${uuidv4()}.png`,
                status: 'done',
                url: u,
            }))
            set({ medias: mapMediaUrlToFiles })
        },
        setLoading: (loading) => {
            set({ loading })
        },
        setThumbnailUrl: (thumbnailUrl) => {
            set({
                thumbnail: [
                    {
                        uid: uuidv4(),
                        name: `${uuidv4()}.png`,
                        status: 'done',
                        url: thumbnailUrl,
                    },
                ],
                loading: false
            })
        }
    })
))