import React,{Fragment} from 'react';
import DeleteCoupon from '../Delete/DeleteCoupon';

import Coupon from './Coupon';
import classes from './CouponList.module.css';
import {
  Avatar,
  // BottomNavigation,
  Box,
  Card,
  // Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  // TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../AdminHome/GetCompany/get-initials';

const CouponList = (props) => {
  return (
 
    <div className={classes['movies-list']}>
      <Card >
      <Box sx={{ minWidth: 1050 }}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
         
         <TableBody>
       <TableHead >
            <TableRow  >

              <TableCell style={{ width: '5%' }} align='center'>
                Id
              </TableCell>

              <TableCell style={{ width: '5%' }}align='center'>
                Title
              </TableCell>

              <TableCell style={{ width: '5%' }}align='center'>
                Category
              </TableCell>

              <TableCell style={{ width: '5%' }}align='center'>
              Description
              </TableCell>

              <TableCell style={{ width: '10%' }}align='center' >
              Image
              </TableCell>

              <TableCell style={{ width: '5%' }}align='center'>
              Amount
              </TableCell>

              <TableCell style={{ width: '5%' }}align='center'>
              Start Date
              </TableCell>
              
              <TableCell style={{ width: '5%' }}align='center'>
              End Date
              </TableCell>
              
              <TableCell style={{ width: '5%' }}align='center'>
              Price
              </TableCell>

              <TableCell style={{ width: '5%' }}align='center'>
    
              </TableCell>
             
            </TableRow>
          </TableHead>
          </TableBody>
          </Table>
          </Box>
          </Card>
      {props.coupons.map((coupon) => 
      
        <Coupon
          key={coupon.id}
          coupon={coupon} 
          onDelete={(id)=>props.onDelete(id)}/> 
      
       
        )}
       
    </div>
  );
};

export default CouponList;
