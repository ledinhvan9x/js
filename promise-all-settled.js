function myPromiseAllSettled(promises) {
    return new Promise(resolve => {

        if (promises.length === 0) {
            resolve([]);
            return;
        }

        const results = [];
        let completed = 0;

        promises.forEach((promise, index) => {

            Promise.resolve(promise)
                .then(value => {

                    results[index] = {
                        status: "fulfilled",
                        value
                    };

                })
                .catch(reason => {

                    results[index] = {
                        status: "rejected",
                        reason
                    };

                })
                .finally(() => {

                    completed++;

                    if (completed === promises.length) {
                        resolve(results);
                    }

                });

        });

    });
}
