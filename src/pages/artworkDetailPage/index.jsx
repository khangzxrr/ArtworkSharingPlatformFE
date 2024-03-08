import React, { useEffect, useRef } from "react";
import { Col, Row } from "antd";
import { ArtworkDetail, ArtworkList } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { useArtworkListStore } from "stores/artworkListStore";
import { useArtworkDetailStore } from "stores/artworkDetailStore";
import { BASE_WEBSOCKET_URL } from "utils/constants";
import SockJsClient from 'react-stomp'
import { useAuthenticationStore } from "stores/authenticationStore";
import { useArtworkCommentStore } from "stores/artworkCommentStore";

const Index = () => {

    const { artworkId } = useParams()

    const socketClientRef = useRef(null)

    const accessToken = useAuthenticationStore(state => state.accessToken)
    const fetchArtwork = useArtworkDetailStore(state => state.fetchArtwork)


    const fetchArtworkComments = useArtworkCommentStore(state => state.fetchArtworkComments)


    useEffect(() => {
        fetchArtwork(artworkId)
        fetchArtworkComments(artworkId)
    }, [artworkId])

    const navigate = useNavigate()

    const onReceivingMessage = (msg) => {
        setTimeout(() => {
            fetchArtworkComments(artworkId)
        }, 200)
    }




    return (

        <>
            <SockJsClient
                url={BASE_WEBSOCKET_URL + `?access_token=${accessToken}`}
                topics={[`/topic/artworks/${artworkId}/notification`]}
                onMessage={(msg) => onReceivingMessage(msg)}
                ref={(client) => { socketClientRef.current = client }}
            />
            <ArtworkDetail />

        </>

    )
}

export default Index