// Format email salah

// Tidak memasukkan bank pengirim

// Nominal tidak diisi

// tidak upload bukti bayar

describe('Negative Konfirmasi Zakat', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    // File > 1 MB
    it('Negative Test Bukti Bayar > 1 MB', () => {
        cy.visit('https://kotayogya.baznas.go.id/konfirmasi-zis');
        cy.get('input[type="file"]').selectFile('cypress\\assets\\tesing-2.png')
        cy.on('window:alert', (message) => {
            expect(message).to.equal("File Harus Dibawah 1 Mb")
        })
    })

    // Nama kurang dari 3 karakter
    it('Negative Test Nama < 3 karakter', () => {
        cy.visit('https://sumsel.baznas.go.id/konfirmasi-zis');
        cy.get('#konfirmasi > div:nth-child(1) > div:nth-child(2) > div > input').eq(0).type("re")
    })

    // Nomor HP minimal 10 nomor
    it('Nomor HP < 10 Nomor', () => {
        cy.visit('https://sumsel.baznas.go.id/konfirmasi-zis');
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').eq(0).type("087423456")
    })

    it('Nomor HP > 14 Nomor', () => {
        cy.visit('https://sumsel.baznas.go.id/konfirmasi-zis');
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').eq(0).type("087425756753456")
    })

    it('NPWZ > 15', () => {
        cy.visit('https://sumsel.baznas.go.id/konfirmasi-zis');
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').eq(0).type("0004563343434353400")
    })

    it('NPWZ < 15', () => {
        cy.visit('https://sumsel.baznas.go.id/konfirmasi-zis');
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').eq(0).type("000")
    })

    it('Negative Test Format Email Salah', () => {
        cy.visit('https://sumsel.baznas.go.id/konfirmasi-zis');
        cy.get('#email').eq(0).type("testing")
    })

    // it('Negative Test All', () => {

    //     cy.visit('https://sumsel.baznas.go.id/konfirmasi-zis');

    //     // test sapaan
    //     cy.get('#konfirmasi > div:nth-child(1) > div:nth-child(1) > div > select').select(0).should('have.value', 'Bapak')
    //     cy.get('#konfirmasi > div:nth-child(1) > div:nth-child(1) > div > select').select(1).should('have.value', 'Ibu')

    //     // test nama
    //     cy.get('#konfirmasi > div:nth-child(1) > div:nth-child(2) > div > input').eq(0).type("rr")

    //     // test jenis pembayaran zakat
    //     cy.get('#type_of_fund').select(0).should('have.value', 'Zakat')

    //     cy.get('#jenis').select(0).should('have.value', 'Zakat Penghasilan')
    //     cy.get('#jenis').select(1).should('have.value', 'Zakat Maal')

    //     // test jenis pembayaran infak
    //     cy.get('#type_of_fund').select(1).should('have.value', 'Infak')

    //     cy.get('#jenis').select(0)
    //     cy.get('#jenis').select(1)
    //     cy.get('#jenis').select(2)
    //     cy.get('#jenis').select(3)
    //     cy.get('#jenis').select(4)
    //     cy.get('#jenis').select(5)
    //     cy.get('#jenis').select(6)
    //     cy.get('#jenis').select(7)
    //     cy.get('#jenis').select(8)
    //     cy.get('#jenis').select(9)
    //     cy.get('#jenis').select(10)
    //     cy.get('#jenis').select(11)

    //     // test jenis pembayaran Sedekah
    //     cy.get('#type_of_fund').select(2).should('have.value', 'Sedekah')

    //     cy.get('#jenis').select(0)

    //     // test jenis pembayaran fidyah
    //     cy.get('#type_of_fund').select(3).should('have.value', 'Fidyah')

    //     cy.get('#jenis').select(0)

    //     // test jenis pembayaran kurban
    //     cy.get('#type_of_fund').select(4).should('have.value', 'Kurban')

    //     cy.get('#jenis').select(0)
    //     cy.get('#jenis').select(1)
    //     cy.get('#jenis').select(2)
    //     cy.get('#jenis').select(3)

    //     // test NPWZ
    //     cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').eq(0).type("00000")

    //     // test No HP
    //     cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').eq(0).type("087423456")

    //     // test email
    //     cy.get('#email').eq(0).type("testing")

    //     // test tanggal transfer
    //     cy.get('#konfirmasi > div:nth-child(4) > div:nth-child(2) > div > input').type('2024-09-20');

    //     // test asal bank
    //     // cy.get('#bank_asal').type("testing")

    //     // test tujuan bank
    //     cy.get('#bank_name').select(0)
    //     cy.get('#bank_name').select(1)
    //     cy.get('#bank_name').select(2)
    //     cy.get('#bank_name').select(3)
    //     cy.get('#bank_name').select(4)
    //     cy.get('#bank_name').select(5)

    //     // test nominal
    //     // cy.get('#nominal').eq(0).type("1000000")

    //     // test cara pembayaran
    //     cy.get(':nth-child(7) > :nth-child(1) > .form-group > .form-control').select(0)
    //     cy.get(':nth-child(7) > :nth-child(1) > .form-group > .form-control').select(1)
    //     cy.get(':nth-child(7) > :nth-child(1) > .form-group > .form-control').select(2)
    //     cy.get(':nth-child(7) > :nth-child(1) > .form-group > .form-control').select(3)

    //     // test catatan
    //     cy.get(':nth-child(7) > :nth-child(2) > .form-group > .form-control').eq(0).type("testing")

    //     // test file upload 
    //     // cy.get('input[type="file"]').selectFile('cypress\\assets\\testing.jpg')

    //     // test captcha
    //     // cy.get('#captcha_code').eq(0).type("")

    //     // submit button
    //     cy.get(':nth-child(1) > .btn').click()

    //     cy.on('window:alert', (message) => {
    //         expect(message).to.equal("Captcha yang Anda masukan tidak cocok")
    //     })
    // })
})
