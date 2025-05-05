import { trimmedText } from "../../helper/taskCreate";
describe('post api newsfeed', () => {
const test = trimmedText;
    let token;
    before(() => {
         
        cy.request({
            method: 'POST',
            url: 'https://www.workw.com/authapi/api/login', 
            body: {
                email: 'workwisetesting@gmail.com',
                password: 'Workwise123@'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            token = response.body.data.accessToken; 
        });
    });



    const responseBody = {
        text :Math.random.toString(5).substring(3)+"this is the workwise testing "
    }
    it('this is sucessfull post response', () => {
        

    cy.request({
        method:'POST',
        failOnStatusCode:false,
        url:'https://workw.com/workwapi/api/Feed/AddFeed',
        headers:{
            Authorization: `Bearer ${token}` 
        },
        body:{
            title:test,
            id: '00000000-0000-0000-0000-000000000000',
            parentId: '00000000-0000-0000-0000-000000000000',
            referenceType: '1',
            referenceId: '00000000-0000-0000-0000-000000000000',
            privacyId: '1',
            type: '1',
            isImportant: false
        }
    }).then((response)=>{
        expect(response.status).to.eq(200);
       
        expect(response.body.message).to.eq("success")
              
    })
});
});