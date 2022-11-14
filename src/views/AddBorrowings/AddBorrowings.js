import * as React from "react";
import TextField from "@mui/material/TextField";
import Nav from "../../components/nav";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Getstarted from "../../assets/5.jpg";
import "./AddBorrowings.css";

const AddBorrowings = () => {
  const navigate = useNavigate();

  return (
    <div className="AddBorrowingsOut">
      <Nav />
      <div className="AddBorrowings">
        <div className="l">
          <div className="firstline">
            <p>Adding a new borrowing</p>
            <TextField
              id="outlined-basic"
              label="Book ID"
              variant="outlined"
            />
            <br />
         <TextField id="outlined-basic" label="Member ID" variant="outlined" />
            <br />
           

            <Button
              variant="contained"
              onClick={() => navigate("/AddBorrowings")}
              sx={{
                backgroundColor: "#00008b ",
                maxWidth: "50%",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: 50,
                marginTop: "5%",
              }}
            >
              Add
            </Button>

            <div className="para">
              <div className="first"></div>
            </div>
          </div>
        </div>
        <div className="r">
          <div className="get">
            {/* <div>
              <img src={Getstarted} alt="logo" height={700} width={700} />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddBorrowings;
