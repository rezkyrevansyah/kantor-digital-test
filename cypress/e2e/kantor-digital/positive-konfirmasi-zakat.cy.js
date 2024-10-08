describe('Konfirmasi Zakat', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('Main Flow', () => {

        cy.visit('https://kotayogya.baznas.go.id/konfirmasi-zis');

        // test sapaan
        cy.get('#konfirmasi > div:nth-child(1) > div:nth-child(1) > div > select').select(0).should('have.value', 'Bapak')
        cy.get('#konfirmasi > div:nth-child(1) > div:nth-child(1) > div > select').select(1).should('have.value', 'Ibu')

        // test nama
        cy.get('#konfirmasi > div:nth-child(1) > div:nth-child(2) > div > input').eq(0).type("testing")

        // test jenis pembayaran zakat
        cy.get('#type_of_fund').select(0).should('have.value', 'Zakat')

        cy.get('#jenis').select(0).should('have.value', 'Zakat Penghasilan')
        cy.get('#jenis').select(1).should('have.value', 'Zakat Maal')

        // test jenis pembayaran infak
        cy.get('#type_of_fund').select(1).should('have.value', 'Infak')

        cy.get('#jenis').select(0).should('have.value', 'Infak Sedekah', 'Contains', 'Infaq/Sedekah')
        cy.get('#jenis').select(1).should('have.value', 'Infak Operasional', 'contains', 'Sedekah BAZNAS')
        cy.get('#jenis').select(2).should('have.value', 'Dompet Bencana & Kemanusiaan', 'contains', 'Dompet Bencana & Kemanusiaan')
        cy.get('#jenis').select(3).should('have.value', 'Dompet Pendidikan', 'contains', 'Dompet Pendidikan')
        cy.get('#jenis').select(4).should('have.value', 'Dompet Kesehatan', 'contains', 'Dompet Kesehatan')
        cy.get('#jenis').select(5).should('have.value', 'Dompet Solidaritas Dunia Islam', 'contains', 'Dompet Solidaritas Dunia Islam')
        cy.get('#jenis').select(6).should('have.value', 'Dompet Palestina', 'contains', 'Dompet Palestina')
        cy.get('#jenis').select(7).should('have.value', 'Dompet Peduli Mustahik', 'contains', 'Dompet Peduli Mustahik')
        cy.get('#jenis').select(8).should('have.value', 'Dompet Yatim', 'contains', 'Dompet Yatim')
        cy.get('#jenis').select(9).should('have.value', 'Dompet Pemberdayaan Ekonomi', 'contains', 'Dompet Pemberdayaan ekonomi')
        cy.get('#jenis').select(10).should('have.value', 'Dompet Bantuan Hukum', 'contains', 'Dompet Bantuan Hukum')
        cy.get('#jenis').select(11).should('have.value', 'Dompet Sekolah Jeddah', 'contains', 'Dompet Sekolah Jeddah')

        // test jenis pembayaran Sedekah
        cy.get('#type_of_fund').select(2).should('have.value', 'Sedekah')

        cy.get('#jenis').select(0).should('have.value', 'Sedekah BAZNAS', 'contains', 'Sedekah BAZNAS')

        // test jenis pembayaran fidyah
        cy.get('#type_of_fund').select(3).should('have.value', 'Fidyah')

        cy.get('#jenis').select(0).should('have.value', 'Fidyah', 'contains', 'Fidyah')

        // test jenis pembayaran kurban
        cy.get('#type_of_fund').select(4).should('have.value', 'Kurban')

        // cy.get('#jenis').select(0).should('have.value', '', 'contains', '')
        cy.get('#jenis').select(1).should('have.value', 'Kurban Kambing', 'contains', 'Kurban Kambing')
        cy.get('#jenis').select(2).should('have.value', 'Kurban Sapi', 'contains', 'Kurban Sapi')
        cy.get('#jenis').select(3).should('have.value', 'Kurban 1/7 Sapi', 'contains', '1/7 Kurban sapi')

        // test NPWZ
        cy.get(':nth-child(3) > :nth-child(1) > .form-group > .form-control').eq(0).type("00000")

        // test No HP
        cy.get(':nth-child(3) > :nth-child(2) > .form-group > .form-control').eq(0).type("00000")

        // test email
        cy.get('#email').eq(0).type("testing@gmail.com")

        // test tanggal transfer
        cy.get('#konfirmasi > div:nth-child(4) > div:nth-child(2) > div > input').type('2024-09-20');

        // test asal bank
        cy.get('#bank_asal').eq(0).type("testing")

        // test tujuan bank
        cy.get('#bank_name').select(0).contains('Pilih Bank Tujuan')
        cy.get('#bank_name').select(1).should('have.value', 'BCA Syariah', 'contains', 'BCA Syariah (0461666877)')
        cy.get('#bank_name').select(2).should('have.value', 'BPD DIY SYARIAH', 'contains', 'BPD DIY SYARIAH (801111000053)')
        cy.get('#bank_name').select(3).should('have.value', 'BPD DIY', 'contains', 'BPD DIY (006111001057)')
        cy.get('#bank_name').select(4).should('have.value', 'BANK JOGJA', 'contains', 'BANK JOGJA (2020000001)')
        cy.get('#bank_name').select(5).should('have.value', 'KB BUKOPIN SYARIAH', 'contains', 'KB BUKOPIN SYARIAH (7709007310)')
        cy.get('#bank_name').select(6).should('have.value', 'MAYBANK SYARIAH', 'contains', 'MAYBANK SYARIAH (2726000056)')
        cy.get('#bank_name').select(7).should('have.value', 'CIMB NIAGA SYARIAH', 'contains', 'CIMB NIAGA SYARIAH (861050505100)')
        cy.get('#bank_name').select(8).should('have.value', 'MUAMALAT', 'contains', 'MUAMALAT (5390001935)')
        cy.get('#bank_name').select(9).should('have.value', 'BANK MANDIRI', 'contains', 'BANK MANDIRI (1370050000989)')
        cy.get('#bank_name').select(10).should('have.value', 'BRI', 'contains', 'BRI (153101000007309)')
        cy.get('#bank_name').select(11).should('have.value', 'BNI', 'contains', 'BNI (1331441771)')
        cy.get('#bank_name').select(12).should('have.value', 'BSI', 'contains', 'BSI (4441111113)')

        // test nominal
        cy.get('#nominal').eq(0).type("1000000")

        // test cara pembayaran
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .form-control').select(0).should('have.value', 'ATM ', 'contains', 'ATM ')
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .form-control').select(1).should('have.value', 'E-Banking', 'contains', 'E-Banking')
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .form-control').select(2).should('have.value', 'SMS', 'contains', 'SMS')
        cy.get(':nth-child(7) > :nth-child(1) > .form-group > .form-control').select(3).should('have.value', 'Mobile Banking', 'contains', 'Mobile Banking')

        // test catatan
        cy.get(':nth-child(7) > :nth-child(2) > .form-group > .form-control').eq(0).type("testing")

        // test file upload 
        cy.get('input[type="file"]').selectFile('cypress\\assets\\testing.jpg')

        // test captcha
        cy.get('#captcha_code')

        // submit button
        // cy.get(':nth-child(2) > .btn').click()
    })
})