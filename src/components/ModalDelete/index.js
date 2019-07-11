import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToolsActions from '../../store/ducks/tools';
import { Container, Content } from './styles';

class ModalDelete extends Component {
  static propTypes = {
    closeRemoveToolModal: PropTypes.func.isRequired,
    deleteToolRequest: PropTypes.func.isRequired,
    idTool: PropTypes.string.isRequired,
  };

  closeRemove = () => {
    const { closeRemoveToolModal } = this.props;
    closeRemoveToolModal();
  };

  deleteTool = () => {
    const { deleteToolRequest, closeRemoveToolModal } = this.props;
    const { idTool } = this.props;
    deleteToolRequest(idTool);
    closeRemoveToolModal();
  };

  render() {
    return (
      <Container>
        <Content size="big">
          <h1>Delete</h1>
          <button type="button" onClick={this.closeRemove}>
            Cancel
          </button>
          <button type="button" onClick={this.deleteTool}>
            Yes, remove
          </button>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools,
});

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalDelete);
