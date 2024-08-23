// data.ts
export const stpGridHeads = [
  {
    field: "Tarih",
    filter: true,
    sortable: true,
    resizable: true,
    valueFormatter: (params: any) => {
      const date = new Date(params.value);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day} ${month} ${year}`;
    },
  },
  { field: "Mevcut", filter: true, sortable: true },
  { field: "Oda", filter: true, sortable: true },
  { field: "Free", filter: true, sortable: true },
  { field: "Son Durum", filter: true, sortable: true },
  { field: "Yetişkin", filter: true, sortable: true },
  { field: "Çocuk", filter: true, sortable: true },
  { field: "Toplam Kişi", filter: true, sortable: true },
  { field: "Pax", filter: true, sortable: true },
  { field: "Yuzde%(Net)", filter: true, sortable: true },
  { field: "Package Tutar", filter: true, sortable: true, hide: true },
  { field: "Gun Tarih", filter: true, sortable: true, hide: true },
  { field: "Pax(Y/C2)", filter: true, sortable: true, hide: true },
  { field: "Arızalı Oda", filter: true, sortable: true, hide: true },
  { field: "Arızalı Toplam", filter: true, sortable: true, hide: true },
  { field: "Bebek", filter: true, sortable: true, hide: true },
  { field: "Birleşme", filter: true, sortable: true, hide: true },
  { field: "Birleşme Trace", filter: true, sortable: true, hide: true },
  { field: "Blokajsız Oda", filter: true, sortable: true, hide: true },
  { field: "Brut Tutar", filter: true, sortable: true, hide: true },
  { field: "Comp Oda", filter: true, sortable: true, hide: true },
  { field: "Day Use", filter: true, sortable: true, hide: true },
  { field: "Doviz Gerçek", filter: true, sortable: true, hide: true },
  { field: "Doviz Tutar", filter: true, sortable: true, hide: true },
  { field: "Fark_Yuzde", filter: true, sortable: true, hide: true },
  { field: "Forecast", filter: true, sortable: true, hide: true },
  { field: "Forecast Gelir", filter: true, sortable: true, hide: true },
  { field: "Forecast Kalan", filter: true, sortable: true, hide: true },
  { field: "Forecast Satılan", filter: true, sortable: true, hide: true },
  { field: "Forecasttan Kalan(Tek)", filter: true, sortable: true, hide: true },
  { field: "Gelen Free", filter: true, sortable: true, hide: true },
  { field: "Gelen Oda", filter: true, sortable: true, hide: true },
  { field: "Gelen Pax", filter: true, sortable: true, hide: true },
  { field: "Gelen Top Kişi", filter: true, sortable: true, hide: true },
  { field: "Gelen Yetişkin", filter: true, sortable: true, hide: true },
  { field: "Gelen Çocuk", filter: true, sortable: true, hide: true },
  { field: "Giden Free", filter: true, sortable: true, hide: true },
  { field: "Giden Oda", filter: true, sortable: true, hide: true },
  { field: "Giden Pax", filter: true, sortable: true, hide: true },
  { field: "Giden Toplam Kişi", filter: true, sortable: true, hide: true },
  { field: "Giden Yetişkin", filter: true, sortable: true, hide: true },
  { field: "Giden Çocuk", filter: true, sortable: true, hide: true },
  { field: "His_For", filter: true, sortable: true, hide: true },
  { field: "House Use Oda", filter: true, sortable: true, hide: true },
  { field: "Info Oda", filter: true, sortable: true, hide: true },
  { field: "Kalan_1", filter: true, sortable: true, hide: true },
  { field: "Kalan_2", filter: true, sortable: true, hide: true },
  { field: "Kalan_3", filter: true, sortable: true, hide: true },
  { field: "Kalan_4", filter: true, sortable: true, hide: true },
  { field: "Kalan_5", filter: true, sortable: true, hide: true },
  { field: "Kalan_6", filter: true, sortable: true, hide: true },
  { field: "Kapalı Oda", filter: true, sortable: true, hide: true },
  { field: "Kdv%", filter: true, sortable: true, hide: true },
  { field: "Kon.Vergisi%", filter: true, sortable: true, hide: true },
  { field: "Kontenjan Kalan", filter: true, sortable: true, hide: true },
  { field: "Kontenjan Oda", filter: true, sortable: true, hide: true },
  { field: "Kontenjan Satılan", filter: true, sortable: true, hide: true },
  { field: "Konum1", filter: true, sortable: true, hide: true },
  { field: "Konum1%", filter: true, sortable: true, hide: true },
  { field: "Konum2", filter: true, sortable: true, hide: true },
  { field: "Konum2%", filter: true, sortable: true, hide: true },
  { field: "Konum3", filter: true, sortable: true, hide: true },
  { field: "Konum3%", filter: true, sortable: true, hide: true },
  { field: "Konum4", filter: true, sortable: true, hide: true },
  { field: "Konum4%", filter: true, sortable: true, hide: true },
  { field: "Konum5", filter: true, sortable: true, hide: true },
  { field: "Konum5%", filter: true, sortable: true, hide: true },
  { field: "Konum6", filter: true, sortable: true, hide: true },
  { field: "Konum6%", filter: true, sortable: true, hide: true },
  { field: "Mevcut(Net)", filter: true, sortable: true, hide: true },
  { field: "Müşteri Tipi(1)", filter: true, sortable: true, hide: true },
  { field: "Müşteri Tipi(2)", filter: true, sortable: true, hide: true },
  { field: "Müşteri Tipi(3)", filter: true, sortable: true, hide: true },
  { field: "Müşteri Tipi(4)", filter: true, sortable: true, hide: true },
  { field: "Müşteri Tipi(5)", filter: true, sortable: true, hide: true },
  { field: "Müşteri Tipi(6)", filter: true, sortable: true, hide: true },
  { field: "Müşteri Tipi(7)", filter: true, sortable: true, hide: true },
  { field: "Müşteri Tipi(8)", filter: true, sortable: true, hide: true },
  { field: "Net Oda", filter: true, sortable: true, hide: true },
  { field: "NoShow", filter: true, sortable: true, hide: true },
  { field: "Ort.Pax(Prm)", filter: true, sortable: true, hide: true },
  { field: "Ort_Oda_Brut", filter: true, sortable: true, hide: true },
  { field: "Ort_Paxp_Brut", filter: true, sortable: true, hide: true },
  { field: "Otel Adı", filter: true, sortable: true, hide: true },
  { field: "Otel Kodu", filter: true, sortable: true, hide: true },
  { field: "Package Kdv", filter: true, sortable: true, hide: true },
  { field: "Package Kdvsiz", filter: true, sortable: true, hide: true },
  { field: "Package Kon.Vergisi", filter: true, sortable: true, hide: true },
  { field: "Pax(P)", filter: true, sortable: true, hide: true },
  { field: "Pax(Prm)", filter: true, sortable: true, hide: true },
  { field: "Paxp Free", filter: true, sortable: true, hide: true },
  { field: "Paxp Yetişkin", filter: true, sortable: true, hide: true },
  { field: "Paxp Çocuk", filter: true, sortable: true, hide: true },
  { field: "Promosyon Net", filter: true, sortable: true, hide: true },
  { field: "Rezervasyon Giriş", filter: true, sortable: true, hide: true },
  { field: "Rezervasyon Kalan", filter: true, sortable: true, hide: true },
  { field: "Satış Oda", filter: true, sortable: true, hide: true },
  { field: "Satış Pax", filter: true, sortable: true, hide: true },
  { field: "Satış Tarih", filter: true, sortable: true, hide: true },
  { field: "Satis Kalan(Tek)", filter: true, sortable: true, hide: true },
  { field: "Son Güncellenme", filter: true, sortable: true, hide: true },
  { field: "Tarih", filter: true, sortable: true, hide: true },
  { field: "Toplam Komisyon", filter: true, sortable: true, hide: true },
  { field: "Toplam Net", filter: true, sortable: true, hide: true },
  { field: "Toplam Satış", filter: true, sortable: true, hide: true },
  { field: "Toplam Tutar", filter: true, sortable: true, hide: true },
  { field: "Ülke(1)", filter: true, sortable: true, hide: true },
  { field: "Ülke(2)", filter: true, sortable: true, hide: true },
  { field: "Ülke(3)", filter: true, sortable: true, hide: true },
  { field: "Ülke(4)", filter: true, sortable: true, hide: true },
  { field: "Ülke(5)", filter: true, sortable: true, hide: true },
  { field: "Ülke(6)", filter: true, sortable: true, hide: true },
  { field: "Ülke(7)", filter: true, sortable: true, hide: true },
  { field: "Ülke(8)", filter: true, sortable: true, hide: true },
  { field: "Ülke(9)", filter: true, sortable: true, hide: true },
  { field: "Yatan Oda", filter: true, sortable: true, hide: true },
  { field: "Yetişkin", filter: true, sortable: true, hide: true },
  { field: "Yıl", filter: true, sortable: true, hide: true },
  { field: "Yüzde Fark", filter: true, sortable: true, hide: true },
  { field: "Yüzde Kalan", filter: true, sortable: true, hide: true },
  { field: "Yüzde Satılan", filter: true, sortable: true, hide: true },
  { field: "Yüzde%", filter: true, sortable: true, hide: true },
  { field: "Çocuk", filter: true, sortable: true, hide: true },
  { field: "Çocuk Free", filter: true, sortable: true, hide: true },
  { field: "Çocuk Net", filter: true, sortable: true, hide: true },
  { field: "Çocuk%Net", filter: true, sortable: true, hide: true },
  { field: "Şirket", filter: true, sortable: true, hide: true },
];

export const initialValues: any = {
  db_Id: 9,
  xRez_Sirket: 9,
  xBas_Tar: "2024-06-01",
  xBit_Tar: "2024-06-19",
  xtip: 1,
  kon1: "ALL",
  kon2: "BB",
  xchkFis_Fazla_otel_10: 0,
  bas_Yil: 2022,
  bit_Yil: 2022,
  fisrci_Kapalioda_10: 0,
  xRez_C_W: "C",
  xSistem_Tarihi: "2024-03-01",
  xAlis_Tarihi: "2024-01-01",
  sistem_Bas1: "2020-01-01",
  sistem_Bit1: "2029-01-01",
  pmdahil_10: 0,
  tip_1: "001",
  xFis_Bela_tutar_10: 0,
  trace_Dus_10: 0,
  cev_01: null,
};

export function getData() {
  return [
    {
      quarter: "Q1'18",
      iphone: 140,
      mac: 16,
      ipad: 14,
      wearables: 12,
      services: 20,
    },
  ];
}
export const StpClassicc = {
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
export const BlackListDummyData = {
  db_Id: 9,
  Adi: "ALL?",
};

export const BlackListHead = [
  {
    field: "Id",
    filter: true,
    sortable: true,
    valueFormatter: (params: any) =>
      params.value && params.value !== "null" && params.value !== "undefined"
        ? params.value
        : "",
  },
  {
    field: "Adi",
    filter: true,
    sortable: true,
    valueFormatter: (params: any) =>
      params.value && params.value !== "null" && params.value !== "undefined"
        ? params.value
        : "",
  },
  {
    field: "Soy",
    filter: true,
    sortable: true,
    valueFormatter: (params: any) =>
      params.value && params.value !== "null" && params.value !== "undefined"
        ? params.value
        : "",
  },
  {
    field: "Aciklama",
    filter: true,
    sortable: true,
    width: 400,
    valueFormatter: (params: any) =>
      params.value && params.value !== "null" && params.value !== "undefined"
        ? params.value
        : "",
  },
  {
    field: "Tcno",
    filter: true,
    sortable: true,
    valueFormatter: (params: any) =>
      params.value && params.value !== "null" && params.value !== "undefined"
        ? params.value
        : "",
  },
  {
    field: "Dogum_tarihi",
    filter: true,
    sortable: true,
    valueFormatter: (params: any) => {
      if (!params.value) return " ";
      const date = new Date(params.value);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day} ${month} ${year}` || " ";
    },
  },
  {
    field: "Sistem_tarihi",
    filter: true,
    sortable: true,
    valueFormatter: (params: any) => {
      if (!params.value) return " ";
      const date = new Date(params.value);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day} ${month} ${year}` || " ";
    },
  },
  {
    field: "Sistem_grubu",
    filter: true,
    sortable: true,
    valueFormatter: (params: any) =>
      params.value && params.value !== "null" && params.value !== "undefined"
        ? params.value
        : "",
  },
  {
    field: "Otel_kodu",
    filter: true,
    sortable: true,
    hide: true,
    valueFormatter: (params: any) =>
      params.value && params.value !== "null" && params.value !== "undefined"
        ? params.value
        : "",
  },
  {
    field: "Ulke_xml",
    filter: true,
    sortable: true,
    hide: true,
    valueFormatter: (params: any) =>
      params.value && params.value !== "null" && params.value !== "undefined"
        ? params.value
        : "",
  },
  {
    field: "Kulanici",
    filter: true,
    sortable: true,
    hide: true,
    valueFormatter: (params: any) =>
      params.value && params.value !== "null" && params.value !== "undefined"
        ? params.value
        : "",
  },
  {
    field: "Acenta",
    filter: true,
    sortable: true,
    hide: true,
    valueFormatter: (params: any) =>
      params.value && params.value !== "null" && params.value !== "undefined"
        ? params.value
        : "",
  },
];
export const BlackLisFormFields = [
  { label: "Id", key: "Id" },
  { label: "Adı", key: "Adi" },
  { label: "Soy Adı", key: "Soy" },
  { label: "Açıklama", key: "Aciklama", type: "textarea" },
];

 
