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

it.only('should validate the post is created and then deleted successfully', () => {
  let postId;
  const testTitle = "My Cypress Test Post";

  // Step 1: Create a post
  cy.request({
    method: 'POST',
    failOnStatusCode: false,
    url: 'https://workw.com/workwapi/api/Feed/AddFeed',
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: {
      title: testTitle,
      id: '00000000-0000-0000-0000-000000000000',
      parentId: '00000000-0000-0000-0000-000000000000',
      referenceType: '1',
      referenceId: '00000000-0000-0000-0000-000000000000',
      privacyId: '1',
      type: '1',
      isImportant: false
    }
  }).then((response) => {
    expect(response.status).to.eq(200);
    expect(response.body.message).to.eq("success");

    postId = response.body.data.id;
    cy.log("Created Post ID: " + postId);

    // Step 2: Delete the post using RemoveFeed endpoint
    cy.request({
      method: 'DELETE',
      failOnStatusCode: false,
      url: `https://workw.com/workwapi/api/Feed/RemoveFeed?id=${postId}`,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((deleteResponse) => {
      expect(deleteResponse.status).to.eq(200);
      expect(deleteResponse.body.message).to.eq("success");
      cy.log("Deleted Post ID: " + postId);
    });
  });
});

});

