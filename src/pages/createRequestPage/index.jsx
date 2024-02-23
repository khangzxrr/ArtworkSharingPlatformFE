import React, { useEffect, useState } from "react";
import { Flex } from "antd";
import {
    DatePicker,
    Form,
    Input,
} from 'antd';
import { getAccount } from "../../services/authenticationService";
import { RequestList } from "../../components";

const Index = () => {

    return (
        <RequestList />
    )
}

export default Index