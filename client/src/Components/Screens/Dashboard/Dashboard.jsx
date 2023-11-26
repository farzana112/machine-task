import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../../../Store/userSlice';
const Dashboard = () => {
    const dispatch = useDispatch();
    const users=useSelector((state)=>state)
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Location</th>
            <th scope="col">Occupation</th>

          </tr>
        </thead>
        <tbody>
          <tr>
                     </tr>
          <tr>
            
          </tr>
          <tr>
           
            
          </tr>
        </tbody>
      </table>

      <table className="table">
        <thead className="thead-light">
          
        </thead>
        <tbody>
          <tr>
           
          </tr>
          <tr>
            
          </tr>
          <tr>
           
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
