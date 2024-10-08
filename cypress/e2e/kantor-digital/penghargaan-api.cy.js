describe('Memastikan api muncul dengan baik', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    beforeEach(() => {
        cy.visit('https://kotayogya.baznas.go.id/');
    })

    it('2023 image api test', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible');

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Penghargaan
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(3) > a').click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/penghargaan')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("penghargaan")

        const apiUrl = 'https://simba.baznas.go.id/attachments/penghargaan/https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/penghargaan/230-bg3.jpg';
        cy.request('GET', apiUrl).then((response) => {
            expect(response.status).to.eq(200);
        })
    })

    it('2022 image api test', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible')

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Penghargaan
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(3) > a').click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/penghargaan')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("penghargaan")

        const apiUrl = 'https://simba.baznas.go.id/attachments/penghargaan/https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/penghargaan/412-WhatsApp%20Image%202022-07-05%20at%209.45.19%20PM.jpeg';
        cy.request('GET', apiUrl).then((response) => {
            expect(response.status).to.eq(200);
        })
    })

    it('2021 image api test', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible')

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Penghargaan
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(3) > a').click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/penghargaan')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("penghargaan")

        const apiUrl = 'https://simba.baznas.go.id/attachments/penghargaan/https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/penghargaan/575-WhatsApp%20Image%202022-07-05%20at%209.45.19%20PM%20(1).jpeg';
        cy.request('GET', apiUrl).then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})