import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ToolsActions from "../../store/ducks/tools";
import Button from "../Button";
import Search from "../Search";
import IconClose from "./img/Icon-Close.svg";
import { Container, ToolSection, ToolHeader, Header, Tags } from "./styles";

class ListTools extends Component {
    componentDidMount() {
        const { getToolRequest } = this.props;
        getToolRequest();
    }

    render() {
        const { tools } = this.props;
        return (
            <Container>
                <Header>
                    <input
                        type="text"
                        name="text"
                        placeholder="Procurar ferramenta"
                    />
                    <Button />
                </Header>

                {tools.data.length ? (
                    tools.data.map(tool => (
                        <ToolSection key={tool.id}>
                            <ToolHeader>
                                <a href={tool.link} target="_blank">
                                    <h1> {tool.title}</h1>
                                </a>
                                <img src={IconClose} alt="Remover" />
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
                    <h2 align="center">"Não há nada aqui!</h2>
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
