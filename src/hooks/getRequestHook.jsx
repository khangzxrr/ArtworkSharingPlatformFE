import { useEffect, useState } from "react"
import { userGetRequest, creatorGetRequest } from "services/requestService"
import { isContainCreatorRole, isContainUserRole } from "stores/authenticationStore"

export const useGetRequestById = (requestId, pageState) => {
    const [request, setRequest] = useState({ user: { login: '' } })

    console.log('getting request')

    useEffect(() => {
        if (isContainUserRole()) {
            userGetRequest(requestId)
                .then(response => setRequest(response))
        } else
            if (isContainCreatorRole()) {
                creatorGetRequest(requestId)
                    .then(response => setRequest(response))
            }
    }, [requestId, pageState])

    return request
}
