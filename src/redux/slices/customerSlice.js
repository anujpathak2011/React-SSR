import { createSlice } from "@reduxjs/toolkit";

export const customerList = [
  {
    name: 'Jack S',
    paid: 650,
    paidDate: new Date('2023-02-15'),
    remain: 0,
    remainDate: new Date('2023-03-15')
  },
  {
    name: 'John i',
    paid: 650,
    paidDate: new Date('2023-02-15'),
    remain: 1300,
    remainDate: new Date('2023-03-15')
  },
  {
    name: 'Carl dk',
    paid: 650,
    paidDate: new Date('2023-02-15'),
    remain: 300,
    remainDate: new Date('2023-03-15')
  },
  {
    name: 'Marry D',
    paid: 650,
    paidDate: new Date('2023-02-15'),
    remain: 650,
    remainDate: new Date('2023-03-15')
  },
] 

const initialState = {
  customers: customerList
}

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    getCustomerList: state => {
    },
    deleteCustomer(state, action) {
      return {...state, request: action.payload}
    }
  }
})

export const { getCustomerList } = customerSlice.actions;

export default customerSlice.reducer;