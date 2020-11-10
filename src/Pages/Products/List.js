import {
  List as Lista,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
  makeStyles,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import Api from "../../services/FakeStoreApi";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
  },
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  inline: {
    display: "inline",
  },
  listItem: {
    display: "flex",
    flexWrap: "wrap",
  },
}));

function List() {
  const classes = useStyles();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const response = await Api.get("/products");
      setProducts(response.data);
    };
    getAllProducts();
  }, []);

  return (
    <div className={classes.container}>
      {products.map((product) => (
        <Lista className={classes.root}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar alt="" src="" />
            </ListItemAvatar>
            <ListItemText
              primary={product.title}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  ></Typography>
                  {product.description}
                </>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </Lista>
      ))}
    </div>
  );
}
export default List;
