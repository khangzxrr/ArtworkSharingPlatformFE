import { getRequestById } from "services/requestService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useRequestDetailStore = create(devtools(
    (set, get) => ({
        request: {
            user: {
                login: ""
            }
        },
        loading: false,

        fetchRequestById: async (requestId) => {
            set({ loading: true })

            const response = await getRequestById(requestId)

            set({ request: response, loading: false })

            return response
        }
    })
))