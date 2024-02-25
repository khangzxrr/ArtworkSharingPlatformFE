import { useEffect, useState } from "react"
import { creatorGetAllRequestProgressByRequestId, userGetAllRequestProgressByRequestId } from "services/requestProgressService"
import { isContainCreatorRole, isContainUserRole } from "stores/authenticationStore"

export const useGetRequestProgresses = (requestId) => {
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

    }, [requestId])

    return requestProgresses
}