const readline = require('readline-sync')
let targetURL = "https://jsonplaceholder.typicode.com/posts"

// 9.1 Please using PROMISE and thenable to solve this
getPostResponse();

// 9.2 Please using PROMISE and ASYNC/AWAIT to solve this
getPostResponseAsyncAwait();

async function getPostResponseAsyncAwait() {
    let inputUserId = Number(readline.question("Input user id (number): "));
    let inputPostId = Number(readline.question("input Post Id number: "));

    if (Number.isInteger(inputUserId) && Number.isInteger(inputPostId)) {
        const postResponse = await getResponseByPostId(inputPostId)
        if (postResponse.userId == inputUserId) {
            console.log(postResponse);
            const postUserIdResponse = await getResponseListByUserId(inputUserId);
            console.log("==========================");
            console.log(`Print all posts for userId = ${inputUserId}`);
            console.log(postUserIdResponse);
            return;
        };
    } else {
        console.log("error. please input integer number");
    };
}

function getPostResponse() {
    let inputUserId = Number(readline.question("Input user id (number): "));
    let inputPostId = Number(readline.question("input Post Id number: "));

    if (Number.isInteger(inputUserId) && Number.isInteger(inputPostId)) {
        getResponseByPostId(inputPostId)
            .then((postResponse) => {
                if (postResponse.userId == inputUserId) {
                    // Allow user to input an userId and postId, print out that post content
                    console.log(postResponse);
                    // Print all posts for that user
                    getResponseListByUserId(inputUserId)
                        .then(postUserIdResponse => {
                            console.log("==========================");
                            console.log(`Print all posts for userId = ${inputUserId}`);
                            console.log(postUserIdResponse);
                        });
                    return
                } else {
                    console.log("The entered postID is incorrect");
                }
            })
    } else {
        console.log("error. please input integer number");
    }
}

function getResponseByPostId(postId) {
    let endPoint = `${targetURL}/${postId}`
    return fetch(endPoint)
        .then((response) => { return response.json() });
}

function getResponseListByUserId(userId) {
    let endPoint = `${targetURL}?userId=${userId}`
    return fetch(endPoint)
        .then((response) => { return response.json() });
}