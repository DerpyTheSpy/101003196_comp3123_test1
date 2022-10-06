const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const lowerCaseWords = (arr) => {
    return new Promise((resolve, reject) => {
        resolve(arr.filter(item => typeof item === 'string').map(item => item.toLowerCase()));
    });
}
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));

