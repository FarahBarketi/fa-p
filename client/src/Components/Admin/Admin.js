import React from "react";
import { useSelector } from "react-redux";
import Userhandler from "./UserHandler";

import { useDispatch } from "react-redux";
import { getusers } from "../../Redux/Action/userAction";
const Admin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.adminReducer.users);
dispatch(getusers())
 
  return (
    <div className="admin">
      {users.map(
        (user) =>
           <Userhandler key={user._id} user={user} />
      )}
    </div>
  );
};

export default Admin;