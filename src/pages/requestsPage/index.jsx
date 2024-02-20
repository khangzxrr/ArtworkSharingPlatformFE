import React, { useEffect, useState } from "react";
import { Flex } from "antd";
import {
    DatePicker,
    Form,
    Input,
} from 'antd';
import { getAccount } from "../../services/authenticationService";

const Index = () => {

    return (
        <Flex align="center" gap="middle" vertical style={{ padding: 15, }}>
           Request page
        </Flex>
    )
}

export default Index