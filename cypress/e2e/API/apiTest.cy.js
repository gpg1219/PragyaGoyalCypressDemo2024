///<reference types ="Cypress" />
import testData from '../../fixtures/testDataAPI.json';

describe('API Tests', () => {
    it('TC:1 - Retrieve list of users', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users',
            qs: {
                page: 2,
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data').to.be.an('array');
            expect(response.body).to.not.be.null;
            expect(response.body.page).to.eq(testData.pageID);
        });
    });

    it('TC:2 - Get user by ID', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users/2',

        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            expect(response.body.data.id).to.eq(testData.getUserByID.id);
            expect(response.body.data.email).to.eq(testData.getUserByID.email);
        });
    });

    it('TC:3 - Create new User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users',
            failOnStatusCode: false,
            body: {
                name: testData.name,
                job: testData.job
            }
        }).then((response) => {
            expect(response.status).to.eq(201);

            expect(response.body).to.have.property('name').to.eq(testData.name);
            expect(response.body).to.have.property('job').to.eq(testData.job);

        });
    });

    it('TC:4 - Update existing User', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/27',
            failOnStatusCode: false,
            body: {
                name: testData.updateName,
                job: testData.updateJob
            }
        }).then((response) => {
            expect(response.status).to.eq(200);

            expect(response.body).to.have.property('name').to.eq(testData.updateName);
            expect(response.body).to.have.property('job').to.eq(testData.updateJob);

        });
    });

    it('TC:5 - Login Valid User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            failOnStatusCode: false,
            body: {
                email: testData.email,
                password: testData.password
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(testData.loginToken);
        });
    });

    it('TC:6 - Login Invalid User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            failOnStatusCode: false,
            body: {
                email: testData.email
            }
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property("error");
        });
    });

    it('TC:7 - Delete User', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/user/27',
            failOnStatusCode: false,
            body: {
                email: testData.email
            }
        }).then((response) => {
            expect(response.status).to.eq(204);
        });
    });
});



