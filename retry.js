async function retry(fn, retries) {
    for (let i = 0; i <= retries; i++) {
        try {
            return await fn();
        } catch (err) {
            if (i === retries) {
                throw err;
            }
        }
    }
}
