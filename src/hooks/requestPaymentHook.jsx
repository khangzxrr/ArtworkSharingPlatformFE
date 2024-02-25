import { useEffect, useState } from "react"
import { getFirstPayment, getSecondPayment, payFirstPayment } from "services/requestPaymentService"

export const useGetFirstPayment = (requestId) => {
    const [firstPayment, setFirstPayment] = useState({})

    useEffect(() => {
        getFirstPayment(requestId).then(response => setFirstPayment(response))
    }, [requestId])

    return firstPayment
}

export const useGetSecondPayment = (requestId) => {
    const [secondPayment, setSecondPayment] = useState({})

    useEffect(() => {
        getSecondPayment(requestId).then(response => setSecondPayment(response))
    }, [requestId])

    return secondPayment
}
