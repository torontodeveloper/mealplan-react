"use client";
import axios from "axios";

const { useEffect, useState } = require("react");

function useGetAllPlans() {
  const [allPlans, setAllPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  function getAllPlans() {
    // GET request for remote image in node.js
    axios({
      method: "get",
      url: "http://localhost:8000/all_plans",
    }).then((response) => {
      setAllPlans(response.data);
      setLoading(true);
      console.log("response data****", response.data);
    });
  }
  useEffect(() => {
    getAllPlans();
  }, []);

  return {
    loading,
    allPlans,
  };
}
export default useGetAllPlans;
