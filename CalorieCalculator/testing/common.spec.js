const supertest = require('supertest');
const common = require('../api/routes/commons.js');
const request = supertest(common);


const sum = require("./sum.js");
// var assert = require('assert');
var chai = require("chai");
var expect = chai.expect;
//THIS IS MOCHA DING DO

describe('Test', () => { //test suite, title of test suite, ( collection fo realted test cases)
    
    it("Test the sum method", () => {
        expect(sum(1, 2)).to.be.equal(3);
    });
    // describe() //individual test cases
});

describe("Common Test Suite", () => {
    
    it("Responds to the API successfully", async () => {
        const response = await request.post('/common/query').send();
        expect(response.status).to.be.equal(200)
    });
});








//-----------

// describe("POST", "/specific/:amount", () =>{
//     describe("When a valid amount is provided", ()=>{
//         it("should respond with status 200 and return JSON data", async ()=>{
//         const requestBody = {
//             "query":"cheeseburger"
//         };
//         const amount = 2;
//         const response = await request.post(`/specific/${amount}`).send(requestBody);
//         expect(response.status).toBe(200);
//         expect(response.type).toMatch(/json/);
//         });
//     });
// });

// Test("Specific - When a valid amount is provided")