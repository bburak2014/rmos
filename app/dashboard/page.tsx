 // app\dashboard\page.tsx
 import { cookies } from "next/headers";
import DataGrid from "@/app/components/DataGrid";
import ErrorUI from "@/app/components/ErrorUI";
import DataCharts from "@/app/components/DataCharts";
import BlackList from "@/app/components/BlackList";
import { StpClassicc, BlackListDummyData } from "@/app/helper/data";
import { fetchData } from "@/app/helper/utils";
import LogOut from "../components/LogOut";
export default async function Page() {
  
  const Url = process.env.NEXT_PUBLIC_PROCEDURE_URL;
  const blackListUrl = process.env.NEXT_PUBLIC_BLACKLIST_URL;
  const token = cookies().get("token")?.value;

  
  let data,blackListData = [];
  let error: any = null;
  
  try {
    data = await fetchData({ Url, data: StpClassicc, token });
    blackListData = await fetchData({ Url:blackListUrl, data: BlackListDummyData, token });
  } catch (err) {
    error = err;
  }

  if (error) {
    return <ErrorUI />;
  }
   return (
   <>
   <LogOut />
   <DataGrid data={data} token={token?.toString() || ""} />
   <BlackList  data={blackListData} BlackListDummyData={BlackListDummyData} token={token?.toString() || ""}  />
   <DataCharts  data={data}  />
   </> 
  );
}
