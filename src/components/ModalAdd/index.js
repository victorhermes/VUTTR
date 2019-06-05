import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreatableSelect from 'react-select/lib/Creatable';
import { bindActionCreators } from 'redux';
import * as Yup from 'yup';

import ToolsActions from '~/store/ducks/tools';

import ModalButton from '~/styles/Button';

/* import Erro from '~/styles/Error'; */

import { Container, Content } from './styles';

const components = {
  DropdownIndicator: null,
};

const dot = color => ({
  ':hover': {
    borderColor: color,
  },
});

const customStyles = {
  control: styles => ({
    ...styles,
    ...(dot('transparent')),
    backgroundColor: '#f5f4f6',
    border: '1px solid #ebeaed',
    cursor: 'edit',
    marginTop: '10px',
  }),
};

const createOption = label => ({
  label,
  value: label,
});

const schema = Yup.object().shape({
  title: Yup.string()
    .required('Campo obrigatório')
    .min(1, 'Título muito curto')
    .max(20, 'Título muito comprido'),
  link: Yup.string()
    .required('Campo obrigatório')
    .url('URL inválida'),
  description: Yup.string()
    .required('Campo obrigatório')
    .min(20, 'Descrição muito curta')
    .max(600, 'Descrição muito comprida'),
});

class ModalAdd extends Component {
  static propTypes = {
    closeAddToolModal: PropTypes.func.isRequired,
    createToolRequest: PropTypes.func.isRequired,
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
    inputValue: '',
    value: [],
  };

  componentDidMount() {
    const { id, editToolByIdRequest } = this.props;
    editToolByIdRequest(id);
  };

  handleChange = (value) => {
    this.setState({ value });
  };

  handleInputChange = (inputValue) => {
    this.setState({ inputValue });
  };

  handleKeyDown = (event) => {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        this.setState({
          inputValue: '',
          value: [...value, createOption(inputValue)],
        });
        localStorage.setItem('@tags', JSON.stringify([...value, createOption(inputValue)]));
        event.preventDefault();
        break;
      default:
    }
  };

  closeTool = () => {
    const { closeAddToolModal } = this.props;
    closeAddToolModal();
  };

  handleSubmit = ({
    title,
    link,
    description,
  }) => {
    const { createToolRequest } = this.props;
    const { value } = this.state;

    createToolRequest(title, link, description, value);
  };

  render() {
    const { inputValue, value } = this.state;
    const { tool } = this.props;

    const initialData = {
      title: tool.title || '',
      link: 'https://node.com',
      description: 'just a text to illustrate the input description.',
    };

    return (
      <Container>
        <Content size="big">
          <h1>Add tool</h1>
          <Form schema={schema} onSubmit={this.handleSubmit} initialData={initialData}>
            <span>Tool Name</span>
            <Input name="title" />

            <span>Tool Link</span>
            <Input name="link" />

            <span>Tool Description</span>
            <Input multiline name="description" />

            <span>Tags</span>
            <CreatableSelect
              styles={customStyles}
              components={components}
              inputValue={inputValue}
              isClearable
              isMulti
              menuIsOpen={false}
              onChange={this.handleChange}
              onInputChange={this.handleInputChange}
              onKeyDown={this.handleKeyDown}
              placeholder="Aperte enter para inserir a tag"
              value={value}
            />

            <div className="button">
              <ModalButton size="big" type="submit">
                Salvar
              </ModalButton>

              <ModalButton type="button" size="big" color="grey" onClick={this.closeTool}>
                Fechar
              </ModalButton>
            </div>
          </Form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools,
  tool: state.tools.tool,
});

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalAdd);
