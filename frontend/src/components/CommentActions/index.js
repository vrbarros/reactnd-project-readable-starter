import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

class CommentActions extends React.Component {
  render() {
    const { classes, editVisible, deleteVisible, handleDelete } = this.props;

    return (
      <center>
        {editVisible && (
          <Button color="primary" className={classes.button}>
            Edit
          </Button>
        )}
        {deleteVisible && (
          <Button
            color="secondary"
            className={classes.button}
            onClick={handleDelete}
          >
            Delete
          </Button>
        )}
      </center>
    );
  }
}

CommentActions.propTypes = {
  classes: PropTypes.object.isRequired,
  editVisible: PropTypes.bool.isRequired,
  deleteVisible: PropTypes.bool.isRequired
};

export default withStyles(styles)(CommentActions);