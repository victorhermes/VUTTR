import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ToolsActions from "../../store/ducks/tools";
import IconClose from "./img/Icon-Close.svg";
import IconPlusCircle from "./img/Icon-Plus-Circle.svg";
import Modal from "../Modal";
import {
    Container,
    ToolSection,
    ToolHeader,
    Header,
    Tags,
    Search,
    Button
} from "./styles";

class ListTools extends Component {
    state = {
        search: "",
        tag: null
    };

    componentDidMount() {
        const { getToolRequest } = this.props;
        getToolRequest();
    }

    onChangeFilter = e => {
        this.setState({ search: e.target.value });
    };

    onChangeTag = e => {
        this.setState({ tag: e.target.value });
    };

    render() {
        const { tools, openToolModal, closeToolModal } = this.props;
        const { search } = this.state;

        const filterTool = tools.data.filter(tool => {
            return (
                tool.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                tool.description.toLowerCase().indexOf(search.toLowerCase()) !==
                    -1
            );
        });

        return (
            <Container>
                <Header>
                    <Search>
                        <input
                            type="text"
                            placeholder="Procurar ferramenta"
                            onChange={this.onChangeFilter}
                        />

                        <div>
                            <input
                                type="checkbox"
                                onChange={this.onChangeTag}
                            />
                            <p>Procurar por tags?</p>
                        </div>
                    </Search>
                    <Button onClick={openToolModal}>
                        <img src={IconPlusCircle} alt="Adicionar item" />
                    </Button>
                </Header>

                {filterTool.length ? (
                    filterTool.map(tool => (
                        <ToolSection key={tool.id}>
                            <ToolHeader>
                                <a href={tool.link}>
                                    <h1> {tool.title}</h1>
                                </a>
                                <div>
                                    <a href="https://www.dasdsa.com">EDITAR</a>
                                    <img src={IconClose} alt="Remover" />
                                </div>
                            </ToolHeader>

                            <p>{tool.description}</p>

                            <Tags>
                                {tool.tags.map(tag => (
                                    <span key={tag}>#{tag}</span>
                                ))}
                            </Tags>
                        </ToolSection>
                    ))
                ) : (
                    <h2 align="center">Ferramenta não existe!</h2>
                )}

                {tools.toolModalOpen && (
                    <Modal size="big">
                        <h1>Add new tool</h1>

                        <form onSubmit={() => {}}>
                            <span>Tool Name</span>

                            <input type="text" />

                            <span>Tool Link</span>

                            <input type="text" />

                            <span>Tool Description</span>

                            <textarea rows="4" cols="50">
                                At w3schools.com you will learn how to make a
                                website. We offer free tutorials in all web
                                development technologies.
                            </textarea>

                            <div>
                                <Button
                                    size="big"
                                    color="grey"
                                    onClick={closeToolModal}
                                >
                                    Fechar
                                </Button>

                                <Button size="big" type="submit">
                                    Salvar
                                </Button>
                            </div>
                        </form>
                    </Modal>
                )}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    tools: state.tools
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(ToolsActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTools);
