import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ToolsActions from "../../store/ducks/tools";
import Button from "../Button";
import IconClose from "./img/Icon-Close.svg";
import {
    Container,
    ToolSection,
    ToolHeader,
    Header,
    Tags,
    Search
} from "./styles";

class ListTools extends Component {
    state = {
        search: ""
    };

    componentDidMount() {
        const { getToolRequest } = this.props;
        getToolRequest();
    }

    onChangeFilter = e => {
        this.setState({ search: e.target.value });
    };

    render() {
        const { tools } = this.props;
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
                            name="text"
                            placeholder="Procurar ferramenta"
                            onChange={this.onChangeFilter}
                        />

                        <div>
                            <input type="checkbox" />
                            <p>Procurar por tags?</p>
                        </div>
                    </Search>
                    <Button />
                </Header>

                {filterTool.length ? (
                    filterTool.map(tool => (
                        <ToolSection key={tool.id}>
                            <ToolHeader>
                                <a href={tool.link}>
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
                    <h2 align="center">Ferramenta não existe!</h2>
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
