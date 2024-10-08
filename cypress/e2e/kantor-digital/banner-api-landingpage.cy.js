describe('Landing Page Banner API Test', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(() => {
        cy.visit('https://kotayogya.baznas.go.id/');
    });

    it('should return status 200 for Banner 1', () => {
        cy.get('.active > .item > a > img').then(() => {
            const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/banner/282-zakat-online.jpg';

            cy.request({
                method: 'GET', url: apiUrl, failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.not.eq(404);
                expect(response.status).to.eq(200);
            });
        });
    });

    it('should return status 200 for Banner 2', () => {
        cy.get('.active > .item > a > img').then(() => {
            const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/banner/1727193601141716815_439-Header-c.jpg';

            cy.request({
                method: 'GET', url: apiUrl, failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.not.eq(404);
                expect(response.status).to.eq(200);
            });
        });
    });

    it('should return status 200 for Banner 3', () => {
        cy.get('.active > .item > a > img').then(() => {
            const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/banner/612-WhatsApp%20Image%202023-07-28%20at%2010.31.42.jpg';

            cy.request({
                method: 'GET', url: apiUrl, failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.not.eq(404);
                expect(response.status).to.eq(200);
            });
        });
    });

    it('should return status 200 for Banner 4', () => {
        cy.get('.active > .item > a > img').then(() => {
            const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/banner/172719381299618293_322-BG1.jpg';

            cy.request({
                method: 'GET', url: apiUrl, failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.not.eq(404);
                expect(response.status).to.eq(200);
            });
        });
    });

    it('should return status 200 for Banner 5', () => {
        cy.get('.active > .item > a > img').then(() => {
            const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/banner/1727193730685987230_501-Header-b.jpg';

            cy.request({
                method: 'GET', url: apiUrl, failOnStatusCode: false,
            }).then((response) => {
                expect(response.status).to.not.eq(404);
                expect(response.status).to.eq(200);
            });
        });
    });
});