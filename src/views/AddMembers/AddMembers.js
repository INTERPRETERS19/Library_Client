import * as React from "react";
import TextField from "@mui/material/TextField";
import Nav from "../../components/nav";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Getstarted from "../../assets/4.jpg";
import "./AddMembers";

const NewOrders = () => {
  const navigate = useNavigate();

  return (
    <div className="NewOrdersOut">
      <Nav />
      <div className="NewOrders">
        <div className="l">
          <div className="firstline">
            <p>Add a Member</p>
            <TextField
              id="outlined-basic"
              label="Book name"
              variant="outlined"
            />
            <br />
            <TextField id="outlined-basic" label="Price" variant="outlined" />
            <br />
            <TextField
              id="outlined-basic"
              label="Quantity"
              variant="outlined"
            />

            <Button
              variant="contained"
              onClick={() => navigate("/neworders")}
              sx={{
                backgroundColor: "#8FBF75 ",
                maxWidth: "50%",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: 50,
                marginTop: "5%",
              }}
            >
              Member
            </Button>

            <div className="para">
              <div className="first"></div>
            </div>
          </div>
        </div>
        <div className="r">
          <div className="get">
            <div>
              <img src={Getstarted} alt="logo" height={700} width={700} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewOrders;
