function memoize(fn) {
    const m = new Map();

    return function (...args) {
        if (m.has(JSON.stringify(args))) {
            return m.get(JSON.stringify(args));
        } else {
            const result = fn.apply(this, args);
            m.set(JSON.stringify(args), result);
            return result;
        }
    }
}
