import { audienceGetArtworkById, audienceGetPublicArtworks, creatorGetArtworkById, creatorGetPublicArtworks } from "services/artworkService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { isContainCreatorRole, isContainUserRole } from "./authenticationStore";

export const useArtworkDetailStore = create(devtools(
    (set, get) => ({
        artwork: {
            category: {
                name: ''
            },
            owner: {
                login: ''
            },
            artworkAssets: []
        },

        getThumbnailAsset: (artwork) => {
            return artwork.artworkAssets.filter(as => as.thumbnail === true)[0]
        },

        fetchArtwork: async (artworkId) => {
            let response = {}

            if (isContainUserRole()) {
                response = await audienceGetArtworkById(artworkId)
            }
            else
            if (isContainCreatorRole()) {
                response = await creatorGetArtworkById(artworkId)
            }   

            
            set({ artwork: response })
        }
    })
))
