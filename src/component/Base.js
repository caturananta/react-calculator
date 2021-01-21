import React from "react";
import PropTypes from "prop-types";

import "../styles/Base.css";

export default class Base extends React.Component {
    static propTypes = {
        value: PropTypes.string,
    };

    render() {
        return (
            <div className="base">
                <div>{this.props.value}</div>
            </div>
        );
    }
}
