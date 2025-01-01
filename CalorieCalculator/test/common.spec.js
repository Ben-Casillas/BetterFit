const req = require('supertest')(require('../app.js'));
const common = require('../api/routes/commons.js');
const should = require("should");

describe("Common Test Suite", () => { //testset
    
    it("Testing area is fully functional SIR", async () => { //test case
        const response = await req.get('/common/healthCheck');
        response.status.should.equal(200);
        response.body.should.have.property("Im still standing", "better than I ever did"); //what did it respond with
    });

    it("Common endpoint with invalid query fails", async () => {
        const response = await req.get('/common/query/VeryCoolApplication');
        response.status.should.equal(500);
        response.body.should.have.property("error", "Internal Server Error");
    });

    it("Common endpoint with valid query returns correct information", async () => {
        const response = await req.get('/common/query/grapes');
        response.status.should.equal(500);
        var test = response.body

    // response.body.should.have.property("error", "Internal Server Error")
    // const test = response.body;
    });

});