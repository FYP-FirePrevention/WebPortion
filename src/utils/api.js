import axios from "axios";

// base url
const BASE_URL = "http://localhost:3500";

// login

async function login(email, password) {
  try {
    const response = await axios.post(
      `${BASE_URL}/login`,
      {
        email: email,
        password: password,
      },
      {
        "Content-Type": "application/json",
      }
    );
    // You might want to return the response or a specific part of it, such as a token
    return response.data;
  } catch (error) {
    throw error;
  }
}

// function to get profiles details
async function getProfileDetails(userMail) {
  try {
    const response = await axios.post(
      `${BASE_URL}/getProfileDetails`,
      {
        userMail,
      },
      {
        "Content-Type": "application/json",
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// function to update cctv ips
async function updateCCTVIps(userMail, ips) {
  try {
    const response = await axios.put(
      `${BASE_URL}/updateCCTVIps/${userMail}`,
      {
        ips,
      },
      {
        "Content-Type": "application/json",
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { login, getProfileDetails, updateCCTVIps };
