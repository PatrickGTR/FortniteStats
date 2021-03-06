import fetch from "isomorphic-unfetch";

const getStoreData = async () => {
  const res = await fetch("https://fortnite-api.theapinetwork.com/store/get", {
    method: "GET",
    headers: {
      Authorization: process.env.FORTNITE_API_KEY
    }
  });

  return res.json();
};

export default getStoreData;
