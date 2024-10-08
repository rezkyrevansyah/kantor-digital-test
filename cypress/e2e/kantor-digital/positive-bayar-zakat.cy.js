// sapaan tidak diisi
// nama tidak diisi
// no telp tidak diisi
// email tidak diisi

/* 
NOMINAL
min = 3 karakter, max = 50 karakter, number only

NAMA LENGKAP
min = 3 karakter, max = 50 karakter

NOMOR HANDPHONE
min = 10 karakter, max = 13 karakter

EMAIL
max = 60, type : email
*/

describe('Positive Test Bayar Zakat', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    beforeEach(() => {
        cy.visit('https://kotayogya.baznas.go.id/bayarzakat');
    })

    it('Isi Nominal', () => {

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')
        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')

        // nominal
        cy.get('#nominal').eq(0).type("50000")

        // title
        cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')
        cy.get('#user_title').select(2).should('have.value', 'Ibu', 'contains', 'Ibu')
        cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')

        // nama
        cy.get('#name').eq(0).type("testing")

        // no hp
        cy.get('#handphone').eq(0).type("0812344856789")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)

        // button bank mandiri
        cy.get('[style="width: 100px;text-align: left; height: 10px"]').click()

        cy.get('#pay-button').click()

    })

    it('Isi Nama Lengkap', () => {

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')
        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')

        // nominal
        cy.get('#nominal').eq(0).type("50000")

        // title
        cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')
        cy.get('#user_title').select(2).should('have.value', 'Ibu', 'contains', 'Ibu')
        cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')

        // nama
        cy.get('#name').eq(0).type("testing")

        // no hp
        cy.get('#handphone').eq(0).type("0812344856789")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)

        // button bank mandiri
        cy.get('[style="width: 100px;text-align: left; height: 10px"]').click()

        cy.get('#pay-button').click()

    })

    it('Isi Nomor Handphone', () => {

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')
        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')

        // nominal
        cy.get('#nominal').eq(0).type("50000")

        // title
        cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')
        cy.get('#user_title').select(2).should('have.value', 'Ibu', 'contains', 'Ibu')
        cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')

        // nama
        cy.get('#name').eq(0).type("testing")

        // no hp
        cy.get('#handphone').eq(0).type("081289445645")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)

        // button bank mandiri
        cy.get('[style="width: 100px;text-align: left; height: 10px"]').click()

        cy.get('#pay-button').click()

    })

    it('Isi Email', () => {

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')
        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')

        // nominal
        cy.get('#nominal').eq(0).type("50000")

        // title
        cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')
        cy.get('#user_title').select(2).should('have.value', 'Ibu', 'contains', 'Ibu')
        cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')

        // nama
        cy.get('#name').eq(0).type("testing")

        // no hp
        cy.get('#handphone').eq(0).type("0812344856789")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)

        // button bank mandiri
        cy.get('[style="width: 100px;text-align: left; height: 10px"]').click()

        cy.get('#pay-button').click()

    })
})