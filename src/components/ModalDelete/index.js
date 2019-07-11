import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToolsActions from '../../store/ducks/tools';
import ModalButton from '../../styles/Button';
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
        <Content>
          <h1>Remove tool</h1>
          <p>Are you sure you want to remove the tool?</p>
          <div className="button">
            <ModalButton type="button" size="big" onClick={this.deleteTool}>
              Yes, remove
            </ModalButton>

            <ModalButton type="button" size="big" color="grey" onClick={this.closeRemove}>
              Cancel
            </ModalButton>
          </div>
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
