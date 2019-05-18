import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import api from '~/services/api';

import ToolsActions from '~/store/ducks/tools';

import ModalButton from '~/styles/Button';

import Modal from '../Modal';
import IconPlusCircle from './img/Icon-Plus-Circle.svg';
import {
  Container, ToolSection, ToolHeader, Header, Tags, Search,
} from './styles';

class ListTools extends Component {
  static propTypes = {
    getToolRequest: PropTypes.func.isRequired,
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

  componentDidMount() {
    localStorage.clear();
    const { getToolRequest } = this.props;
    getToolRequest();
  }

  /* onChangeFilter = (e) => {
    this.setState({ search: e.target.value });
  }; */

  deleteTool = (e) => {
    const { deleteToolRequest } = this.props;
    const id = e.target.value;
    deleteToolRequest(id);
  };

  editTool = async (e) => {
    const id = e.target.value;
    const response = await api.get(`tools/${id}`);
    localStorage.setItem('@VUTTR:id', response.data.id);
    localStorage.setItem('@VUTTR:title', response.data.title);
    localStorage.setItem('@VUTTR:link', response.data.link);
    localStorage.setItem('@VUTTR:description', response.data.description);
    localStorage.setItem('@VUTTR:tags', response.data.tags);
    const { openToolModal } = this.props;
    openToolModal();
  };

  render() {
    const { tools, openToolModal } = this.props;

    /* const filterTool = tools.data.filter(
      tool => tool.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
        || tool.description.toLowerCase().indexOf(search.toLowerCase()) !== -1,
    ); */

    return (
      <Container>
        <Header>
          <Search>
            <input type="text" placeholder="Procurar ferramenta" onChange={this.onChangeFilter} />

            <div>
              <input type="checkbox" onChange={this.onChangeTag} />
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
                  <button type="button" value={tool.id} onClick={this.editTool}>
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

        {tools.toolModalOpen && <Modal />}
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
