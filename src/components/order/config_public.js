import axios from "axios";

export const getProductPublic = async () => {
  const data = new URLSearchParams();
  data.append("db", "DBHUSIN");
  data.append("url", "http://172.16.35.43:8059");
  try {
    const response = await axios.post(
      `https://mid.tachyon.net.id/api/prod/public_config`,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    // .data.product_param_data
    return response.data;
  } catch (error) {
    return error;
  }
};
export const getProvider = async () => {
  const data = new URLSearchParams();
  data.append("db", "DBHUSIN");
  data.append("url", "http://172.16.35.43:8059");
  try {
    const response = await axios.post(
      `https://mid.tachyon.net.id/api/prod/public_config`,
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    return response.data;
  } catch (error) {
    return error;
  }
};
//43
