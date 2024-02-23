import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

export const useAuthenticationStore = create(devtools(
    persist(
      (set, get) => ({
        accessToken: undefined,
        account: undefined,
      }),
      {
        name: 'authentication-storage',
      }
    )
  )
)


export const setToken = (accessToken) => useAuthenticationStore.setState((state) => ({ accessToken }))

export const setAccount =  (account) =>  useAuthenticationStore.setState((state) => ({ account }))

export const clearAuthentication = () => useAuthenticationStore.setState((state) => ({ accessToken: undefined, account: undefined }))