// 1. Создать Promise, который в зависимости от переменной будет делать resolve или rejected.

const isSuccess = true;

const myPromise = new Promise((resolve, reject) => {
    if (isSuccess) {
        resolve("Операция выполнена успешно!");
    } else {
        reject("Ошибка: операция не выполнена!");
    }
});

// 2. Создать Promise, который будет отлавливать rejected в виде ошибки и выводить ошибку в catch.
myPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });

// 3. Создать Promise с цепочечным выполнение .then, а после добавить обработчик ошибок catch.
const myChainedPromise = new Promise((resolve, reject) => {
    resolve("Первый результат");
});

myChainedPromise
    .then(result => {
        console.log(result);
        return "Второй результат";
    })
    .then(result => {
        console.log(result);
        throw new Error("Ошибка в третьем шаге");
    })
    .catch(error => {
        console.error(error.message);
    });

// 4. Создать Promise с цепочечным выполнение .then, в конце два блока catch и после них блок finally. Сколько выполнилось catch?
const myComplexPromise = new Promise((resolve, reject) => {
    resolve("Успешное выполнение");
});

myComplexPromise
    .then(result => {
        console.log(result);
        throw new Error("Ошибка в первом catch");
    })
    .catch(error => {
        console.error("Первый catch:", error.message);
    })
    .then(() => {
        throw new Error("Ошибка во втором catch");
    })
    .catch(error => {
        console.error("Второй catch:", error.message);
    })
    .finally(() => {
        console.log("Выполняется блок finally");
    });

// 5. Можно ли вызвать два разных catch для одного Promise?
const myTwoCatchPromise = new Promise((resolve, reject) => {
    reject("Ошибка при создании промиса");
});

myTwoCatchPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => { // Первый catch
        console.error("Первый catch:", error);
    });

myTwoCatchPromise
    .then(result => {
        console.log(result);
    })
    .catch(error => { // Второй catch
        console.error("Второй catch:", error);
    });
