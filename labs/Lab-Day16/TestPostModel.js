// TestPostModel.js
const RequestHandler = require("./RequestHandler");

// Execution
executeLab16();

// Function Declaration
async function executeLab16() {
    // Given params
    const userId = 1;
    const postId = 10;

    // Create RequestHandler object
    let RequestHandlerTest = new RequestHandler();

    const post = await RequestHandlerTest.printTargetPost(postId);
    const allPost = await RequestHandlerTest.printAllPosts(userId);

    console.log(post);
    console.log(allPost);
    // const allPost = new allPost()
}