import axios from "axios";
import { cookies } from "next/headers";
import DataGrid from "@/app/components/DataGrid";
import ErrorUI from "@/app/components/ErrorUI";
import DataCharts from "@/app/components/DataCharts";

export default async function Page() {
  const dummy = {
    db_Id: 9,
    xRez_Sirket: 9,
    xBas_Tar: "2024-06-01",
    xBit_Tar: "2024-06-10",
    xtip: 1,
    kon1: "ALL",
    kon2: "BB",
    xchkFis_Fazla_otel_10: 0,
    bas_Yil: 2022,
    bit_Yil: 2022,
    fisrci_Kapalioda_10: 0,
    xRez_C_W: "C",
    xSistem_Tarihi: "2024-01-01",
    xAlis_Tarihi: "2024-01-01",
    sistem_Bas1: "2020-01-01",
    sistem_Bit1: "2029-01-01",
    pmdahil_10: 0,
    tip_1: "001",
    xFis_Bela_tutar_10: 0,
    trace_Dus_10: 0,
    cev_01: null,
  };

  const Url = process.env.NEXT_PROCEDURE_URL;
  const token = cookies().get("token")?.value;

  const fetchData = async () => {
    try {
      const response = await axios.post(`${Url}`, dummy, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.value;
    } catch (err) {
      console.error("Fetching data failed:", err);
      throw err;
    }
  };

  let data = [];
  let error: any = null;
  try {
    data = await fetchData();
  } catch (err) {
    error = err;
  }

  if (error) {
    return <ErrorUI />;
  }

  return (
   <>
   <DataGrid data={data} token={token?.toString() || ""} />
   <DataCharts  data={data}  />
   </> 
  );
}
