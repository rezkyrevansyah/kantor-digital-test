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

describe('Bayar Zakat', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    beforeEach(() => {
        cy.visit('https://kotayogya.baznas.go.id/bayarzakat');
    })

    it('Negative Test semua kosong', () => {

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')
        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')

        // nominal
        cy.get('#nominal').eq(0).type("50000")

        // title
        cy.get('#user_title')

        // nama
        cy.get('#name')

        // no hp
        cy.get('#handphone')

        // email
        cy.get('#email').eq(0)

        // button next
        cy.get('#next-button').click()

        // cy.get('#nominal-error').contains("Mohon Masukkan Nominal Donasi")
        cy.get('#user_title-error').contains("This field is required.")
        cy.get('#name-error').contains("Mohon Masukkan Nama")
        cy.get('#handphone-error').contains("Mohon Masukkan Nomor Handphone Untuk Pengiriman Bukti Bayar")
        cy.get('#email-error').contains("Mohon Masukkan Email untuk pengiriman Bukti Bayar")

        // button bank mandiri
        // cy.get('#trmandiriid > [style="width: 100px;text-align: left;"]').click()

        // cy.get('#pay-button').click()

        // cy.get('#header > div.title-bar')

    })

    it('Nominal < 3 karakter', () => {

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')
        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')

        // nominal
        cy.get('#nominal').eq(0).type("50")

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

        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')

        // button bank mandiri
        cy.get('[style="width: 100px;text-align: left; height: 10px"]').click()

        cy.get('#pay-button').click()

    })

    it('Nominal > 50 karakter', () => {

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')
        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')

        // nominal
        cy.get('#nominal').eq(0).type("50000000000000000000000000000000000000000000000000")

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

        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')

        // button bank mandiri
        cy.get('[style="width: 100px;text-align: left; height: 10px"]').click()

        cy.get('#pay-button').click()

    })

    it('Nominal diisi huruf', () => {

        // Jenis dana zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'zakat', 'contains', 'Zakat')
        cy.get('#jenis').select(0).should('have.value', 'zakatpenghasilan', 'contains', 'Zakat Penghasilan')

        // nominal
        cy.get('#nominal').eq(0).type("testing")

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

        cy.get('#nominal-error').contains("Mohon Masukkan Nominal Donasi")

        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')



    })

    it('Nama Lengkap < 3 karakter', () => {

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
        cy.get('#name').eq(0).type("te")

        // no hp
        cy.get('#handphone').eq(0).type("0812344856789")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)

        cy.get('#name-error').contains("Mohon Masukkan Nama")

        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')


    })

    it('Nama Lengkap > 50 karakter', () => {

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
        cy.get('#name').eq(0).type("testingtesting testingtestingtestingtestingtesting testingtestingtestingtestingtestingtestingtesting testingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtestingtesting")

        // no hp
        cy.get('#handphone').eq(0).type("0812344856789")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)

        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')


    })

    it('Nama Lengkap diisi simbol dan angka', () => {

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
        cy.get('#name').eq(0).type("teso/!000")

        // no hp
        cy.get('#handphone').eq(0).type("0812344856789")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)
        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')


    })

    it('Nomor Handphone < 10 karakter', () => {

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
        cy.get('#handphone').eq(0).type("08128394")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)
        // cy.get('#handphone-error').contains("Mohon Masukkan Nomor Handphone Untuk Pengiriman Bukti Bayar")
        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')


    })

    it('Nomor Handphone > 13 karakter', () => {

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
        cy.get('#handphone').eq(0).type("089909877898878")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)
        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')


    })

    it('Nomor Handphone diisi huruf', () => {

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
        cy.get('#handphone').eq(0).type("testing")

        // email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)
        cy.get('#handphone-error').contains("Mohon Masukkan Nomor Handphone Untuk Pengiriman Bukti Bayar")
        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')


    })

    it('email > 60 karakter', () => {

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
        cy.get('#email').eq(0).type("testingggggggggggggggggggggggggggggggggggggggggggggggggggggggg@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)
        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')


    })

    it('email tidak sesuai format', () => {

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
        cy.get('#email').eq(0).type("testingggggggggggggggggggggggggggggggggggggggggggggggggggggggg@gmail.com")

        // button next
        cy.get('#next-button').click().wait(200)
        cy.get('#email-error').contains("Mohon Masukkan Email untuk pengiriman Bukti Bayar")
        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.visible')

    })
})