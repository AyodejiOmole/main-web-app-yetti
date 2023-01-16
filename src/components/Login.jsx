import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/LoginContext";
import { styles } from "../constants";
import { BASE_URL, userLogin } from "../services/services";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Login = ({ handleClick }) => {
  // Initialize state for the login to enable user login
  const { userLoggedIn } = useContext(LoginContext);
<<<<<<< HEAD
=======
  const { onUserLogin } = useContext(UserContext);
  const [message, setMessage] = useState({ text: true });

  function changeMessage(status) {
    if (status) {
      setMessage({
        color: "text-brand-secondary",
        text: "Submitting...",
      });
    }
    if (status === 200 || status === 201) {
      setMessage({
        color: "text-green-500",
        text: "Login successful!",
      });
    }
    if (status === 401) {
        setMessage({
          color: "text-red-500",
          text: "Email or Password Incorrect. Try again.",
        });
        return;
    }
    if (status >= 400) {
      setMessage({
        color: "text-red-500",
        text: "Login Failed!",
      });
    }
  }
>>>>>>> 454647e33158d773f752fb2da813e10f0c409458

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

<<<<<<< HEAD
  const [store, setStore] = useState("");

  const { getUserToken, userData } = useContext(UserContext);

=======
>>>>>>> 454647e33158d773f752fb2da813e10f0c409458
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  async function formSubmit(e) {
    e.preventDefault();
    changeMessage(true);

    let user = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const res = await userLogin(user);
      if (!res.statusText === "OK") return;
<<<<<<< HEAD
      // console.log(res);
      if (res.status === 200 || res.status === 201) {
        const token = res.data.data.access;
        // console.log(res.data.data.refresh);

        window.localStorage.setItem("token", JSON.stringify(token));
        window.localStorage.setItem("isLoggedIn", true);

        getUserToken(token);
        console.log(res);

        userLoggedIn();
        navigate("/dashboard");
      }
=======
      console.log(res);
      changeMessage(res.status);
      onUserLogin(res.data.data);
      userLoggedIn();
      handleClick("createStore");
      navigate("/dashboard");
>>>>>>> 454647e33158d773f752fb2da813e10f0c409458
    } catch (err) {
      console.log(err);
      changeMessage(err.response.status);
    }
  }

  return (
    <div className="max-w-[400px] w-full mx-auto">
      <h1 className="text-center text-[28px] mb-[40px] font-normal">
        Login to your account
      </h1>
      <form className="w-full" onSubmit={formSubmit}>
        <div className="mb-4 w-full">
          <label htmlFor="email" className="w-full mb-3 ml-2">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={formData.value}
            placeholder="Enter your email address"
            onChange={handleChange}
            className="w-full border border-brand-stroke rounded-lg p-3"
          />
        </div>
        <div className="w-full mb-4">
          <label htmlFor="password" className="w-full mb-3 ml-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.value}
            placeholder="Enter password"
            onChange={handleChange}
            className="w-full border border-brand-stroke rounded-lg p-3"
          />
        </div>
        <div className="w-full mb-4 flex gap-2 items-center">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            checked={formData.remember}
            onChange={handleChange}
          />
          <label htmlFor="remember">Remember me</label>
        </div>
        {message.text && (
          <p className={`${message.color} text-sm text-center`}>
            {message?.text}
          </p>
        )}
        <button className={`${styles.button} w-full`}>Login to store</button>
        <div className="w-full flex justify-between items-center mt-2">
          <button
            type="button"
            className="text-brand-gray font-normal text-[14px]"
            onClick={() => handleClick("forgotPassword")}
          >
            Forgot password?
          </button>
          <button
            className="text-brand-gray font-normal text-[14px]"
            type="button"
            onClick={() => handleClick("signUp")}
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
