describe('Memastikan navigasi struktur berjalan berjalan dengan baik', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    beforeEach(() => {
        cy.visit('https://kotayogya.baznas.go.id/');
    })

    it('struktur - Drs. H. Syamsul Azhari', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible');

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Struktur BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
            .click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

        cy.get(':nth-child(1) > a > .card > .img-fluid').then(() => {
            const apiUrl = 'https://simba.baznas.go.id/https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=amilphotos/attachments/amilphotos/amil_13240_photo_20240308094517.jpg';
            cy.request('GET', apiUrl).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })

    it('struktur - Drs. Abd Samik', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible')

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Struktur BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
            .click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

        cy.get(':nth-child(2) > a > .card > .img-fluid').then(() => {
            const apiUrl = 'https://simba.baznas.go.id/https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=amilphotos/attachments/amilphotos/amil_11723_photo_20230807203507.jpg';
            cy.request('GET', apiUrl).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })

    it('struktur - Drs. Abd Samik', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible')

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Struktur BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
            .click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

        cy.get(':nth-child(3) > a > .card > .img-fluid').then(() => {
            const apiUrl = 'https://simba.baznas.go.id/https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=amilphotos/attachments/amilphotos/amil_9232_photo_20220718110644.jpg';
            cy.request('GET', apiUrl).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })

    it('struktur - Muhammad Iqbal, SE', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible')

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Struktur BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
            .click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

        cy.get(':nth-child(4) > a > .card > .img-fluid').then(() => {
            const apiUrl = 'https://simba.baznas.go.id/https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=amilphotos/attachments/amilphotos/amil_8269_photo_20220718122909.jpg';
            cy.request('GET', apiUrl).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })

    it('struktur - Dr. Adi Soeprapto, S.Sos., M.Si.', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible')

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Struktur BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
            .click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

        cy.get(':nth-child(5) > a > .card > .img-fluid').then(() => {
            const apiUrl = 'https://simba.baznas.go.id/https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=amilphotos/attachments/amilphotos/amil_5535_photo_20220718105816.jpg';
            cy.request('GET', apiUrl).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })

    it('detail - Drs. H. Syamsul Azhari', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible');

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Struktur BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
            .click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

        cy.get('.pb-5 > :nth-child(1) > :nth-child(1) > .row > :nth-child(1)').click()
        cy.get('center > .img-fluid').then(() => {
            const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/amilphotos/amil_13240_photo_20240308094517.jpg';
            cy.request('GET', apiUrl).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })

    it('detail - Drs. Abd Samik', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible')

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Struktur BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
            .click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

        cy.get('.pb-5 > :nth-child(1) > :nth-child(1) > .row > :nth-child(2)').click()
        cy.get('center > .img-fluid').then(() => {
            const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/amilphotos/amil_11723_photo_20230807203507.jpg';
            cy.request('GET', apiUrl).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })

    it('detail - Drs. Abd Samik', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible')

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Struktur BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
            .click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

        cy.get('.pb-5 > :nth-child(1) > :nth-child(1) > .row > :nth-child(3)').click()
        cy.get('center > .img-fluid').then(() => {
            const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/amilphotos/amil_9232_photo_20220718110644.jpg';
            cy.request('GET', apiUrl).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })

    it('detail - Muhammad Iqbal, SE', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible')

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Struktur BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
            .click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

        cy.get('.pb-5 > :nth-child(1) > :nth-child(1) > .row > :nth-child(4)').click()
        cy.get('center > .img-fluid').then(() => {
            const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/amilphotos/amil_8269_photo_20220718122909.jpg';
            cy.request('GET', apiUrl).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })

    it('detail - Dr. Adi Soeprapto, S.Sos., M.Si.', () => {

        // Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible')

        // Klik tentang BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

        // Klik Struktur BAZNAS
        cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
            .click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
        cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

        cy.get('.pb-5 > :nth-child(1) > :nth-child(1) > .row > :nth-child(5)').click()
        cy.get('center > .img-fluid').then(() => {
            const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/amilphotos/amil_5535_photo_20220718105816.jpg';
            cy.request('GET', apiUrl).then((response) => {
                expect(response.status).to.eq(200);
            })
        })
    })
})
