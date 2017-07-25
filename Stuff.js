import React, { Component } from "react";
// import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import ItemTypes from "./Constants";

console.log(ItemTypes);

const itemSource = {
    beginDrag: function(props) {
        return {
            name: props.name
        }
    },
    endDrag: function(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if(dropResult) {
            window.alert(`You dropped ${item.name} into ${dropResult.name}`);
        }
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
                width: "50px",
                display: "inline-block",
                opacity: isDragging ? .5 : 1
             }}>
                <p>{name}</p>
            </div>
        );
    }
};

// Stuff.propTypes = propTypes;

module.exports = DragSource(ItemTypes.STUFF, itemSource, collect)(Stuff);
