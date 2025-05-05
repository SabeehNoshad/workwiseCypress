



describe('verification of the post response of login api',{retries:3}, () => {
  it('api response with correct creditentials', () => {
    cy.request({
        method:'POST',
        url:'https://workw.com/authapi/api/login',
        body:{
            email:"sabeeh@miletap.com",
            password:"Naase1992@"
        }
    }).then((response)=>{
        expect(response.status).to.eq(200);
        expect(response.body.data.email).to.eq("sabeeh@miletap.com");
        expect(response.body.data.firstName).to.eq("Sabeeh");
     })
 });
    it('api response with incorrect email id', () => {
        const responseBody = {
            email:"asdas@asda.com",
            password:"sadasdasdas"
        }
        cy.request({
           method:"POST",
           url:"https://workw.com/authapi/api/login",
           failOnStatusCode: false,
           body: responseBody 
        }).then((response)=>{
            expect(response.status).to.eq(404);
            expect(response.body.message).to.eq("User not found")
            expect(response.body.responseCode).to.eq(1009);
        })
    });
    it('dynamically generated emailwit out @ incorrect creditentials', () => {
        const responseBody = {
            email:Math.random.toString(5).substring(1)+"gmail.com",
            password:"Abcd1234@"
        }
        cy.request({
            method:"POST",
            url:"https://www.workw.com/authapi/api/login",
            failOnStatusCode: false,
            body: responseBody
        }).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.body.message).to.eq('Invalid email address');
            expect(response.body.responseCode).to.eq(1008);
        })
    });
    it('dynamically generated email without com incorrect creditentials', () => {
        const responseBody={
            email:Math.random().toString(5).substring(1)+"@gmail",
            password:"sadasda"
        }
        cy.request({
            method:"POST",
            url:"https://www.workw.com/authapi/api/login",
            failOnStatusCode: false,
            body:responseBody
        }).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.body.message).to.eq("Invalid email address")
        })
    });
    it('Wrong password invalid creditentials', () => {
        const responseBody = {
            email:"sabeeh@miletap.com",
            password:"asdasdas"
        }
        cy.request({
            method:"POST",
            url:"https://www.workw.com/authapi/api/login",
            failOnStatusCode:false,
            body:responseBody
        }).then((response)=>{
            expect(response.status).to.eq(400);
            expect(response.body.message).to.eq("Invalid Password")
        })
    });
})
