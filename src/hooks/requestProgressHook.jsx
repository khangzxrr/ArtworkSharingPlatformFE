import { useEffect, useState } from "react"
import { creatorGetAllRequestProgressByRequestId, userGetAllRequestProgressByRequestId } from "services/requestProgressService"
import { isContainCreatorRole, isContainUserRole } from "stores/authenticationStore"

export const useGetRequestProgresses = (requestId, pageState = 0) => {
    const [requestProgresses, setRequestProgresses] = useState([])

    useEffect(() => {
        if (isContainUserRole()) {
            userGetAllRequestProgressByRequestId(requestId)
                .then(response => setRequestProgresses(response))
        } else
            if (isContainCreatorRole()) {
                creatorGetAllRequestProgressByRequestId(requestId)
                    .then(response => setRequestProgresses(response))
            }

    }, [requestId, pageState])

    return requestProgresses
}