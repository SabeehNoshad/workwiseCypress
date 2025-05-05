describe('post api test for the poll feature',()=>{
   
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
   
    const poll = {
        id: '6b149a4b-9d56-4ca5-bebc-48e649bcab18',
        parentId: '00000000-0000-0000-0000-000000000000',
        referenceType: '1',
        referenceId: '00000000-0000-0000-0000-000000000000',
        privacyId: '1',
        type: '2',
        title: Math.random().toString(5).substring(2)+"this is the poll description",
        pollOptions: [
            {
                id: '00000000-0000-0000-0000-000000000000',
                option: Math.random().toString(5).substring(2),
                attachment: {
                    id: '00000000-0000-0000-0000-000000000000'
                },
                type: '1'
            },
            {
                id: '00000000-0000-0000-0000-000000000000',
                option: Math.random().toString(5).substring(2),
                attachment: {
                    id: '00000000-0000-0000-0000-000000000000'
                },
                type: '1'
            }
        ],
        isImportant: false
    };
    
it('post with 2 option and descriptions', () => {
    cy.request({
        method:'POST',
        url:'https://workw.com/workwapi/api/Feed/AddFeed',
        failOnStatusCode:false,
        headers: {
            Authorization: `Bearer ${token}`
        },
        body:poll
    }).then((response)=>{
        expect(response.status).to.eq(200);
      //  expect(response.body.data.title).to.eq(poll.title);
        expect(response.body.message).to.eq('success');
        expect(response.body.responseCode).to.eq(1001);
    
    })
});

});