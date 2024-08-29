const { describe, it } = require("mocha");
const RequestHandler = require("./RequestHandler");
const { expect } = require("chai");

describe('GET | todo', async function () {
    it('should be abc 1', async () => {
        // Given params
        const userId = 1;

        // Create RequestHandler object
        let RequestHandlerTest = new RequestHandler();
        const post = await RequestHandlerTest.printAllPosts(userId);

        expect(post.length).equals(10);

    });
});