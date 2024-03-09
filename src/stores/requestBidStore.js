import { getRequestBidsByRequestId } from "services/requestBidService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useRequestBidStore = create(devtools(
    (set, get) => ({
        requestBids: [],
        loading: false,

        fetchRequestBidsByRequestId: async (requestId) => {
            set({ loading: true })

            const response = await getRequestBidsByRequestId(requestId)

            set({ requestBids: response, loading: false })

            return response
        }
    })
))