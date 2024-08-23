// app\components\BlackList.tsx

"use client";
import { AgGridReact } from "ag-grid-react";
import { useMemo, useState, useEffect } from "react";
import { BlackListHead, BlackLisFormFields } from "../helper/data";
import { ColDef, SideBarDef } from "ag-grid-community";
import { localeText, fetchData } from "../helper/utils";
import Image from "next/image";
import { DataGridProps } from "../helper/interfaces";
import Alert from "./Alert";

export default function BlackList({ data, token,BlackListDummyData }: any) {
  const [state, setState] = useState({
    showModal: false,
    showTooltip: false,
    showConfirm: false,
    selectedRow: data[0], // İlk satırı varsayılan olarak seçili yapıyoruz
    formValues: {
      ...data[0], // İlk satırın verilerini formValues içine kopyalıyoruz
    },
    
  });
  const [action, setAction] = useState<"add" | "update">("add");
  const [newData, setNewData] = useState(data);

  const Url = process.env.NEXT_PUBLIC_BLACKLISTADD_URL;

  const { showModal, showTooltip, formValues, showConfirm } = state;

  const columnDefs = useMemo<ColDef[]>(() => BlackListHead, []);

  const sideBar = useMemo<
    SideBarDef | string | string[] | boolean | null
  >(() => {
    return {
      toolPanels: ["columns", "filters"],
      defaultToolPanel: "",
    };
  }, []);

  useEffect(() => {
    // data değiştiğinde ilk satırı seçili yap ve form değerlerini güncelle
    setState((prevState) => ({
      ...prevState,
      selectedRow: data[0],
      formValues: { ...data[0] },
    }));
  }, [data]);

  const handleRowClick = (params: any) => {
    setState((prevState) => ({
      ...prevState,
      selectedRow: params.data,
      formValues: { ...params.data },
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name === "Id") return;
    setState((prevState) => ({
      ...prevState,
      formValues: {
        ...prevState.formValues,
        [name]: value,
      },
    }));
  };

  const cancelLogout = () => {
    setState((prevState) => ({
      ...prevState,
      showConfirm: false,
    }));
  };
  const handleAdd = () => {
    setAction("add");
    setState((prevState) => ({
      ...prevState,
      showConfirm: true,
    }));
  };

  const handleUpdate = () => {
    setAction("update");
    setState((prevState) => ({
      ...prevState,
      showConfirm: true,
    }));
  };
  const confirmAction = async () => {
    if (action === "add") {
      const blackListData = {
        db_Id: 9,
        Id: 0,
        Adi: formValues.Adi,
        Soy: formValues.Soy,
        Aciklama: formValues.Aciklama,
      };

      try {
        const response = await fetchData({
          Url: Url,
          data: blackListData,
          token: token,
        });
        console.log("Ekleme başarılı:", response);
        refreshData();
      } catch (error) {
        console.error("Ekleme işlemi başarısız:", error);
      }
    } else if (action === "update") {
      const blackListData = {
        db_Id: 9,
        Id: formValues.Id,
        Adi: formValues.Adi,
        Soy: formValues.Soy,
        Aciklama: formValues.Aciklama,
      };

      try {
        const response = await fetchData({
          Url: Url,
          data: blackListData,
          token: token,
        });
        console.log("Güncelleme başarılı:", response);
        refreshData();
      } catch (error) {
        console.error("Güncelleme işlemi başarısız:", error);
      }
    }

    setState((prevState) => ({
      ...prevState,
      showConfirm: false,
    }));
  };

  const refreshData = async () => {
    try {
      const response = await fetchData({ 
        Url: process.env.NEXT_PUBLIC_BLACKLIST_URL || "",  
        token: token, 
        data: BlackListDummyData
      });

       setNewData(response);  
    } catch (error) {
      console.error("Veri güncelleme hatası:", error);
     }
  };
  return (
    <>
      <div className="absolute right-12 top-0 w-20">
        <button
          className="p-4"
          onMouseEnter={() => setState({ ...state, showTooltip: true })}
          onMouseLeave={() => setState({ ...state, showTooltip: false })}
          onClick={() => setState({ ...state, showModal: true })}
        >
          <Image src="/file.png" width={32} height={32} alt="file" />
        </button>

        {showTooltip && (
          <span className="absolute text-center right-4 top-12 bg-gray-800 text-white text-sm rounded p-1">
            Müşteri Listesi
          </span>
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={`bg-white rounded-lg shadow-lg p-4  w-[90vw]  transform transition-all duration-300 ease-in-out  ${
              showModal
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            }`}
          >
            <div className="ag-theme-quartz h-[80vh] overflow-auto">
              <div className="flex items-center justify-between mb-6 relative ">
                <h2 className="text-base font-bold w-full md:text-2xl">
                  Müşteri Bilgilendirme Listesi
                </h2>
                <button
                  className="bg-transparent p-2 rounded border-none transform transition-transform duration-300 hover:scale-110 absolute right-4 md:right-12"
                  onClick={() => setState({ ...state, showModal: false })}
                >
                  <Image src="/close.png" width={24} height={24} alt="Close" />
                </button>
              </div>
              <AgGridReact
                columnDefs={columnDefs}
                rowData={newData}
                pagination={true}
                paginationPageSize={10}
                rowSelection={"single"}
                onRowClicked={handleRowClick}
                suppressRowClickSelection={true}
                sideBar={sideBar}
                localeText={localeText}
                domLayout="autoHeight"
                overlayNoRowsTemplate={"<span></span>"}
                paginationPageSizeSelector={false}
                className="!h-auto"
              />
              <form className="flex flex-wrap gap-4 p-1">
                {BlackLisFormFields.map(({ label, key, type }) => (
                  <div
                    key={key}
                    className={`flex flex-col w-[calc(100%-1rem)] sm:w-[calc(50%-1rem)] gap-1 ${
                      type === "textarea" ? "col-span-2" : ""
                    }`}
                  >
                    <label className="text-sm font-medium text-gray-500 dark:text-white">
                      {label}
                    </label>
                    {type === "textarea" ? (
                      <textarea
                        className="bg-gray-50 border border-gray-300 text-gray-900 p-2 text-sm rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300"
                        rows={4}
                        name={key}
                        value={formValues[key] || ""}
                        onChange={handleInputChange}
                      />
                    ) : (
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 p-2 text-sm rounded-lg focus-visible:outline-none focus-visible:ring focus-visible:ring-blue-300"
                        name={key}
                        value={formValues[key] || ""}
                        onChange={handleInputChange}
                        disabled={key === "Id"}
                      />
                    )}
                  </div>
                ))}
                <div className="flex gap-4 items-center w-[calc(100%-1rem)] justify-end">
                  <button
                    className="flex items-center justify-center gap-4 h-fit bg-indigo-500 hover:bg-indigo-700 text-white font-bold p-3 rounded transform transition-transform duration-300 hover:scale-105"
                    type="button"
                    onClick={handleAdd}
                  >
                    <Image src="/plus.png" width={32} height={32} alt="Plus" />
                    Ekle
                  </button>
                  <button
                    className="flex items-center justify-center gap-4 h-fit bg-indigo-500 hover:bg-indigo-700 text-white font-bold p-3  rounded transform transition-transform duration-300 hover:scale-105"
                    type="button"
                    onClick={handleUpdate}
                  >
                    <Image
                      src="/update.png"
                      width={32}
                      height={32}
                      alt="Update"
                    />
                    Güncelle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {showConfirm && (
        <Alert
        message={action === "add" ? "Yeni kayıt eklenecek. Onaylıyor musunuz?" : "Kayıt güncellenecek. Onaylıyor musunuz?"}
        confirmMessage={action === "add" ? "Ekle" : "Güncelle"}
          onConfirm={confirmAction}
          onClose={cancelLogout}
        />
      )}
    </>
  );
}
