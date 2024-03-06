import { audienceGetPublicArtworks, creatorGetPublicArtworks } from "services/artworkService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { isContainCreatorRole, isContainUserRole, useAuthenticationStore } from "./authenticationStore";

export const useArtworkListStore = create(devtools(
    (set, get) => ({
        artworks: [],
        totalCount: 0,
        fetchArtworks: async () => {
            let response = {}

            if (isContainUserRole()) {
                response = await audienceGetPublicArtworks()
            }
            else
            if (isContainCreatorRole()) {
                response = await creatorGetPublicArtworks()
            }   

            console.log(response)
            
            set({ artworks: response.list, totalCount: response.totalCount })
        }
    })
))
