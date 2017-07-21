var React = require("react");
var ReactDND = require("react-dnd");
var HTML5Backend = require("react-dnd-html5-backend");

var Square = require("./Square");
var Knight = require("./Knight");
var Game= require("./Game");

var Board = React.createClass({
    setDefaultProps: {
        knightPosition: []
    },
    handleSquareClick: function(toX, toY) {
        if (Game.canMoveKnight(toX, toY)) {
            Game.moveKnight(toX, toY);
        }
    },
    renderSquare: function(i) {
        var x = i % 8;
        var y = Math.floor(i / 8);
        var black = (x + y) % 2 === 1;

        var knightX = this.props.knightPosition[0];
        var knightY = this.props.knightPosition[1];
        var piece = (x === knightX && y === knightY) ? <Knight /> : null;

        return (
                <div key={i}
                    style={{ width: "50px" , height: "50px"}}
                    onClick={this.handleSquareClick.bind(this, x, y)}
                >
                    <Square black={black}>
                        {piece}
                    </Square>
                </div>
        );
    },
    render: function() {
        var squares = [];
        for (let i = 0; i < 64; i++) {
            squares.push(this.renderSquare(i));
        }
        return (
            <div style={{
                width: "400px",
                height: "400px",
                display: "flex",
                flexWrap: "wrap"
            }}>
                {squares}
            </div>
        );
    }
});

module.exports = ReactDND.DragDropContext(HTML5Backend)(Board);