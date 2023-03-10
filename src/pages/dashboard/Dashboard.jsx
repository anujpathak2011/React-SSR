import { DeleteIcon, EditIcon, EyeIcon } from 'icons';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Dashboard = () => {
  const { customers } = useSelector((state) => state.customer);
  return (
    <>
      <div className="flex gap-4">
        <div className="userlist">
          <h3>User Details</h3>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Paid Amount</th>
                <th>Date</th>
                <th>Remaining</th>
                <th>Last Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((c) => (
                <tr>
                  <td>{c.name}</td>
                  <td>{c.paid}</td>
                  <td>{c.paidDate.toDateString()}</td>
                  <td>{c.remain}</td>
                  <td>{c.remainDate.toDateString()}</td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <EyeIcon />
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <EditIcon />
                      </div>
                      <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                        <DeleteIcon />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="category"></div>
      </div>
    </>
  );
};
