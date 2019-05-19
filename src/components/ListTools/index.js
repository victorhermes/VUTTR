import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToolsActions from '~/store/ducks/tools';

import ModalButton from '~/styles/Button';

import ModalAdd from '../ModalAdd';
import IconPlusCircle from './img/Icon-Plus-Circle.svg';
import {
  Container, ToolSection, ToolHeader, Header, Tags, Search,
} from './styles';

class ListTools extends Component {
  static propTypes = {
    getToolRequest: PropTypes.func.isRequired,
    getAllToolRequest: PropTypes.func.isRequired,
    getByTagToolRequest: PropTypes.func.isRequired,
    deleteToolRequest: PropTypes.func.isRequired,
    openToolModal: PropTypes.func.isRequired,
    tools: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
          link: PropTypes.string,
          description: PropTypes.string,
          tags: PropTypes.array.isRequired,
        }),
      ),
    }).isRequired,
  };

  state = {
    checkTag: false,
  }

  componentDidMount() {
    const { getToolRequest } = this.props;
    getToolRequest();
  }

  deleteTool = (e) => {
    const { deleteToolRequest } = this.props;
    const id = e.target.value;
    deleteToolRequest(id);
  };

  filterTools = (e) => {
    const { getAllToolRequest } = this.props;
    const word = e.target.value;
    getAllToolRequest(word);
  }

  filterByTagTools = (e) => {
    const { getByTagToolRequest } = this.props;
    const word = e.target.value;
    getByTagToolRequest(word);
  }

  getCheck = (e) => {
    const checkTag = e.target.checked;
    this.setState({ checkTag });
  }

  render() {
    const { tools, openToolModal } = this.props;
    const { checkTag } = this.state;

    return (
      <Container>
        <Header>
          <Search>
            <input type="text" placeholder="Procurar ferramenta" onChange={!checkTag ? this.filterTools : this.filterByTagTools} />

            <div>
              <input type="checkbox" onClick={this.getCheck} />
              <p>Procurar por tags?</p>
            </div>
          </Search>
          <ModalButton onClick={openToolModal}>
            <img src={IconPlusCircle} alt="Adicionar item" />
          </ModalButton>
        </Header>

        {tools.data.length ? (
          tools.data.map(tool => (
            <ToolSection key={tool.id}>
              <ToolHeader>
                <a href={tool.link}>
                  <h1> {tool.title}</h1>
                </a>
                <div>
                  <button type="button" value={tool.id} onClick={() => {}}>
                    EDITAR
                  </button>
                  <button type="button" value={tool.id} onClick={this.deleteTool}>
                    X
                  </button>
                </div>
              </ToolHeader>

              <p>{tool.description}</p>

              <Tags>
                {tool.tags.map(tag => (
                  <span key={Math.random() + tag}>#{tag}</span>
                ))}
              </Tags>
            </ToolSection>
          ))
        ) : (
          <h2 align="center">Ferramenta não existe!</h2>
        )}

        {tools.toolModalOpen && <ModalAdd />}
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
)(ListTools);
