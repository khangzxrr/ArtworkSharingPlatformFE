import { useEffect, useState } from "react"
import { creatorGetRequestBidsOfRequest, userGetRequestBidsOfRequest } from "services/requestBidService"
import { isContainCreatorRole, isContainUserRole } from "stores/authenticationStore"

export const useGetRequestBidsByRequestId = (requestId) => {
    const [requestBids, setRequestBids] = useState([])

    useEffect(() => {
        if (isContainUserRole()) {
            userGetRequestBidsOfRequest(requestId)
                .then(response => setRequestBids(response))
        } else
            if (isContainCreatorRole()) {
                creatorGetRequestBidsOfRequest(requestId)
                    .then(response => setRequestBids(response))
            }
    }, [requestId])

    return requestBids
}
