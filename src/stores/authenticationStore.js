import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { ADMIN_AUTHORIZE, CREATOR_AUTHORIZE, USER_AUTHORIZE } from '../utils/constants'

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

export const isContainUserRole = () => useAuthenticationStore.getState().account.authorities.includes(USER_AUTHORIZE)

export const isContainCreatorRole = () => useAuthenticationStore.getState().account.authorities.includes(CREATOR_AUTHORIZE)

export const isContainAdminRole = () => useAuthenticationStore.getState().account.authorities.includes(ADMIN_AUTHORIZE)

export const setToken = (accessToken) => useAuthenticationStore.setState((state) => ({ accessToken }))

export const setAccount =  (account) =>  useAuthenticationStore.setState((state) => ({ account }))

export const clearAuthentication = () => useAuthenticationStore.setState((state) => ({ accessToken: undefined, account: undefined }))