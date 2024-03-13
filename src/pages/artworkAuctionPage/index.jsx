import React, { useEffect, useRef } from "react";
import { Col, Row, notification } from "antd";
import { ArtworkComponent, ArtworkDetail, ArtworkList, ArtworkSellingBidForm, ArtworkSellingBidList } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useArtworkDetailStore } from "stores/artworkDetailStore";
import { BASE_WEBSOCKET_URL } from "utils/constants";
import SockJsClient from 'react-stomp'
import { useAuthenticationStore } from "stores/authenticationStore";
import { useSellingAuctionStore } from "stores/sellingAuctionStore";

const Index = () => {

    const { artworkId, sellingId } = useParams()


    const socketClientRef = useRef(null)

    const accessToken = useAuthenticationStore(state => state.accessToken)
    const account = useAuthenticationStore(state => state.account)

    const artwork = useArtworkDetailStore(state => state.artwork)
    const loading = useArtworkDetailStore(state => state.loading)

    const fetchBids = useSellingAuctionStore(state => state.fetchBids)
    const fetchArtwork = useArtworkDetailStore(state => state.fetchArtwork)

    useEffect(() => {
        fetchArtwork(artworkId)
        fetchBids(artworkId, sellingId)
    }, [artworkId])

    const navigate = useNavigate()

    const onReceivingMessage = (msg) => {

        console.log('onReceivingMessage', msg)

        if (msg === 'auctionFinished') {
            notification.info({
                message: 'Auction finished',
                description: 'The auction has finished, redirect to artwork page'
            
            })
            navigate(`/artworks/${artworkId}`)
        }

        setTimeout(() => {
            fetchBids(artworkId, sellingId)
        }, 500)
    }


    return (

        <>
            <SockJsClient
                url={BASE_WEBSOCKET_URL + `?access_token=${accessToken}`}
                topics={[`/topic/artwork_selling/${sellingId}`]}
                onMessage={(msg) => onReceivingMessage(msg)}
                ref={(client) => { socketClientRef.current = client }}
            />
            <Row>
                <Col span={10}>
                    <ArtworkComponent loading={loading} showAuctionPage={false} artwork={artwork} />
                </Col>
                <Col span={12}>
                    <Row>
                        <Col span={10}>
                            <h1>Auction bids</h1>
                            <ArtworkSellingBidList />
                        </Col>

                        {
                            account.login != artwork.owner.login &&
                            <Col span={12}>
                                <h1>Auction form</h1>
                                <ArtworkSellingBidForm artworkId={artworkId} sellingId={sellingId} />
                            </Col>
                        }

                    </Row>
                </Col>
            </Row>

        </>

    )
}

export default Index