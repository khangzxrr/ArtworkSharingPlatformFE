import { notification } from "antd"


export const translateErrorToNotify = (error) => {


    if (error.response.data.message === 'error.walletNotEnoughMoneyForArtworkSellingBidPriceException') {
        notification.error({ message: 'Error', description: 'Your wallet amount is not enough to perform biding!'})
        return
    }

    if (error.response.data.message === 'error.artworkSellingBidPriceMustGreaterThanCurrent') {
        notification.error({ message: 'Error', description: 'Bid price must be greater than current highest bid price!'})
        return
    }

    if (error.response.data.message === 'error.SellingDurationMustGreaterThanZero') {
        notification.error({ message: 'Error', description: 'Selling duration must be greater than 0!'})
        return
    }

    if (error.response.data.message === 'error.ArtworkSellingNotFound') {
        notification.error({ message: 'Error', description: 'Artwork selling not found!'})
        return
    }

    
    
    if (error.response.data.message === 'error.artworkSellingIsFinished') {
        notification.error({ message: 'Error', description: 'This artwork selling is finished!'})
        return
    }

    

    if (error.response.data.message === 'error.walletAmountIsNotEnough') {
        notification.error({ message: 'Error', description: 'Your wallet amount is not enough to perform this action!'})
        return
    }

    if (error.response.data.message === 'error.artworkBelongToUser') {
        notification.error({ message: 'Error', description: 'You cannot buy your own artwork!'})
        return
    }

    if (error.response.data.message === 'error.validation') {
        notification.error({ message: 'Error', description: 'Please check all fields, it must be valid before you start!'})
        return
    }

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