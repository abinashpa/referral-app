const setToLocalStorage = ({
  authToken = null,
  email,
  id,
  firstName,
  lastName,
}) => {
  localStorage.setItem("authToken", authToken);
  localStorage.setItem("authEmail", email);
  localStorage.setItem("authUserId", id);
  localStorage.setItem("authUserFirstName", firstName);
  localStorage.setItem("authUserLastName", lastName);
};

const getFromLocalStorage = key => {
  let response = "";
  try {
    const value = localStorage.getItem(key);
    response = value || "";
  } catch (error) {
    logger.error(error);
    response = "";
  }

  return response;
};

export { setToLocalStorage, getFromLocalStorage };
