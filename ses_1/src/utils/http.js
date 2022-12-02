/** @format */

export const api_address = "http://localhost:5500";

// get
export const GET = async (endpoint) => {
  try {
    return await fetch(api_address + endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  } catch (error) {
    return console.log("error: ", error);
  }
};

// post
export const POST = async (endpoint, data) => {
  try {
    return await fetch(api_address + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => res.json());
  } catch (error) {
    return console.log("error: ", error);
  }
};
