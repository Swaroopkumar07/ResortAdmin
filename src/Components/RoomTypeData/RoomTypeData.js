import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { Button } from '@mui/material';
import '../RoomTypeData/RoomTypeData.css'

const columns = [
  { id: 'Category', label: 'Category', minWidth: 120 },
  { id: 'BaseOccupancy', label: 'Base Occupancy', minWidth: 90 },
  { id: 'MaxOccupancy', label: 'Max Occupancy', minWidth: 90 },
  { id: 'EBeds', label: 'E Bed/s', minWidth: 90  },
  { id: 'Child', label: 'Child', minWidth: 90  },
  { id: 'RoomCount', label: 'Room Count', minWidth: 90  },
  { id: 'Priority', label: 'Priority', minWidth: 90  },
  { id: 'DefaultRates', label: 'Default Rates', minWidth: 90  },
  { id: 'Status', label: 'Status', minWidth: 90  },
  { id: 'MetaStatus', label: 'Meta Status', minWidth: 90  },
  { id: 'HkRoomNumber', label: 'Hk Room Number', minWidth: 90  },
];

function createData( Category, BaseOccupancy, MaxOccupancy, EBeds,Child,RoomCount,Priority,DefaultRates,Status,MetaStatus,HkRoomNumber) {
  // const density = population / size;
  return { Category,
     BaseOccupancy, 
     MaxOccupancy, 
     EBeds,Child,
     RoomCount,
     Priority,
     DefaultRates,
     Status : null,
     MetaStatus : null,
     HkRoomNumber: null
     };
}

const rows = [
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
  createData('Deluxe Room', 1, 2, 3,4,5,6,7),
 
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '90%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  className='table_heading'
                >
                 <div className='table_heading_and_icon'>
                    {column.label} <ArrowDownwardIcon className='table_icon'  />
                  </div>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, rowIndex) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={rowIndex} style={{marginTop:"20px !important",backgroundColor:"red !important"}}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align} className='table_data'>
                      <div className='table_data_and_values'>
                      {column.format && typeof row[column.id] === 'number'
                          ? column.format(row[column.id])
                          : row[column.id] === null ? (
                              column.id === 'HkRoomNumber' ? (
                                
                                <Button  variant="outlined" className='Hkroom_button'>
                                 Update
                                </Button>
                              ) : (
                               
                                <Button variant="contained" className='status_button'>
                                  Active
                                </Button>
                              )
                            ) : (
                              row[column.id] 
                            )}
                      </div>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <Button
          variant="outlined"
          disabled={page === 0}
          onClick={() => handleChangePage(null, page - 1)}
          className='previous_page_button'
        >
          Previous
        </Button>
        <div className='page_count'>{`Page ${page + 1} of ${Math.ceil(rows.length / rowsPerPage)}`}</div>
        <Button
           variant="outlined"
          disabled={page >= Math.ceil(rows.length / rowsPerPage) - 1}
          onClick={() => handleChangePage(null, page + 1)}
          className='next_page_button'
        >
          Next
        </Button>
      </div>
    </Paper>
  );
}