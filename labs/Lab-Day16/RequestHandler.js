const { getResponseByPostId, getResponseListByUserId } = require("../lab-06-2");
const Post = require("./Post");


// RequestHandler.js
class RequestHandler {

    async printTargetPost(requestPostId) {
        // Construct the returned data as a Post data model from class Post
        const response = await getResponseByPostId(requestPostId);
        const postResponse = new Post(response.userId, response.id, response.title, response.body);
        return postResponse;
    }

    async printAllPosts(requestUserId) {
        // Construct the returned data as a [ Post data model ] from class Post
        const responses = await getResponseListByUserId(requestUserId);
        return responses.map(function (response) {
            const { userId, id, title, body } = response;
            return new Post(userId, id, title, body);
        })
    }

}

module.exports = RequestHandler;