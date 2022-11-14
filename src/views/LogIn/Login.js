import React, { useState } from "react";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import login from "../../assets/login.png";
import { Grid } from "@mui/material";
import useForms from "../../components/useForms";
// import client from "../../routes/client";
import { useNavigate, useLocation } from "react-router-dom";
import { isValidObjField, updateError } from "../../components/validation";
import { useLogin } from "../../context/LoginProvider/LoginProvider";

import "./Login.css";

const initialValues = {
  userName: "",
  password: "",
};

function Login() {
  const [values, setValues, handleInputChange] = useForms(initialValues);
  const [error, setError] = useState("");
  const { setIsLoggedIn, setProfile, profile } = useLogin();
  const navigate = useNavigate();
  const location = useLocation();

  const validate = () => {
    if (!isValidObjField(values))
      return updateError("Required all fields!", setError);
    return true;
  };
  const handleSubmit = () => {
    if (validate()) {
      navigate("/allbooks");
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (validate()) {
  //       try {
  //         const responces = await client.post("/signin", { ...values });
  //         // console.log(responces.data);
  //         // console.log(responces.data.success);
  //         if (responces.data.success) {
  //           setProfile(responces.data.user);
  //           console.log(profile);
  //           setIsLoggedIn(true);
  //           navigate("/home");
  //         } else {
  //           return updateError(
  //             "Your User name Or Password is incorrect",
  //             setError
  //           );
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     }
  //   };

  return (
    <div className="logroot" style={{ backgroundColor: "#fff" }}>
      <div className="l">
        <section>
          <form>
            <Grid container>
              <Grid item>
                <div className="line1st">Welcome To</div>
                <div className="line2nd">
                  <span Style="color: #75B6D9">UOM </span> Library
                </div>
              </Grid>
              <div>
                <Grid className="logroot">
                  {error ? (
                    <p
                      style={{
                        color: "red",
                        fontSize: 18,
                        textAlign: "center",
                        margin: 20,
                        marginBottom: 0,
                      }}
                    >
                      {error}
                    </p>
                  ) : null}
                </Grid>
              </div>
              {/* <label htmlFor="username">Username:</label> */}
              <input
                className="inputColoum"
                type="text"
                placeholder="UserName"
                value={values.userName}
                name="userName"
                onChange={handleInputChange}
                required
              />
              {/* <label htmlFor="password">Password:</label> */}
              <input
                className="inputColoum"
                type="password"
                placeholder="Password"
                value={values.password}
                name="password"
                onChange={handleInputChange}
                required
              />
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#001E3C",
                  margin: 2,
                  marginTop: 1,
                  padding: 3,
                  gap: 9.7,
                  width: "85%",
                  height: 38.27,
                  borderRadius: 2,
                }}
                onClick={handleSubmit}
              >
                Login
              </Button>
            </Grid>
          </form>
        </section>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="r">
        <img src={login} alt="login" />
      </div>
    </div>
  );
}

export default Login;
