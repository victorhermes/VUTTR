import { withFormik } from 'formik';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as Yup from 'yup';

import ToolsActions from '~/store/ducks/tools';

import ModalButton from '~/styles/Button';

import Erro from '~/styles/Error';

import { Container, Content } from './styles';

class ModalAdd extends Component {
  static propTypes = {
    closeToolModal: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    values: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
      tag: PropTypes.string,
    }).isRequired,
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
    errors: PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      description: PropTypes.string,
      tag: PropTypes.string,
    }).isRequired,
  };

  closeTool = () => {
    const { closeToolModal } = this.props;
    closeToolModal();
  }

  render() {
    const {
      handleChange, values, handleSubmit, errors,
    } = this.props;

    return (
      <Container>
        <Content size="big">
          <h1>Add tool</h1>
          <form onSubmit={handleSubmit}>
            <span>Tool Name</span>

            <input name="title" onChange={handleChange} value={values.title} />

            {!!errors.title && <Erro>{errors.title}</Erro>}

            <span>Tool Link</span>

            <input name="link" onChange={handleChange} value={values.link} />

            {!!errors.link && <Erro>{errors.link}</Erro>}

            <span>Tool Description</span>

            <textarea
              name="description"
              onChange={handleChange}
              value={values.description}
              rows="2"
            />

            {!!errors.description && <Erro>{errors.description}</Erro>}

            <span>Tags</span>

            <input name="tags" onChange={handleChange} value={values.tags} />

            {!!errors.tags && <Erro>{errors.tags}</Erro>}

            <div>
              <ModalButton size="big" type="submit">
                Salvar
              </ModalButton>

              <ModalButton type="button" size="big" color="grey" onClick={this.closeTool}>
                Fechar
              </ModalButton>
            </div>
          </form>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tools: state.tools,
});

const mapDispatchToProps = dispatch => bindActionCreators(ToolsActions, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withFormik({
    mapPropsToValues: () => ({
      title: '',
      link: 'https://',
      description: '',
      tags: [''],
    }),

    validateOnChange: true,
    validateOnBlur: false,

    validationSchema: Yup.object().shape({
      title: Yup.string()
        .required('Campo obrigatório')
        .min(1, 'Título muito curto')
        .max(20, 'Título muito comprido'),
      link: Yup.string()
        .required('Campo obrigatório')
        .url('URL inválida'),
      description: Yup.string()
        .required('Campo obrigatório')
        .min(20, 'Descrição muito curto')
        .max(600, 'Descrição muito comprida'),
      tags: Yup.string()
        .required('Campo obrigatório')
        .min(2, 'Tag muito curta')
        .max(100, 'Tag muito comprida'),
    }),

    handleSubmit: (values, { props, resetForm }) => {
      const {
        title, link, description, tags,
      } = values;
      const { createToolRequest } = props;
      const tgs = tags.split(',').map(item => item.trim());
      createToolRequest(title, link, description, tgs);

      resetForm();
    },
  }),
)(ModalAdd);
