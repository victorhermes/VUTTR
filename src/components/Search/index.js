import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ToolsActions from "../../store/ducks/tools";
import { Container } from "./styles";

class Search extends Component {
    state = {
        text: ""
    };

    handleInputChange = e => {
        this.setState({ text: e.target.value });
        const { text } = this.state;
        const { filterToolRequest } = this.props;

        filterToolRequest(text);
    };

    render() {
        const { text } = this.state;
        return (
            <Container>
                <input
                    type="text"
                    name="text"
                    placeholder="Procurar ferramenta"
                    onChange={this.handleInputChange}
                    value={text}
                />

                <div>
                    <input type="checkbox" />
                    <p>Procurar por tags?</p>
                </div>
            </Container>
        );
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(ToolsActions, dispatch);

export default connect(
    null,
    mapDispatchToProps
)(Search);
