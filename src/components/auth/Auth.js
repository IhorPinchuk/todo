import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  BtnAuth,
  BtnSeePassword,
  FormAuth,
  InputAuth,
  LabelAuth,
  LiAuth,
  NavLinkStyledAuth,
  SvgEye,
  UlAuth,
  UseEye,
  WrapperLabelInputAuth,
  WrapperRelativeAuth,
} from "./Auth.styled";
import sprite from "../../images/sprite.svg";
import currentDate from "../../helpers/currentDate";
import { usePost } from "../../hooks/usePost";
import ErrorTitleInputNewTask from "../Error/ErrorTitleInputNewTask";
import LoaderThreeCirclesSmall from "../loaders/loaderThreeCirclesSmall/LoaderThreeCirclesSmall";
import ErrorMessage from "../Error/ErrorMessage";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import { useUserAuthenticated } from "../../context/UserAuthenticatedContext";

const Auth = () => {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const [isSignupPage, setIsSignupPage] = useState(false);
  const {
    dataAdd: dataUserRegister,
    isLoadingAddData,
    errorAddData,
    postData,
  } = usePost();
  const { data: usersArray, isLoading, error, fetchData } = useFetch();
  const [showPassword, setShowPassword] = useState(false);
  const [authUserError, setAuthUserError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsAuthenticated } = useUserAuthenticated();

  useEffect(() => {
    setIsSignupPage(location.pathname === "/signup");
  }, [location.pathname]);
  
  useEffect(() => {
    if (Object.keys(dataUserRegister).length !== 0) {
      reset();
      navigate("/login", { replace: true });
    }
  }, [reset, dataUserRegister, navigate]);

  useEffect(() => {
    if (usersArray) {
      const user = usersArray.find(
        (user) =>
          user.email.toLowerCase() === getValues("emailUser").toLowerCase() &&
          user.password === getValues("passwordUser")
      );

      if (user) {
        localStorage.setItem(
          "user",
          JSON.stringify({ name: user.name, email: user.email })
        );
        setIsAuthenticated(true);
        navigate("/todos", { replace: true });
      } else {
        setAuthUserError("Incorrect email or password.");
      }
    }
  }, [usersArray, getValues, navigate, setIsAuthenticated]);

  const onSubmitFormSignup = (data) => {
    if (
      data.nameUser.trim() !== "" &&
      data.emailUser.trim() !== "" &&
      data.passwordUser.trim() !== ""
    ) {
      const newUser = {
        name: data.nameUser,
        email: data.emailUser,
        password: data.passwordUser,
        creationDate: currentDate(),
      };

      postData("auth", newUser);
    }
  };

  const onSubmitFormLogin = () => {
    fetchData("auth");
  };

  const handleClickSeePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <UlAuth>
        <LiAuth>
          <NavLinkStyledAuth to="/login">Log in</NavLinkStyledAuth>
        </LiAuth>
        <LiAuth>
          <NavLinkStyledAuth to="/signup">Sign up</NavLinkStyledAuth>
        </LiAuth>
      </UlAuth>
      <FormAuth
        onSubmit={handleSubmit(
          isSignupPage ? onSubmitFormSignup : onSubmitFormLogin
        )}
      >
        {isSignupPage && (
          <WrapperLabelInputAuth>
            <LabelAuth htmlFor="nameUser">Enter your name</LabelAuth>
            <InputAuth
              id="nameUser"
              type="text"
              placeholder="Enter your name"
              {...register("nameUser", {
                required: true,
                minLength: 2,
                maxLength: 50,
              })}
            />
            {errors.nameUser && (
              <ErrorTitleInputNewTask typeError={errors.nameUser.type} />
            )}
          </WrapperLabelInputAuth>
        )}
        <LabelAuth htmlFor="emailUser">Enter your email</LabelAuth>
        <InputAuth
          id="emailUser"
          type="email"
          placeholder="Enter your email"
          {...register("emailUser", {
            required: true,
          })}
        />
        {errors.emailUser && (
          <ErrorTitleInputNewTask typeError={errors.emailUser.type} />
        )}
        <LabelAuth htmlFor="passwordUser">Enter your password</LabelAuth>
        <WrapperRelativeAuth>
          <InputAuth
            id="passwordUser"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("passwordUser", {
              required: true,
            })}
          />
          <BtnSeePassword type="button" onClick={handleClickSeePassword}>
            <SvgEye>
              <UseEye
                href={
                  showPassword
                    ? sprite + "#icon-eye-cannot-see"
                    : sprite + "#icon-eye-see"
                }
              ></UseEye>
            </SvgEye>
          </BtnSeePassword>
        </WrapperRelativeAuth>
        {errors.passwordUser && (
          <ErrorTitleInputNewTask typeError={errors.passwordUser.type} />
        )}
        <BtnAuth type="submit">
          {isLoadingAddData || isLoading ? (
            <LoaderThreeCirclesSmall />
          ) : isSignupPage ? (
            "Sign up"
          ) : (
            "Log in"
          )}
        </BtnAuth>
      </FormAuth>
      {(errorAddData || error || authUserError) && (
        <ErrorMessage
          $textAlignCenter
          error={errorAddData || error || authUserError}
        />
      )}
    </>
  );
};

export default Auth;
