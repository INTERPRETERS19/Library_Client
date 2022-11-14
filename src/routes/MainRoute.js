import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetStarted from "../views/GetStarted/GetStarted";
import AllBooks from "../views/AllBooks/AllBooks";
import AllOrders from "../views/AllOrders/Allorders";
import AddMembers from "../views/AddMembers/AddMembers";
import NewBooks from "../views/NewBooks/AddBooks";
const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/addmembers" element={<AddMembers />} />
        <Route path="/allmembers" element={<AllOrders />} />
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/addbooks" element={<NewBooks />} />
      </Routes>
    </Router>
  );
};
export default MainRoute;
