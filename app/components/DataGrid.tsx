"use client";
import { AgGridReact } from 'ag-grid-react';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css'; 
import { useState } from 'react';

interface ICar {
    make: string;
    model: string;
    price: number;
}
interface DataGridProps {
    data: any; 
  }
const DataGrid  = ({ data }: DataGridProps) => {
console.log(data)
    const [columnDefs] = useState<ColDef[]>([
        { field: 'make', filter: true, sortable: true },
        { field: 'model', filter: true, sortable: true },
        { field: 'price', filter: 'agNumberColumnFilter', sortable: true }
    ]);

    const [rowData] = useState<ICar[]>([
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxster', price: 72000 }
    ]);

    const onGridReady = (params: GridReadyEvent) => {
        params.api.sizeColumnsToFit(); 
    };

    const [quickFilterText, setQuickFilterText] = useState('');

    return (
        <div>
            <input
                type="text"
                value={quickFilterText}
                onChange={(e) => setQuickFilterText(e.target.value)}
                placeholder="Arama..."
            />
            <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    pagination={true}
                    paginationPageSize={10}
                    onGridReady={onGridReady}
                    quickFilterText={quickFilterText} 
                />
            </div>
        </div>
    );
}

export default DataGrid;
 