import { Button } from "antd";
import React from "react";
import { useAuthenticationStore } from "../../stores/authenticationStore";
import { useNavigate } from "react-router-dom";


const Index = () => {
  
  const clearAccessToken = useAuthenticationStore(state => state.clearAccessToken)
  const navigate = useNavigate();

  function clearToken() {
    clearAccessToken()
    navigate('/login')
  }

  return (
    <Button type="primary" htmlType="submit" className="form-button" onClick={() => clearToken()}>
      Logout
    </Button>
  );
};

export default Index;
