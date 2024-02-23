import { Button } from "antd";
import React from "react";
import { clearAuthentication, useAuthenticationStore } from "../../stores/authenticationStore";
import { useNavigate } from "react-router-dom";


const Index = () => {
  
  const navigate = useNavigate();

  function clearToken() {
    clearAuthentication()
    navigate('/login')
  }

  return (
    <Button type="primary" htmlType="submit" className="form-button" onClick={() => clearToken()}>
      Logout
    </Button>
  );
};

export default Index;
