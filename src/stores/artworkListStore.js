import { audienceGetPublicArtworks, creatorGetPublicArtworks } from "services/artworkService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { isContainCreatorRole, isContainUserRole } from "./authenticationStore";
import { translateErrorToNotify } from "utils/errorHandle";
import { likeArtworkById, unlikeArtworkById } from "services/artworkLikeService";

export const useArtworkListStore = create(devtools(
    (set, get) => ({
        artworks: [],
        totalCount: 0,
        getThumbnailAsset: (artwork) => {
            return artwork.artworkAssets.filter(as => as.thumbnail === true)[0]
        },
        unlikeArtworkById: async (artworkId) => {
            try {
                await unlikeArtworkById(artworkId)
                await get().fetchArtworks()
            } catch (exception) {
                translateErrorToNotify(exception)
            }
        },

        likeArtworkById: async (artworkId) => {
            try {
                await likeArtworkById(artworkId)
                await get().fetchArtworks()
            } catch (exception) {
                translateErrorToNotify(exception)
            }

        },

        fetchArtworks: async () => {
            let response = {}

            if (isContainUserRole()) {
                response = await audienceGetPublicArtworks()
            }
            else
                if (isContainCreatorRole()) {
                    response = await creatorGetPublicArtworks()
                }

            set({ artworks: response.list, totalCount: response.totalCount })
        }
    })
))
