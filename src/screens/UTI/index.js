import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getStatusByAllVitalSignal } from '../../utils/uti/getStatus.ts';
import { getConsciousnessState } from '../../utils/uti/getConsciousnessState.ts';
import { getStatusColorUTI } from '../../utils/getStatusColor.js';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Nome', width: 130 },
  {
    headerName: 'Frequência cardíaca',
    field: 'FC',
    type: 'number',
    width: 150,
  },
  {
    headerName: 'Frequência respiratória',
    field: 'FR',
    type: 'number',
    width: 160,
  },
  {
    headerName: 'Temperatura',
    field: 'TP',
    type: 'number',
    width: 100,
  },
  {
    headerName: 'Pressão arterial',
    field: 'PA',
    type: 'number',
    width: 120,
  },
  {
    headerName: 'Consciência',
    field: 'OX',
    type: 'number',
    width: 90,
    valueGetter: (value, row) => {
      return getConsciousnessState(row.OX);
    },
  },
  {
    field: 'status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => {
      const FC = {
        type: 'Freq. cardíaca',
        vitalSign: row.FC,
      };
      const FR = {
        type: 'Freq. respiratória',
        vitalSign: row.FR,
      };
      const TP = {
        type: 'Temperatura',
        vitalSign: row.TP,
      };
      const PA = {
        type: 'Pressão arterial',
        vitalSign: row.PA,
      };
      const OX = {
        type: 'Estado de consciência',
        vitalSign: row.OX,
      };
      const vitalSignalPatient = [FC, FR, TP, PA, OX];
      const { status } = getStatusByAllVitalSignal(vitalSignalPatient);

      return `${status}`;
    },
    cellClassName: (value) => {
      const color = getStatusColorUTI(value.value);
      console.log('color', color);

      return color;
    },
  },
];

const rows = [
  { id: 1, name: 'Jon', FC: 35, FR: 30, OX: 'A', PA: 180, TP: 36.1 },
  { id: 2, name: 'Cersei', FC: 42, FR: 30, OX: 'A', PA: 180, TP: 36.5 },
  { id: 3, name: 'Jaime', FC: 45, FR: 30, OX: 'A', PA: 180, TP: 36.5 },
  { id: 4, name: 'Arya', FC: 16, FR: 30, OX: 'A', PA: 180, TP: 36.5 },
  {
    id: 5,
    name: 'Daenerys',
    FC: null,
    FR: 30,
    OX: 'A',
    PA: 180,
    TP: 36.5,
  },
  { id: 6, name: 'Mafe', FC: 51, FR: 12, OX: 'A', PA: 111, TP: 36.5 },
  { id: 7, name: 'Ferrara', FC: 44, FR: 30, OX: 'A', PA: 180, TP: 36.5 },
  { id: 8, name: 'Rossini', FC: 36, FR: 30, OX: 'A', PA: 180, TP: 36.5 },
  { id: 9, name: 'Harvey', FC: 65, FR: 30, OX: 'A', PA: 180, TP: 36.5 },
];

function TableUTI() {
  return (
    <div className="flex flex-col bg-[#fff] w-[90%] pb-10 rounded-[20px] pl-10">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col font-poppins">
          <h1 className="text-[28px] text-[#1d1d1d] font-medium mt-5">
            Sinais vitais - 30/05
          </h1>
        </div>
      </div>

      <div style={{ height: 400, width: '95%', marginTop: 20 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default TableUTI;
