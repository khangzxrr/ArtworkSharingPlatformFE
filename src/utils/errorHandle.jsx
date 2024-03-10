import { notification } from "antd"


export const translateErrorToNotify = (error) => {

    if (error.response.data.message === 'error.UserAlreadyLikeArtwork') {
        notification.error({ message: 'Error', description: 'You already like this artwork!'})
        return
    }
    
    if (error.response.data.message === 'error.existOnGoingArtworkSelling') {
        notification.error({ message: 'Error', description: 'This artwork has exist on going selling!'})
        return
    }

    if (error.response.data.message === 'error.artworkNotBelongToUser') {
        notification.error({ message: 'Error', description: 'This artwork is not belong to you!'})
        return
    }

    if (error.response.data.message === 'error.RequestIsNotOnCorrectState') {
        notification.error({ message: 'Error', description: 'Request is not in correct state to perform action'})
        return
    }

    notification.error({ message: 'Error', description: 'Something wrong happened, please try again'})



}