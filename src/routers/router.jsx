
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { Home, Login } from  '../pages';

const Routers = () => {
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </Router>
    </div>
}

export default Routers;