let chai = require("chai")
let chaitHttp = require('chai-http')
let server = "https://weatherapi-com.p.rapidapi.com"

chai.should();
chai.use(chaitHttp)

describe('Task API', () =>{
    describe("GET /sports.json?q=London", () =>{
        it('It should GET all the tasks', (done) =>{
            chai.request(server)
            .get("/sports.json?q=London")
            .set('X-RapidAPI-Host','weatherapi-com.p.rapidapi.com')
            .set('X-RapidAPI-Key','')
            .end((err, response) =>{
                response.should.have.status(200)
                response.body.should.have.property('football').with.lengthOf(10)
                response.body.should.have.property('cricket').with.lengthOf(1)
                response.body.should.have.property('golf').with.lengthOf(10)
            done()    
            })
        })
    })
})