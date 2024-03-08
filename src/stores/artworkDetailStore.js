import { getArtworkById, updateArtworkById } from "services/artworkService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { isContainCreatorRole, isContainUserRole } from "./authenticationStore";

export const useArtworkDetailStore = create(devtools(
    (set, get) => ({
        artwork: {
            id: undefined,
            category: {
                name: ''
            },
            owner: {
                login: ''
            },
            artworkAssets: []
        },
        getAssets: (artwork) => {
            return artwork.artworkAssets.filter(as => as.thumbnail === false)
        },
        getThumbnailAsset: (artwork) => {
            return artwork.artworkAssets.filter(as => as.thumbnail === true)[0]
        },
        updateArtwork: async (categoryId, name, description, visibility, thumbnailUrl, otherAssetUrls) => {

            const artworkId = get().artwork.id
            
            const response = await updateArtworkById(artworkId, categoryId, name, description, visibility, thumbnailUrl, otherAssetUrls)

            set({ artwork: response })

            return response
        },
        fetchArtwork: async (artworkId) => {
            let response = await getArtworkById(artworkId)

            set({ artwork: response })
        }
    })
))
