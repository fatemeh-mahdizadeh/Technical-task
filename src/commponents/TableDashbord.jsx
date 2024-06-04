import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { heed, tableTitle } from '../utils/tools';


function TableDash() {

    return (
        <div className='fontFamily md:w-[83%]'>
            <TableContainer component={Paper} className='h-[360px] mt-10'>
                <Table aria-label="simple table">
                    <TableHead sx={{
                        bgcolor: '#f5f5f5'

                    }}>
                        <TableRow styles={{
                            body: { backgroundColor: "lightyellow" }
                        }}>
                            {
                                heed.map((name, index) => (
                                    <TableCell align="right" key={index}><p className=' text-[11px] md:text-base'>{name.headerName} <span className='ml-1.5  sm:inline hidden text-gray-300 '>|</span></p></TableCell>
                                ))
                            }
                            <TableCell align="right" sx={{ display: "flex", flexDirection: "row", justifyContent: "right" }} ><button className='mr-2' >sort</button><p className='text-base' >بخش </p></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {tableTitle.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">0</TableCell>
                                <TableCell align="right">{row.number}</TableCell>
                                <TableCell align="right">0</TableCell>
                                <TableCell align="right">0</TableCell>
                                <TableCell align="right" component="th" scope="row">
                                    <p>{row.name}</p>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}

export default TableDash