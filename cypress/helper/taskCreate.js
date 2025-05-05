import { faker } from '@faker-js/faker';

const randomName = faker.person.firstName();
const randomDesc = faker.company.buzzPhrase();

 const randomText = faker.lorem.paragraphs(5); // Generate paragraphs of text
 const trimmedText = randomText.substring(0, 500); 

const randomSubject = faker.lorem.paragraph(5)
const trimSubject = randomSubject.substring(0,25)

const randomPin = Math.floor(100000 + Math.random() * 900000);

const randomEmail = faker.internet.email();
const randomDate =  faker.date.between({
    from: '2024-01-01',
        to: '2025-12-31',
    }).toISOString().split('T')[0] + "T00:00:00";

    const randomNumber = Math.floor(Math.random() * (999999999 - 10 + 1)) + 10;

    const randomDateSimple = faker.date.between({
        from: '2024-01-01',
        to: '2025-12-31',
    }).toISOString().split('T')[0]; 



const trimSubject50 = randomSubject.substring(0,50)
function taskCreate() {
    cy.get('#createTask_subject').type(randomName);
    cy.get('#createTask_description').type(randomDesc);

}
function taskCreatedescriptio() {
    cy.get('#createTask_subject').type(randomName);
    cy.get('#createTask_description').type(trimmedText);

}
function taskCreateSubject25(params) {
    cy.get('#createTask_subject').type(trimSubject);
    cy.get('#createTask_description').type(randomDesc);
}
function taskCreateSubject50(params) {
    cy.get('#createTask_subject').type(trimSubject50);
    cy.get('#createTask_description').type(randomDesc);
}
module.exports={taskCreate,taskCreatedescriptio,taskCreateSubject25,taskCreateSubject50,trimmedText,randomName,randomDate,randomDateSimple,randomPin,randomEmail,randomNumber}