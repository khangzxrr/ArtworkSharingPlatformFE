import { getRequestProgressesByRequestId } from "services/requestProgressService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useRequestProgressStore = create(devtools(
    (set, get) => ({
        requestProgresses: [],
        loading: false,

        fetchRequestProgressesByRequestId: async (requestId) => {
            set({ loading: true })

            const response = await getRequestProgressesByRequestId(requestId)

            set({ requestProgresses: response, loading: false })

            return response
        }
    })
))