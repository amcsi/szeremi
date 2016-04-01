const Map = require('immutable').Map;

/**
 * Merge function that uses ImmutableJS's deepMerge, but in the case of lists,
 * completely overriding them.
 *
 * @param {Map} firstObj
 * @param restObjs
 */
function merge(firstObj) {
  const restObjs = Array.prototype.slice.call(arguments, 1);
  function withCallback(prev, next) {
    if (Map.isMap(prev) && Map.isMap(next)) {
      return merge(prev, next);
    }
    return next;
  }
  if (!firstObj || typeof firstObj !== 'object') {
    throw Error('first argument must be an object');
  }
  if (!Map.isMap(firstObj)) {
    throw Error('first argument must be a Map');
  }
  return firstObj.mergeDeepWith(withCallback, ...restObjs);
}

module.exports = merge;
