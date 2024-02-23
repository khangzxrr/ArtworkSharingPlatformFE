import React from "react";
import { Button} from "antd";
import { RequestList } from "../../components";
import { Link } from "react-router-dom";

const Index = () => {

    return (
        <>
            <Button><Link to="/create-request">Create a new request</Link></Button>
            <RequestList />
        </>

    )
}

export default Index