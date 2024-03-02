
const BASE_URL = 'http://localhost:8080/api'

const BASE_WEBSOCKET_URL = 'http://localhost:8080/websocket/artwork'

const USER_AUTHORIZE = 'ROLE_USER'

const CREATOR_AUTHORIZE = 'ROLE_CREATOR'

const ADMIN_AUTHORIZE = 'ROLE_ADMIN'

const PAYPAL_CONFIG = {
    "client-id": "AWqfYGA0upFfdEd2woMEL96g6xr-5sjggId_0O8ehkgThPmWjLmK1f-AbgHWTvZmbrePjbAocH295QIH",
    "enable-funding": "paylater,venmo",
    "data-sdk-integration-source": "integrationbuilder_sc",
}

export { BASE_URL, USER_AUTHORIZE, CREATOR_AUTHORIZE, PAYPAL_CONFIG, ADMIN_AUTHORIZE, BASE_WEBSOCKET_URL }