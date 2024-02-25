import { useEffect, useState } from "react"
import { getFirstPayment, getSecondPayment, payFirstPayment } from "services/requestPaymentService"

export const useGetFirstPayment = (requestId) => {
    const [firstPayment, setFirstPayment] = useState({ amount: 0 })

    useEffect(() => {
        getFirstPayment(requestId).then(response => setFirstPayment(response))
    }, [requestId])

    return firstPayment
}

export const useGetSecondPayment = (requestId) => {
    const [secondPayment, setSecondPayment] = useState({ amount: 0})

    useEffect(() => {
        getSecondPayment(requestId).then(response => setSecondPayment(response))
    }, [requestId])

    return secondPayment
}
