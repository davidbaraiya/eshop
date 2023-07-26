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
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../../firebase/firebase";

const Register = ({ handleModalFun, signinWithGoogle, signinWithFacebook }) => {
  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Register data input chnage
  const inputRegisterData = (e) => {
    const { value, name, checked } = e.target;
    setRegisterData((prev) => ({ ...prev, [name]: value }));
    setIsChecked(checked);
  };

  // password Toggle
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Create a user
  const createRegisterUser = async (e) => {
    e.preventDefault();
    try {
      if (registerData.name || registerData.email || registerData.password) {
        if (isChecked) {
          const user = await createUserWithEmailAndPassword(
            auth,
            registerData.email,
            registerData.password
          );
          toast.success("register successfully !");
          setRegisterData({
            name: "",
            email: "",
            password: "",
          });
          setIsChecked(false);
        } else {
          toast.error("please checked");
        }
      } else {
        toast.error("please fill all field");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="form-wrapper ">
      <div className=" input-form register-form">
        <Typography variant="h4" component="h4">
          Register
        </Typography>
        <form action="" onSubmit={createRegisterUser}>
          <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="name-input">Name</InputLabel>
            <Input
              id="name-input"
              type="text"
              name="name"
              value={registerData.name}
              onChange={inputRegisterData}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
            <InputLabel htmlFor="emial-input">Email</InputLabel>
            <Input
              id="emial-input"
              type="email"
              name="email"
              value={registerData.email}
              onChange={inputRegisterData}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "100%" }} variant="standard">
            <InputLabel
              htmlFor="password-input"
              value={registerData.password}
              onChange={inputRegisterData}
            >
              Password
            </InputLabel>
            <Input
              id="password-input"
              name="password"
              value={registerData.password}
              onChange={inputRegisterData}
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
          <FormControl className="w-100">
            <FormControlLabel
              className="text-end"
              value="end"
              control={
                <Checkbox onChange={inputRegisterData} checked={isChecked} />
              }
              label={
                <Typography>
                  I agree with{" "}
                  <Link to="/privacy-policy" color="#4267B2">
                    {" "}
                    privacy policy{" "}
                  </Link>
                </Typography>
              }
            />
          </FormControl>
          <Button
            type="submit"
            color="primary"
            variant="contained"
            className="mt-3 w-100"
          >
            Register
          </Button>
        </form>
        <Divider flexItem className="my-3">
          or
        </Divider>
        <div className="other-login d-flex gap-3">
          <Button
            variant="outlined"
            onClick={signinWithGoogle}
            startIcon={<FcGoogle />}
          >
            google
          </Button>
          <Button
            variant="outlined"
            onClick={signinWithFacebook}
            startIcon={<FaFacebook color="#4267B2" />}
          >
            facebook
          </Button>
        </div>
        <Typography className="mt-2">
          Already have account ?{" "}
          <Link
            style={{ color: "#0f8fac" }}
            onClick={() => handleModalFun("login")}
          >
            Log In
          </Link>{" "}
        </Typography>
      </div>
    </div>
  );
};

export default Register;
