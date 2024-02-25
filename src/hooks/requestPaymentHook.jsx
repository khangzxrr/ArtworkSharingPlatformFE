import { useEffect, useState } from "react"
import { userGetFirstPayment, userGetSecondPayment, payFirstPayment, creatorGetFirstPayment, creatorGetSecondPayment } from "services/requestPaymentService"
import { isContainCreatorRole, isContainUserRole } from "stores/authenticationStore"

export const useGetFirstPayment = (requestId) => {
    const [firstPayment, setFirstPayment] = useState({ amount: 0 })

    useEffect(() => {

        if (isContainUserRole()) {
            userGetFirstPayment(requestId).then(response => setFirstPayment(response))
        }else 
        if (isContainCreatorRole()) {
            creatorGetFirstPayment(requestId).then(response => setFirstPayment(response))
        }
        
    }, [requestId])

    return firstPayment
}

export const useGetSecondPayment = (requestId) => {
    const [secondPayment, setSecondPayment] = useState({ amount: 0})

    useEffect(() => {
        if (isContainUserRole()) {
            userGetSecondPayment(requestId).then(response => setSecondPayment(response))
        } else
        if (isContainCreatorRole()) {
            creatorGetSecondPayment(requestId).then(response => setSecondPayment(response))
        }
        
    }, [requestId])

    return secondPayment
}
