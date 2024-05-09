const request = require("supertest")

const baseUrl = "https://kasir-api.belajarqa.com"

//Test Suite
describe("Authorization - Registration",() => {
    it('Positive - Success registration',() => {
        const response = request(baseUrl) //base url
            .post("/registration") //endpoint


            //Assertion chai
            expect(response.status).to.equal(200)

    })
})