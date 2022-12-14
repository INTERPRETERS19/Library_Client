import * as React from "react";
import TextField from "@mui/material/TextField";
import Nav from "../../components/nav";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
// import Getstarted from "../../assets/5.jpg";
import "./AddBooks.css";

const AddBooks = () => {
  const navigate = useNavigate();

  return (
    <div className="AddBooksOut">
      <Nav />
      <div className="AddBooks">
        <div className="l">
          <div className="firstline">
            <p>Adding new book</p>
            <TextField
              id="outlined-basic"
              label="Book name"
              variant="outlined"
            />
            <br />
            <TextField id="outlined-basic" label="Author name" variant="outlined" />
            <br />
            <TextField
              id="outlined-basic"
              label="ISBN number"
              variant="outlined"
            />

            <Button
              variant="contained"
              onClick={() => navigate("/AddBooks")}
              sx={{
                backgroundColor: "#00008b",
                maxWidth: "50%",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: 50,
                marginTop: "5%",
              }}
            >
              ADD
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
export default AddBooks;
