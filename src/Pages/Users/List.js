import {
  GridList,
  GridListTile,
  GridListTileBar,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";

import { useState, useEffect } from "react";
import FakeStoreApi from "../../services/FakeStoreApi";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    marginTop: 150,
  },
  gridList: {
    width: 500,
    height: 450,
  },

  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
}));

export default function List() {
  const classes = useStyles();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsersAll = async () => {
      const response = await FakeStoreApi.get("/users");
      console.log(response.data);
      setUsers(response.data);
    };
    getUsersAll();
  }, []);

  const img = "https://thispersondoesnotexist.com/image?v$";

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList}>
        {users.map((user) => (
          <GridListTile className={classes.gridListTile}>
            <img src={img} alt="users" />
            <GridListTileBar
              title={user.email}
              subtitle={<span>by: {user.name.firstname}</span>}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
