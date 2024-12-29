import supertest from 'supertest';
import specific from '../CalorieCalculator/api/routes/specific'
const request = supertest(specific);


describe("POST", "/specific/:amount", () =>{
    describe("When a valid amount is provided", ()=>{
        it("should respond with status 200 and return JSON data", async ()=>{
        const requestBody = {
            "query":"cheeseburger"
        };
        const amount = 2;
        const response = await request.post(`/specific/${amount}`).send(requestBody);
        expect(response.status).toBe(200);
        expect(response.type).toMatch(/json/);
        });
    });
});

Test("Specific - When a valid amount is provided")