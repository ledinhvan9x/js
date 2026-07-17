function myPromiseAny(promises) {

    return new Promise((resolve, reject) => {

        if (promises.length === 0) {
            reject(new AggregateError([]));
            return;
        }

        const errors = [];
        let rejectedCount = 0;

        promises.forEach((promise, index) => {

            Promise.resolve(promise)
                .then(resolve)
                .catch(error => {

                    errors[index] = error;

                    rejectedCount++;

                    if (rejectedCount === promises.length) {
                        reject(new AggregateError(errors));
                    }

                });

        });

    });

}
