describe('Halaman Berita', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    beforeEach(() => {
        cy.visit('https://kotayogya.baznas.go.id/');

        // 1. Buka hamburger bar
        cy.get('.navbar-nav > .nav-item > .nav-link').click();
        cy.get('.sidebar').should('be.visible');

        // 2. Klik BERITA
        cy.get('.nav-pills > :nth-child(3) > .nav-link').click()

        // Expected results : berhasil menampilkan halaman BERITA https://kotayogya.baznas.go.id/news
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/news')
    })

    it('Verifikasi berhasil menampilkan berita pada banner', () => {
        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(4000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(8000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(12000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(16000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(20000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(24000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(28000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(32000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(36000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(40000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(44000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(48000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(52000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(56000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(60000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(64000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(68000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(72000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(76000)

        cy.get('.active > .item > .text-center > .btn').click()

        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
        cy.wait(80000)
    })

    it('Verifikasi berhasil menampilkan berita pada list', () => {

        cy.get(':nth-child(1) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(2) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(3) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(4) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(5) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(6) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(7) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(8) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(9) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(10) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(11) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(12) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(13) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(14) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(15) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(16) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(17) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(18) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(19) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')

        cy.get(':nth-child(20) > .col-12 > .row > .col-4 > a > .w-100').click()
        cy.get('.p-3 > .color-main').should("exist")
        cy.go('back')
    })
})