import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Storage from "local-storage";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    backgroundColor: "gray"
  }
});
const st = {
  input: {
    marginVertical: 5
  }
};
const TextFieldMargins = props => {
  const { classes } = props;
  let textInput1 = null;
  let textInput2 = null;
  function _handleChange(e) {
    textInput1 = e.target.value;
  }
  function _handleChange2(e) {
    textInput2 = e.target.value;
  }
  return (
    <div
      className={classes.container}
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: "15px"
      }}
    >
      <TextField
        style={st.input}
        label="email"
        id="margin-none"
        className={classes.textField}
        onChange={_handleChange}
      />
      <TextField
        style={st.input}
        label="password"
        id="margin-dense"
        className={classes.textField}
        margin="dense"
        onChange={_handleChange2}
      />
      <div style={{ marginVertical: "100px" }}>
        <Button
          size="small"
          className={classes.button}
          onClick={() => {
            if (textInput1 === textInput2) {
              if (textInput1 === "@admin") {
                Storage("register", "admin");
                props.getResult(true);
              }
            }
          }}
        >
          submit
        </Button>
      </div>
    </div>
  );
};

TextFieldMargins.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFieldMargins);
