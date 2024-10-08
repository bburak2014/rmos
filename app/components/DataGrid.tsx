// app\components\DataGrid.tsx
"use client";
import { AgGridReact } from "ag-grid-react";
import { ColDef, SideBarDef } from "ag-grid-community";
import { useState, useMemo, useEffect } from "react";
import axios from "axios";
import "ag-grid-charts-enterprise";
 import { stpGridHeads, initialValues } from "../helper/data";
import { DataGridProps } from "../helper/interfaces";
import LoadingUI from "./LoadingUI";
import { localeText } from "../helper/utils";
  
const DataGrid = ({ data, token }: DataGridProps) => {
  const sideBar = useMemo<
    SideBarDef | string | string[] | boolean | null
  >(() => {
    return {
      toolPanels: ["columns", "filters"],
      defaultToolPanel: "",
    };
  }, []);

  const [formValues, setFormValues] = useState(initialValues);
  const [rowData, setRowData] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [columnDefs] = useState<ColDef[]>(stpGridHeads);
  const [gridRendered, setGridRendered] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setGridRendered(true);
    }, 500);
  }, []);
  // Regex pattern for date strings
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  const Url = process.env.NEXT_PUBLIC_PROCEDURE_URL;

  // Determine input type based on value
  const getInputType = (value: any): string => {
    if (typeof value === "number") {
      return "number";
    } else if (typeof value === "string" && dateRegex.test(value)) {
      return "date";
    } else {
      return "text";
    }
  };

  // Handle input change

  const handleInputChange = (key: string, value: any) => {
    const originalValue = formValues[key];
    const newValue =
      typeof originalValue === "number" ? parseFloat(value) : value;
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [key]: newValue,
    }));
  };

  const handleSearch = async () => {
    setClicked(true);
     try {
      const response = await axios.post(`${Url}`, formValues, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(response.data.isSucceded){
        setRowData(response.data.value);
      }
      else {
        alert(response.data.message);
      }
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Hata");
    }
  };

  return (
    <>
      <div className="p-4 flex flex-col gap-10 min-h-screen">
        <form>
          <h2 className="text-2xl font-bold mb-2 w-full">Filtrele</h2>
          <div className="flex flex-wrap gap-4">
            {Object.entries(formValues).map(([key, value]) => (
              <div
                key={key}
                className="flex flex-col w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.33%-1rem)] xl:w-[calc(16.66%-1rem)]  "
              >
                <label
                  className="block text-sm font-medium text-gray-500 dark:text-white"
                  htmlFor={key}
                >
                  {key}
                </label>
                <input
                  id={key}
                  type={getInputType( value)}
                  value={value !== undefined && value !== null ? String(value) : ""}                  onChange={(e) => handleInputChange(key, e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 p-2 text-sm rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300"
                  placeholder=""
                />
              </div>
            ))}
          </div>
          <div
            className="flex flex-col w-full sm:w-1/2 md:w-1/3 xl:w-1/6 py-2 gap-2 my-8 justify-end"
            style={{ float: "right" }}
          >
            <button
              type="button"
              className=" text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-1 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 h-10"
              onClick={handleSearch}
            >
              Ara
            </button>
          </div>
        </form>
        {!gridRendered ? (
          <LoadingUI height="100%" />
        ) : (
          <div
            className="ag-theme-quartz"
            style={{ width: "100%", overflow: "auto" }}
          >
            <h2 className="text-2xl font-bold mb-2 w-full">Grid Liste</h2>

            <AgGridReact
              columnDefs={columnDefs}
              rowData={!clicked ? data : rowData}
              pagination={true}
              paginationPageSize={10}
              rowSelection={"multiple"}
              suppressRowClickSelection={true}
              sideBar={sideBar}
              localeText={localeText}
              domLayout="autoHeight"
              overlayNoRowsTemplate={"<span></span>"}
              paginationPageSizeSelector={false}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default DataGrid;
