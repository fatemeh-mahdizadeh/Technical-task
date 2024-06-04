import { DataGrid } from '@mui/x-data-grid';
import { column, tableTitle } from '../utils/tools';
//start table
export default function DataTable() {
  return (
    
    <div style={{ height: 400}} className='flex w-12/12 md:w-10/12 mt-5'>
      <DataGrid
      //style table
      sx={{display:'flex',textAlign:'end', justifyContent: "space-between",alignItems:'end' }}
      align="right"
        rows={tableTitle}
        columns={column}
        initialState={{
          //show slide 
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        //show scrooler
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}