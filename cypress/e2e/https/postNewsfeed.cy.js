describe('post api newsfeed', () => {
    const reponseBody = {
        text :Math.random.toString(5).substring(3)+"this is the workwise testing "
    }
    it('this is sucessfull post response', () => {
        

    cy.request({
        method:'POST',
        failOnStatusCode:false,
        url:'https://workw.com/workwapi/api/Feed/AddFeed',
        body:{
            title:reponseBody.text,
            id: '00000000-0000-0000-0000-000000000000',
            parentId: '00000000-0000-0000-0000-000000000000',
            referenceType: '1',
            referenceId: '00000000-0000-0000-0000-000000000000',
            privacyId: '1',
            type: '1',
            isImportant: false
        }
    }).then((response)=>{
        expect(response.status).calledImmediatelyBefore(200);
        expect(response.body.data.title).to.eq(reponseBody.text)        
    })
});
});