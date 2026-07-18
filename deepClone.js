function deepClone(value) {
    if (value === null || typeof value !== 'object') return value;

    if (Array.isArray(value)) {
        const result = [];

        for (const item of value) {
            result.push(deepClone(item));
        }

        return result;
    }

    const result = {};

    for (const key in value) {
        result[key] = deepClone(value[key]);
    }

    return result;
}
