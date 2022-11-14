import React from "react";
import "./GetStarted.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Getstarted from "../../assets/3.jpg";
const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div className="GetStartedinside">
      <div className="GetStarted">
        <div className="l">
          <div className="firstline">
            “Bookshops are places of endless entertainment and renewal – what’s
            not to love?”
            <div className="para">
              <div className="first">
                <p>Get into the application for further details</p>
              </div>
            </div>
            <Button
              variant="contained"
              onClick={() => navigate("/allbooks")}
              sx={{
                backgroundColor: "#8FBF75 ",
                maxWidth: "50%",
                alignItems: "center",
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: 50,
                marginTop: "3%",
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
        <div className="r">
          <div className="get">
            <div>
              <img src={Getstarted} alt="logo" height={700} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
