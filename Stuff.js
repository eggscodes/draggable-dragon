import React, { Component } from "react";
// import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import ItemTypes from "./Constants";

console.log(ItemTypes);

const itemSource = {
    beginDrag: function(props) {
        return {}
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
};
// const propTypes = {
//     name: PropTypes.string.isRequired,
//     isDragging: PropTypes.bool.isRequired,
//     connectDragSource: PropTypes.func.isRequired
// };

class Stuff extends Component {

    render() {
        const { name, isDragging, connectDragSource } = this.props;
        console.log(this.props);
        return connectDragSource(
            <div style = {{ 
                border: "1px solid green",
                opacity: isDragging ? .5 : 1
             }}>
                <p>&#128009;</p>
            </div>
        );
    }
};

// Stuff.propTypes = propTypes;

module.exports = DragSource(ItemTypes.STUFF, itemSource, collect)(Stuff);
