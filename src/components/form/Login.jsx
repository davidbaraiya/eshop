import React, { useState } from "react";
import "./form.css";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
  FormControl,
  Input,
  Button,
  Divider,
} from "@mui/material";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = ({ handleModalFun }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form-wrapper ">
      <div className=" input-form login-form">
        <Typography variant="h4" component="h4">
          Log In
        </Typography>
        <form action="">
          <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="emial-input">Email</InputLabel>
            <Input id="emial-input" type="email" />
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <Input
              id="password-input"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <MdOutlineVisibilityOff />
                    ) : (
                      <MdOutlineVisibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button color="primary" variant="contained" className="mt-3 w-100">
            Log In
          </Button>
        </form>
        <Divider flexItem className="my-3">
          or
        </Divider>
        <div className="other-login d-flex gap-3">
          <Button variant="outlined" startIcon={<FcGoogle />}>
            google
          </Button>
          <Button variant="outlined" startIcon={<FaFacebook color="#4267B2" />}>
            facebook
          </Button>
        </div>
        <Typography className="mt-2">
          Don't have account ?{" "}
          <Link
            style={{ color: "#0f8fac" }}
            onClick={() => handleModalFun("register")}
          >
            Register
          </Link>{" "}
        </Typography>
      </div>
    </div>
  );
};

export default Login;
