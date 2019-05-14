import React, { Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
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
        const {
            handleChange,
            values,
            handleSubmit,
            errors,
            tools,
            openToolModal,
            closeToolModal
        } = this.props;
        const { search } = this.state;

        /*const filterTool = tools.data.filter(tool => {
            return (
                tool.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
                tool.description.toLowerCase().indexOf(search.toLowerCase()) !==
                    -1
            );
        });*/

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

                {tools.data.length ? (
                    tools.data.map(tool => (
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

                        <form onSubmit={handleSubmit}>
                            <span>Tool Name</span>

                            <input
                                name="title"
                                onChange={handleChange}
                                value={values.title}
                                autoFocus
                            />

                            {!!errors.title && <p>{errors.title}</p>}

                            <span>Tool Link</span>

                            <input
                                name="link"
                                onChange={handleChange}
                                value={values.link}
                            />

                            <span>Tool Description</span>

                            <textarea
                                name="description"
                                onChange={handleChange}
                                value={values.description}
                                rows="4"
                                cols="50"
                            />

                            <span>Tags</span>

                            <input
                                name="tag"
                                onChange={handleChange}
                                value={values.tag}
                            />

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

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    withFormik({
        mapPropsToValues: () => ({
            title: "",
            link: "",
            description: "",
            tags: [""]
        }),

        validateOnChange: true,
        validateOnBlur: false,

        validationSchema: Yup.object().shape({
            title: Yup.string()
                .required("Campo obrigatório")
                .min(1, "Nome muito curto")
                .max(20, "Nome muito grande")
        }),

        handleSubmit: (values, { props, resetForm }) => {
            const { title, link, description, tag } = values;
            const tags = [tag];
            const { createToolRequest } = props;

            createToolRequest(title, link, description, tags);

            resetForm();
        }
    })
)(ListTools);
