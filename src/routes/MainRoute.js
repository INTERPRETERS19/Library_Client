import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../views/LogIn/Login";
import GetStarted from "../views/GetStarted/GetStarted";
import AllBooks from "../views/AllBooks/AllBooks";
import AllOrders from "../views/AllMembers/AllMembers";
import AllBorrowings from "../views/AllBorrowings/AllBorrowings";
import AddMembers from "../views/AddMembers/AddMembers";
import AddBooks from "../views/AddBooks/AddBooks";
import AddBorrowings from "../views/AddBorrowings/AddBorrowings";
const MainRoute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addmembers" element={<AddMembers />} />
        <Route path="/allmembers" element={<AllOrders />} />
        <Route path="/allbooks" element={<AllBooks />} />
        <Route path="/addbooks" element={<AddBooks />} />
        <Route path="/allborrowings" element={<AllBorrowings />} />
        <Route path="/addborrowings" element={<AddBorrowings />} />
      </Routes>
    </Router>
  );
};
export default MainRoute;
