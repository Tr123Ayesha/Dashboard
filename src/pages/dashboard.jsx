import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './dashboard.css';

function createData(name, amount, method, accountName, accNo, City, date) {
    return { name, amount, method, accountName, accNo, City, date  };
  }

  const rows = [
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
    createData('AKEMIWRLD', '£250,000', 'Bank Account', 'John Williams', '126283399384039', 'USA,Texas', '11/10/24',),
];

export default function Dashboard() {
  return (
    <>
    <TableContainer  sx={{  background:" linear-gradient(360deg, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.06) 100%)",
    }}component={Paper}>
      <Table sx={{ minWidth: 650 , }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='left' sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'800', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px',borderBottom:'1px solid rgba(41, 41, 41, 1)', paddingTop:'17.5px', paddingBottom:'17.5px', paddingLeft:'20px' , width:'158px'}}>Name </TableCell>
            <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'800', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px',borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>Amount</TableCell>
            <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'800', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px',borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>Withdrawal Method</TableCell>
            <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'800', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px', borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>Account Name</TableCell>
            <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'800', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px', borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>Acc No/ Wallet Address</TableCell>
            <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'800', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px', borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>City/Chain</TableCell>
            <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'800', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px',borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>Date</TableCell>
          
          </TableRow>

          <TableRow>
    <TableCell colSpan={8} sx={{ height: '16px', backgroundColor: 'black', borderBottom: 'none' }} />
  </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left" component="th" scope="row" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'400', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px', borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>
                {row.name}
              </TableCell>
              <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'400', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px' ,borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>{row.amount}</TableCell>
              <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'400', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px', borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>{row.method}</TableCell>
              <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'400', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px', borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>{row.accountName}</TableCell>
              
              <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'400', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px', borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>{row.accNo}</TableCell>
              <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'400', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px', borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>{row.City}</TableCell>
              <TableCell align="left" sx={{fontFamily:"Nexa", fontSize:'14px', fontWeight:'400', color:'rgba(143, 143, 143, 1)', lineHeight:'20.3px' ,borderBottom:'1px solid rgba(41, 41, 41, 1)'}}>{row.date}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <button className='ExportPayOutHistory'>
    Export
    </button>
    </>
  );
}