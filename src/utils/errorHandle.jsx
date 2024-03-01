import { notification } from "antd"


export const translateErrorToNotify = (error) => {
    if (error.response.data.message === 'error.RequestIsNotOnCorrectState') {
        notification.error({ message: 'Error', description: 'Request is not in correct state to perform action'})
        return
    }

    notification.error({ message: 'Error', description: 'Something wrong happened, please try again'})



}