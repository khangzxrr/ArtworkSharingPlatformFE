import { getArtworkById, updateArtworkById } from "services/artworkService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { sellArtwork } from "services/artworkSellingService";

export const useArtworkDetailStore = create(devtools(
    (set, get) => ({
        loading: true,
        artwork: {
            id: undefined,
            category: {
                name: ''
            },
            owner: {
                login: ''
            },
            artworkAssets: [],
            onGoingArtworkSelling: null,
        },
        getAssets: (artwork) => {
            return artwork.artworkAssets.filter(as => as.thumbnail === false)
        },
        getThumbnailAsset: (artwork) => {
            return artwork.artworkAssets.filter(as => as.thumbnail === true)[0]
        },
        updateArtwork: async (categoryId, name, description, visibility, thumbnailUrl, otherAssetUrls) => {

            set({ loading: true })

            const artworkId = get().artwork.id

            const response = await updateArtworkById(artworkId, categoryId, name, description, visibility, thumbnailUrl, otherAssetUrls)

            set({ artwork: response, loading: false })

            return response
        },
        sellArtwork: async (type, sellingDuration = 0, expectedSellingPrice = 0) => {
            set({ loading: true })

            try {
                const response = await sellArtwork(get().artwork.id, type, sellingDuration, expectedSellingPrice)

                await get().fetchArtwork(get().artwork.id)

                return response
            } catch (exception) {
                throw (exception)
            }
            finally {
                set({ loading: false })
            }

        },
        fetchArtwork: async (artworkId) => {
            set({ loading: true })

            try {
                const response = await getArtworkById(artworkId)

                set({ artwork: response })

                return response

            } catch (exception) {
                throw (exception)
            } finally {
                set({ loading: false })
            }
        }

    })
))
