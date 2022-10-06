const delayedSuccess = () => {
    setTimeout(() => {
        let success = {"message": "delayed success!"}
        console.log(success);
    }, 500);
}

const delayedException = () => {
    setTimeout(() => {
        let error = {"error": "delayed exception!"}
        console.log(error);
    }, 500);
}

delayedSuccess();
delayedException();
