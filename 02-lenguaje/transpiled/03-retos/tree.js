console.log("************** CHALLENGES - TRACES *********************");
var tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 5 },
                { value: 6 },
            ],
        },
        {
            value: 3,
            children: [
                { value: 7 },
                { value: 8 },
            ],
        },
        {
            value: 4,
        },
    ],
};
function printTree(node, depth) {
    if (depth === void 0) { depth = 0; }
    console.log("  ".repeat(depth) + node.value);
    if (node.children) {
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            printTree(child, depth + 1);
        }
    }
}
printTree(tree);
