import React, { Component } from "react";
import { connect } from "react-redux";
import { createNote } from "../../store/actions/noteActions";
import { Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class CreateNote extends Component {
  state = {
    title: "",
    content: "",
    open: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handeSubmit = e => {
    e.preventDefault(); // prevents the page for reloading
    //console.log(this.state);
    this.props.createNote(this.state); // from here goes to mapDispatchToProps
    this.handleClose(); //redirect to dashboard
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div>
        <Button onClick={this.handleClickOpen}>Create new note</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Save</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Email Address"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="content"
              label="Note Content"
              type="text"
              fullWidth
              onChange={this.handleChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handeSubmit} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      // <div className="container">
      //   <form onSubmit={this.handeSubmit}>
      //     <h5 className="grey-text text-darken-3">Create new note</h5>
      //     <div className="input-field">
      //       <label htmlFor="title">Title</label>
      //       <input type="text" id="title" onChange={this.handleChange} />
      //     </div>
      //     <div className="input-field">
      //       <label htmlFor="content">Note Content</label>
      //       <textarea
      //         id="content"
      //         className="materialize-textarea"
      //         onChange={this.handleChange}
      //       />
      //     </div>
      //     <div className="input-field">
      //       <button className="btn pink lighten-1 z-depth-0">Create</button>
      //     </div>
      //   </form>
      // </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createNote: note => dispatch(createNote(note))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateNote);
