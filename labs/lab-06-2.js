const readline = require('readline-sync')
let targetURL = "https://jsonplaceholder.typicode.com/posts"


// 9.2 Please using PROMISE and ASYNC/AWAIT to solve this
getPostResponseAsyncAwait();

async function getPostResponseAsyncAwait() {
    const inputUserId = Number(readline.question("Input user id (number): "));
    const inputPostId = Number(readline.question("input Post Id number: "));

    if (!Number.isInteger(inputUserId) || !Number.isInteger(inputPostId)) {
        console.log("error. please input integer number");
        return;
    }

    const postResponse = await getResponseByPostId(inputPostId)

    if (postResponse.userId !== inputUserId) {
        console.log("PostId and UserId not matches");
        return;
    }

    console.log(postResponse);

    console.log("=======================================");
    const postUserIdResponse = await getResponseListByUserId(inputUserId);
    console.log(`Print all posts for userId = ${inputUserId}`);
    console.log(postUserIdResponse);
    console.log("=======================================");
}


async function getResponseByPostId(postId) {
    let endPoint = `${targetURL}/${postId}`
    const response = await fetch(endPoint);
    return response.json();
}

async function getResponseListByUserId(userId) {
    let endPoint = `${targetURL}?userId=${userId}`
    const response = await fetch(endPoint);
    return response.json();
}