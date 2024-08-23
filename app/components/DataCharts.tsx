// app\components\DataCharts.tsx

"use client";
import React, { useState, useEffect } from "react";
import { AgCharts } from "ag-charts-react";
import { AgBarSeriesOptions, AgChartOptions } from "ag-charts-community";
import LoadingUI from "./LoadingUI";
 
const DataCharts = ({ data }: any) => {
  const [options, setOptions] = useState<AgChartOptions | null>(null);

  useEffect(() => {
    if (data && data.length > 0) {
      const transformedData = data.map((item:  any) => {
        const date = new Date(item.Tarih);
        const day = date.getDate();
        const month = date.toLocaleString("default", { month: "long" }).slice(0, 3);
         
        const formattedDate = `${day}/${month}`; // Create a "DD.MM" format
         return {
          date: formattedDate,
          oda: item.Oda,
          free: item.Free,  

 
        };
      });

      setOptions({
        title: {
          text: "Oda Bilgileri",
        },
        subtitle: {
          text: "Dolu ve boş oda sayıları",
        },
        data: transformedData,
        series: [
          {
            type: "bar",
            xKey: "date",
            yKey: "oda",
            yName: "Dolu Oda",
            stacked: true,  
          } as AgBarSeriesOptions,
          {
            type: "bar",
            xKey: "date",
            yKey: "free",
            yName: "Boş Oda",
            stacked: true,  
          } as AgBarSeriesOptions,
        ],
      });
    }
  }, [data]); 

  if (!options) {
    return <LoadingUI height={"100%"} />; 
  }

  return <AgCharts options={options} />;
};

export default DataCharts;