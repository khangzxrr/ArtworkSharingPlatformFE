import { getAllCategories as getAllArtworkCategories } from "services/artworkCategoryService";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useArtworkCategoryStore = create(devtools(
    (set, get) => ({
        categories: [],
        fetchCategories: async () => {
            set({ categories: await getAllArtworkCategories() })
        }
    })
))