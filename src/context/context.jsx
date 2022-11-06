import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
export const mainContext = createContext([]);

let usersArr = [
  {
    userID: uuidv4(),
    userName: "John",
    boards: [
      {
        id: uuidv4(),
        boardName: "JS",
        tasks: {
          todo: [{ id: uuidv4(), taskName: "Complete the task" }],
          doing: [{ id: uuidv4(), taskName: "Summerise the task" }],
          done: [{ id: uuidv4(), taskName: "Edit the task" }],
        },
      },
    ],
  },
];

const actionTypes = {
  addNewUser: "ADD_NEW_USER",
  addNewBoard: "ADD_NEW_BOARD",
  addNewStatusColumn: "ADD_NEW_STATUS_COLUMN",
  addNewTask: "ADD_NEW_TASK",
  deleteTask: "DELETE_TASK",
};

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.addNewUser:
      return [...state, action.payload];
    case actionTypes.addNewBoard:
      return state.map((user) => {
        if (user.userID === action.userID) {
          return { ...user, boards: [...user.boards, action.payload] };
        }
        return user;
      });
    case actionTypes.addNewStatusColumn:
      return state.map((user) => {
        if (user.userID === action.userID) {
          return {
            ...user,
            boards: user.boards.map((board) => {
              if (board.boardName === action.boardName) {
                console.log(board.tasks);
                return {
                  ...board,
                  tasks: { ...board.tasks, ...action.payload },
                };
              }
              return board;
            }),
          };
        }
        return user;
      });
    case actionTypes.addNewTask:
      return state.map((user) => {
        if (user.userID === action.userID) {
          return {
            ...user,
            boards: user.boards.map((board) => {
              if (board.boardName === action.boardName) {
                console.log(1);
                return {
                  ...board,
                  tasks: {
                    ...board.tasks,
                    [action.status]: [
                      ...board.tasks[action.status],
                      action.payload,
                    ],
                  },
                };
              }
              return board;
            }),
          };
        }

        return user;
      });
    case actionTypes.deleteTask:
      return state.map((user) => {
        if (user.userID === action.userID) {
          return {
            ...user,
            boards: user.boards.map((board) => {
              if (board.boardName === action.boardName) {
                const copy = { ...board.tasks };
                delete copy[action.status];

                return {
                  ...board,
                  tasks: { ...copy },
                };
              }
              return board;
            }),
          };
        }

        return user;
      });
  }
}

function MainContextProvider({ children }) {
  const [users, dispatch] = useReducer(reducer, usersArr);

  return (
    <mainContext.Provider value={{ users, dispatch }}>
      {children}
    </mainContext.Provider>
  );
}

export default MainContextProvider;
