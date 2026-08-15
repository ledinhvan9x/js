function deepClone(value) {
    if (value === null || typeof value !== 'object') return value;

    const clone = Array.isArray(obj) ? [] : {};

    for (const key in obj) {
      clone[key] = deepClone(obj[key]);
    }

    return clone;
}
