import React, { Component } from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { bindActionCreators, compose } from "redux";
import ToolsActions from "../../store/ducks/tools";
import IconClose from "./img/Icon-Close.svg";
import IconPlusCircle from "./img/Icon-Plus-Circle.svg";
import Modal from "../Modal";
import Error from "../../styles/Error";
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
                                    <a href="https://www.dasdsa.com">||</a>
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

                            {!!errors.title && <Error>{errors.title}</Error>}

                            <span>Tool Link</span>

                            <input
                                name="link"
                                onChange={handleChange}
                                value={values.link}
                            />

                            {!!errors.link && <Error>{errors.link}</Error>}

                            <span>Tool Description</span>

                            <textarea
                                name="description"
                                onChange={handleChange}
                                value={values.description}
                                rows="4"
                                cols="50"
                            />

                            {!!errors.description && (
                                <Error>{errors.description}</Error>
                            )}

                            <span>Tags</span>

                            <input
                                name="tag"
                                onChange={handleChange}
                                value={values.tag}
                            />

                            {!!errors.tag && <Error>{errors.tag}</Error>}

                            <div>
                                <Button size="big" type="submit">
                                    Salvar
                                </Button>

                                <Button
                                    size="big"
                                    color="grey"
                                    onClick={closeToolModal}
                                >
                                    Fechar
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
                .min(1, "Título muito curto")
                .max(20, "Título muito comprido"),
            link: Yup.string().url("URL inválida"),
            description: Yup.string()
                .required("Campo obrigatório")
                .min(20, "Descrição muito curto")
                .max(600, "Descrição muito comprida"),
            tag: Yup.string()
                .required("Campo obrigatório")
                .min(2, "Tag muito curta")
                .max(100, "Tag muito comprida")
        }),

        handleSubmit: (values, { props, resetForm }) => {
            const { title, link, description, tag } = values;

            const tags = tag.split(",").map(function(item) {
                return item.trim();
            });

            const { createToolRequest } = props;

            createToolRequest(title, link, description, tags);

            resetForm();
        }
    })
)(ListTools);
