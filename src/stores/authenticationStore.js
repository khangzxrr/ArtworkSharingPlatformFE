import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useAuthenticationStore = create(devtools(
    persist(
      (set, get) => ({
        accessToken: undefined,
        setAccessToken: (token) => set({ accessToken: token }),
        clearAccessToken: () => set({ accessToken: undefined }),
      }),
      {
        name: 'authentication-storage',
      }
    )
  )
)
