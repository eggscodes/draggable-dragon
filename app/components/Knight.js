var React = require("react");
var ReactDND = require("react-dnd");
var ItemTypes = require("../ItemTypes").ItemTypes;

var knightSource = {
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

//Knight is now a dragon!
var Knight = React.createClass({
    render: function() {
        var connectDragSource = this.props.connectDragSource;
        var isDragging = this.props.isDragging;

        return connectDragSource(
            <div style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                cursor: "move"
            }}>
                <p>&#128009;</p>
            </div>
        )
    }
});

module.exports = ReactDND.DragSource(ItemTypes.KNIGHT, knightSource, collect) (Knight);