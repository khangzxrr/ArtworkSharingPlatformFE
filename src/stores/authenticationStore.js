import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useAuthenticationStore = create(devtools(
    persist(
      (set, get) => ({
        accessToken: undefined,
        role: undefined,
        setAuthentication: (token, role) => set({ accessToken: token, role }),
        clearAuthentication: () => set({ accessToken: undefined, role: undefined }),
      }),
      {
        name: 'authentication-storage',
      }
    )
  )
)
