// app\helper\utils.ts
import axios from "axios";
import { ApiResponse } from "./interfaces";
import { AG_GRID_LOCALE_TR } from "@ag-grid-community/locale";

export const fetchData = async ({Url, data, token}: ApiResponse) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await axios.post(Url, data, config);
    return response.data.value;
  } catch (error) {
    console.error("Fetching data failed:", error);
    throw error;
  }
};
 
export const localeText: Record<string, string> = AG_GRID_LOCALE_TR;

