/* eslint-disable consistent-return */
import axios from "axios";

import Toastr from "../components/Common/Toastr";
import { setToLocalStorage, getFromLocalStorage } from "../utils/storage";

const DEFAULT_ERROR_NOTIFICATION = "Something went wrong!";

axios.defaults.baseURL = "/";

const setAuthHeaders = (setLoading = () => null) => {
  axios.defaults.headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": document
      .querySelector('[name="csrf-token"]')
      .getAttribute("content"),
  };
  const token = getFromLocalStorage("authToken");
  const email = getFromLocalStorage("authEmail");
  if (token && email) {
    axios.defaults.headers["X-Auth-Email"] = email;
    axios.defaults.headers["X-Auth-Token"] = token;
  }
  setLoading(false);
};

// Initialize an empty array to store displayed success messages
const displayedSuccessMessages = [];

const handleSuccessResponse = response => {
  if (response) {
    response.success = response.status === 200;
    const successMessage = response.data.notice || response.data.message;

    // Check if the successMessage has not been displayed before
    if (successMessage && !displayedSuccessMessages.includes(successMessage)) {
      // Add the successMessage to the displayedSuccessMessages array
      displayedSuccessMessages.push(successMessage);

      Toastr.success(successMessage);
    }
  }

  return response;
};

// Initialize an empty array to store displayed error messages
const displayedErrorMessages = [];

const handleErrorResponse = axiosErrorObject => {
  if (axiosErrorObject.response?.status === 401) {
    setToLocalStorage({ authToken: null, email: null, userId: null });
    setTimeout(() => (window.location.href = "/"), 2000);
  }

  const errorMessage =
    axiosErrorObject.response?.data?.error || DEFAULT_ERROR_NOTIFICATION;

  // Check if the errorMessage has not been displayed before
  if (errorMessage && !displayedErrorMessages.includes(errorMessage)) {
    // Add the errorMessage to the displayedErrorMessages array
    displayedErrorMessages.push(errorMessage);

    Toastr.error(errorMessage);
  }

  if (axiosErrorObject.response?.status === 423) {
    window.location.href = "/";
  }

  return Promise.reject(axiosErrorObject);
};

const registerIntercepts = () => {
  axios.interceptors.response.use(handleSuccessResponse, error =>
    handleErrorResponse(error)
  );
};

export { setAuthHeaders, registerIntercepts };
