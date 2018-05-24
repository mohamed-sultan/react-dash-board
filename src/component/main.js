import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { graphql, compose } from "react-apollo";

import { Client } from "../client";
import GET_ALL_USER_QUERY from "../graphql/getAllUser";
import UPDATE_USER_MUTATION from "../graphql/updateUser";
import Sheet from './excelGenerator'

const FAKE =
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqE7vZfX9CID8HMAzhTliXxKGew2V5CcphD_7g9LosxM8yvav7";
const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: [1],
    data: []
  };

  componentWillMount() {
    this._loadData();
  }

  _loadData = async () => {
    const result = await Client.query({
      query: GET_ALL_USER_QUERY
    });
    this.setState({ data: result.data.getUsers });
  };
  handleToggle = value => async () => {
    console.log("-------------------------------");
    console.log("value is ", value);
    console.log("-------------------------------");
    await this.props.mutate({
      variables: {
        _id: value._id,
        disableBusiness: !value.disableBusiness
      }
    });
    await this._loadData();
  };

  render() {
    const { classes } = this.props;
    console.log("-------------------------------");
    console.log(this.state.data);
    console.log("-------------------------------");
    return (
      <div className={classes.root}>
      <div style={{marginTop:'15px'}} >
          <Sheet data={this.state.data} />
    </div>
        <h2>disabale business account</h2>
        <List>
          {this.state.data.map(value => (
            <ListItem key={value._id} dense button className={classes.listItem}>
              <Avatar alt="Remy Sharp" src={value.profile || FAKE} />
              <ListItemText primary={`${value.fullName}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggle(value)}
                  checked={value.disableBusiness}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        
      </div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(withStyles(styles), graphql(UPDATE_USER_MUTATION))(
  CheckboxListSecondary
);
