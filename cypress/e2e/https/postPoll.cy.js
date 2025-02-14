describe('post api test for the poll feature',()=>{
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
    const token= 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMzRmYzZiOC1mNzcxLTQ2N2MtOTY1Yi0wYWNkYTE3MzdjMjAiLCJuYW1lIjoiV29yayBUZXN0IiwiaW1hZ2UiOiJodHRwczovL3dvcmt3LmNvbS9SZXNvdXJjZXNcXGRkZmUyMDJmLTUyMWUtNDNlMC1iZjZiLTYxZDZmNzIxMjNmMVxcSW1hZ2VzXFwyODdhNGY4NC1iYjcyLTQ1YWMtOTk3MS05MmJmMDQ1M2U1ZTIuanBnIiwiZW1haWwiOiJ3b3Jrd2lzZXRlc3RpbmdAZ21haWwuY29tIiwiYnVzaW5lc3NJZCI6ImRkZmUyMDJmLTUyMWUtNDNlMC1iZjZiLTYxZDZmNzIxMjNmMSIsInZlciI6IkU4MzEyQzJGLTcxMjktNDBEMy1BODAwLTFCNTZDNUQ2QTI4MiIsImloIjoiWkxkOUc2WGZuTDByeFhGRXBuZEliRWRBT1p4OGh1dkdBZ0ZiRnduWTZoMD0iLCJpcyI6IldCWktiSUZVay81L2FTc0l5TVcxNXc9PSIsInBoIjoidmNxdVlsT0owcFlSV2ZMWlVLa1BkSFoycDFvSi9ZdStUMUNONkk4bTF0Zz0iLCJwcyI6Ik0yZkxpQWhZWTh4YXpMd2VRUndFdkE9PSIsImp0aSI6ImJhMWJkYTQyLTczNzktNDcwZS05NmQwLTAzNTI5NDhiMDA1NiIsIm5iZiI6MTczODIzNjY3NSwiZXhwIjoxNzM4NDA5NDc1fQ.GJbO_rKJGaxv4IQkN45Q-wIbqBIg3EmVzaXLHOLEQO-xaZhb3gxS4fQuKwfXDZkcsU8ilaRkjfHXeg6rTuFdnNZE0OL-ANAS1Uv57LJTkzMGdW8FNP7joyN8htjGP0FqXvlexZL-1QOnsTSKy59RONRPmyZexxczxu2fZCeBDYN4aADiP4nYSyi64PzLNEpTvsvgVsya7XeVny7cDOCFHHNWRdkOy1qPy_b43LLQolCHSr9UHGD7sJmrqgjN0Bg6tlSUUIoKXVzyavxZS86ad9larpKPNHasH52o0gU2WV2RTxpfYsyjDMOVlQAg_OwZaH5n4OZDdETFTZVKUhDdjA'
    cy.request({
        method:'POST',
        url:'https://workw.com/workwapi/api/Feed/AddFeed',
        failOnStatusCode:false,
        headers: {
            Authorization: `Bearer ${token}` // Attach the JWT token
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