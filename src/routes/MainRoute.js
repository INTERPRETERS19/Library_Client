import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../views/LogIn/Login";
import GetStarted from "../views/GetStarted/GetStarted";
import AllBooks from "../views/AllBooks/AllBooks";
import AllOrders from "../views/AllOrders/Allorders";
import NewOrders from "../views/Neworders/NewOrders";
import NewBooks from "../views/NewBooks/NewBooks";
const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/neworders" element={<NewOrders />} />
        <Route path="/allorders" element={<AllOrders />} />
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/newbooks" element={<NewBooks />} />
      </Routes>
    </Router>
  );
};
export default MainRoute;
