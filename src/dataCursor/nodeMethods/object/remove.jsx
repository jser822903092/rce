


// node ->
// ( (val, key) -> Bool shouldRemove ) ->
let remove = function(node, predicate) {
  let nodeVal = node.val();
  let removedKeys = Object.keys(nodeVal).reduce(function(preVal, key) {
    let val = nodeVal[key];
    let shouldRemove = predicate(val, key);
    if (shouldRemove) {
      return preVal.concat(key);
    } else {
      return preVal;
    }
  }, []);

  let diffs = removedKeys.map( function(key) {
    return {
      kind: 'D',
      path: [key]
    };
  });

  node._requestUpdate(diffs, node);
};

export default remove;