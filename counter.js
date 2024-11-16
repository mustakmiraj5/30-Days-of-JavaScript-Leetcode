/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    return function() {
        return n++;
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

/**
 * Clousers vs classes
 * One key difference is that closures allow for true encapsulation.
 * In the class example, there is nothing stopping you from writing addTo2.a = 3;
 * and breaking it's expected behavior.
 * However, in the closure example, it is theoretically impossible to access a.
 * Note that as of 2022, true encapsulation is achievable in classes with # prefix syntax.
 * 
 * Another difference is how the functions are stored in memory.
 * If you create many instances of a class,
 * each instance stores a single reference to the prototype object where all the methods are stored.
 * Whereas for closures, all the "methods" are generated and a "copy" of each is stored in memory each time the outer function is called.
 * For this reason, classes can be more efficient, particularly in the case where there are many methods.
 */