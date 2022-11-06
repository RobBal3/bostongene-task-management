import React, { useContext, useState } from "react";
import { mainContext } from "../../context/context.jsx";
import { useStyles } from "./style.js";
import User from "../user/index.js";
import AddNewUserModal from "../../modals/addNewUser";
import { v4 as uuidv4 } from "uuid";

function Users() {
  const { users } = useContext(mainContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const classes = useStyles();
  return (
    <div className={classes.usersContainer}>
      <div className={classes.usersWrapper}>
        {users.map((user) => {
          return <User key={uuidv4()} user={user} />;
        })}
      </div>

      <button className={classes.addUser} onClick={() => setIsModalOpen(true)}>
        Add New User
      </button>

      {isModalOpen && <AddNewUserModal setIsModalOpen={setIsModalOpen} />}
    </div>
  );
}

export default Users;
