import { useEffect, useState } from "react"
import { getAllRequestProgressByRequestId } from "services/requestProgressService"

export const useGetRequestProgresses = (requestId) => {
    const [requestProgresses, setRequestProgresses] = useState([])

    useEffect(() => {
        getAllRequestProgressByRequestId(requestId)
            .then(response => setRequestProgresses(response))
    }, [requestId])

    return requestProgresses
}