var knightPosition = [1, 7];
var observer = null;

function emitChange() {
    observer(knightPosition);
};

exports.observe = function (o) {
    if(observer) {
        throw new Error("multiple observers not implemented");
    }

    observer = o;
    emitChange();
};

exports.moveKnight = function (toX, toY) {
    knightPosition = [toX, toY];
    emitChange();
};

exports.canMoveKnight = function(toX, toY) {
    var x = knightPosition[0];
    var y = knightPosition[1];
    var dx = toX -x;
    var dy = toY - y;

    return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
}
