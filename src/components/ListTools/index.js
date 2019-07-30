import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import IconPlusCircle from '~/assets/images/Icon-Plus-Circle.svg';

import ToolsActions from '~/store/ducks/tools';

import ModalButton from '~/styles/Button';

import ModalAdd from '../ModalAdd';
import ModalDelete from '../ModalDelete';
import {
  Container, ToolSection, ToolHeader, Header, Tags, Search, Btn,
} from './styles';

export default function ListTools() {
  const dispatch = useDispatch();
  const tools = useSelector(state => state.tools);

  const [checkTag] = useState(false);
  const [id, setId] = useState(false);

  useEffect(() => {
    dispatch(ToolsActions.getToolRequest());
    // eslint-disable-next-line
  }, []);

  function deleteTool(e) {
    const toolId = e.target.value;
    setId(toolId);
    dispatch(ToolsActions.openRemoveToolModal());
  }

  function editTool(e) {
    const toolId = e.target.value;
    dispatch(ToolsActions.editToolByIdRequest(toolId));
    dispatch(ToolsActions.openAddToolModal());
  }

  function filterTools(e) {
    const word = e.target.value;
    dispatch(ToolsActions.getAllToolRequest(word));
  }

  function filterByTagTools(e) {
    const word = e.target.value;
    dispatch(ToolsActions.getByTagToolRequest(word));
  }

  /* function getCheck(e) {
    const checkingTag = e.target.checked;
    setTag(checkingTag);
  } */

  function openModalAdd() {
    dispatch(ToolsActions.openAddToolModal());
  }

  return (
    <Container>
      <Header>
        <Search>
          <input
            type="text"
            placeholder="Procurar ferramenta"
            onChange={!checkTag ? filterTools : filterByTagTools}
          />

          {/* <div>
            <input type="checkbox" onClick={getCheck} />
            <p>Procurar por tags?</p>
          </div> */}
        </Search>
        <ModalButton onClick={openModalAdd}>
          <img src={IconPlusCircle} alt="Adicionar item" />
        </ModalButton>
      </Header>

      {tools.data.length ? (
        tools.data.map(tool => (
          <ToolSection key={tool.id}>
            <ToolHeader>
              <a target="_blank" rel="noopener noreferrer" href={tool.link}>
                <h1> {tool.title}</h1>
              </a>
              <div>
                <Btn type="button" value={tool.id} onClick={editTool}>
                  ✎
                </Btn>

                <Btn type="button" value={tool.id} onClick={deleteTool}>
                  ✖
                </Btn>
              </div>
            </ToolHeader>

            <p>{tool.description}</p>

            <Tags>
              {tool.tags.map(tag => (
                <span key={Math.random() + tag.value}>#{tag.value}</span>
              ))}
            </Tags>
          </ToolSection>
        ))
      ) : (
        <h2 align="center">Ferramenta não existe!</h2>
      )}

      {tools.openAddToolModal && <ModalAdd />}
      {tools.openRemoveToolModal && <ModalDelete idTool={id} />}
    </Container>
  );
}

ListTools.defaultProps = {
  tools: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        link: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.array,
      }),
    ),
  }).isRequired,
};
