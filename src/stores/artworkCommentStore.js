import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { isContainCreatorRole, isContainUserRole } from "./authenticationStore";
import { AudienceGetArtworkComments, CreatorGetArtworkComments } from "services/artworkCommentService";
import { PAGE_SIZE } from "utils/constants";

export const useArtworkCommentStore = create(devtools(
    (set, get) => ({
        comments: [],
        totalCount: 0,
        pageSize: PAGE_SIZE,

        fetchArtworkComments: async (artworkId) => {
            let response = {}

            let pageSize = get().pageSize  

            if (isContainUserRole()) {
                response = await AudienceGetArtworkComments(artworkId, 0, pageSize)
            }
            else
            if (isContainCreatorRole()) {
                response = await CreatorGetArtworkComments(artworkId, 0, pageSize)
            }   

            

            if (response.totalCount > pageSize) {
                pageSize += PAGE_SIZE
            }

            set({ comments: response.list, totalCount: response.totalCount, pageSize})
        }
    })
))
