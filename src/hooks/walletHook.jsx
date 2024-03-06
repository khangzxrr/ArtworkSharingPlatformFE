import { useEffect, useState } from "react"
import { getWallet, getWalletTransactions } from "services/walletService"

export const useGetWallet = (refreshWallet = 0) => {
    const [wallet, setWallet] = useState({ amount: 0 })

    useEffect(() => {
        getWallet().then(response => setWallet(response))
    }, [refreshWallet])

    return wallet
}

export const useGetWalletTransactions = (refreshWallet = 0) => {
    const [walletTransactions, setWalletTransactions] = useState([])

    useEffect(() => {
        getWalletTransactions().then(response => setWalletTransactions(response))
    }, [refreshWallet])

    return walletTransactions
}