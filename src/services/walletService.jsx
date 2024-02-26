import { userAxios } from "utils/axios"

export const getWallet = async () => {
    const response = await userAxios.get('/wallets')

    return response.data
}

export const getWalletTransactions = async () => {
    const response = await userAxios.get('/wallets/transactions')

    return response.data
}

export const depositWallet = async () => {
    const response = await userAxios.post('/wallets/deposit')

    return response.data
}

export const walletCapture = async (orderId) => {
    const response = await userAxios.post(`/wallets/orders/${orderId}/capture`)

    return response.data
}