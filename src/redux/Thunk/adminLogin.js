import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const adminLogin = createAsyncThunk("adminLogin", async (Data) => {
    console.log("function callig")
  try {
    const res = await axios.post(`http://47.237.112.217:7001/api/admin/login/`, Data, {
      headers: {
        "Content-type": "application/json",
      },
    });
    return res.data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response && error.response.data) {
      return {
        non_field_errors: error.response.data.error.non_field_errors[0],
      };
    }
  }
});
