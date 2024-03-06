import { useEffect, useState } from "react"
import { CreatorGetAllRequestChats, UserGetAllRequestChats } from "services/requestChatService"
import { isContainCreatorRole, isContainUserRole } from "stores/authenticationStore"

export const useGetRequestChatHistories = (requestId) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (isContainUserRole()) {
            UserGetAllRequestChats(requestId).then(response => setMessages(response))
        }
        else 
        if (isContainCreatorRole()) {
            CreatorGetAllRequestChats(requestId).then(response => setMessages(response))
        }
    }, [requestId])

    return messages
}