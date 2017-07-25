import React, { Component } from "react";
import PropTypes from "prop-types";
import { DragSource } from "react-dnd";
import ItemTypes from "./Constants";

console.log(ItemTypes);

const itemSource = {
    beginDrag(props) {
        return {
            name: props.name
        };
    },

    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if (dropResult) {
            window.alert( `You dropped ${item.name} into ${dropResult.name}`);
        }
    }
};

@DragSource(ItemTypes.STUFF, itemSource, (connect, monitor) => ({
    connectDragSource: connect.DragSource(),
    isDragging: monitor.isDragging()
})
)
export default class Stuff extends Component {
    static propTypes = {
        connectDragSource: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired,
        name: PropTypes.string.isRequired
    };

    render() {
        const { name, isDragging, connectDragSource } = this.props;

        return connectDragSource(
            <div style = {{ 
                border: "1px solid black",
                backgroundColor: "white",
                padding: "5px",
                margin: "5px",
                cursor: "move",
                float: "left",
                zIndex: "10",
                opacity: isDragging ? .5 : 1
             }}>
                <p>{name}</p>
            </div>
        );
    }
};
