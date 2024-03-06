import { audienceGetPrivateArtworks, audienceGetPublicArtworks, creatorGetPrivateArtworks, creatorGetPublicArtworks } from "services/artworkService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { isContainCreatorRole, isContainUserRole } from "./authenticationStore";

export const useMineArtworkListStore = create(devtools(
    (set, get) => ({
        artworks: [],
        totalCount: 0,
        getThumbnailAsset: (artwork) => {
            return artwork.artworkAssets.filter(as => as.thumbnail === true)[0]
        },
        fetchArtworks: async () => {
            let response = {}

            if (isContainUserRole()) {
                response = await audienceGetPrivateArtworks()
            }
            else
            if (isContainCreatorRole()) {
                response = await creatorGetPrivateArtworks()
            }   
            
            set({ artworks: response.list, totalCount: response.totalCount })
        }
    })
))
