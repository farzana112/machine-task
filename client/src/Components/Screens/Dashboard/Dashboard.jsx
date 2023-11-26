import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetAllUsers } from "../../../Store/userSlice";
import { useEffect } from "react";
const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllUsers = async () => {
      await dispatch(GetAllUsers());
    };
    getAllUsers();
  }, []);
  const allUsers = useSelector((state) => state.user?.allUsers);
  console.log("useefect");
  console.log(allUsers);

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col"> NO:</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Location</th>
            <th scope="col">Occupation</th>
          </tr>
        </thead>

        {allUsers.map((user, index) => {
          return (
            <tbody key={index}>
              <tr>
              <th scope="col">{index+1}</th>
            <th scope="col">{user?.name}</th>
            <th scope="col">{user?.userName}</th>
            <th scope="col">{user?.location}</th>
            <th scope="col">{user?.occupation}</th>
              </tr>
              
            </tbody>
          );
        })}
      </table>

      <table className="table">
        <thead className="thead-light"></thead>
        <tbody>
          <tr></tr>
          <tr></tr>
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
