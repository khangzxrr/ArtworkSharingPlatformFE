import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getSellingBids } from "services/artworkSellingService";

export const useSellingAuctionStore = create(devtools(
    (set, get) => ({
        loading: false,
        bids: [],

        fetchBids: async (artworkId, id) => {
            set({ loading: true })

            
            const listBids = await getSellingBids(artworkId, id)

            set({ bids: listBids, loading: false })
        }
    })
))
