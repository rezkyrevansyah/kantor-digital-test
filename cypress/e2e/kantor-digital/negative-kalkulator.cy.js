describe('Memastikan Kalkulator Zakat berfungsi dengan benar', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

    it('TC-001 Verifikasi pengguna berhasil beralih ke halaman Kalkulator Zakat', () => {

        cy.visit('https://kotayogya.baznas.go.id/');

        cy.get(':nth-child(5) > .mb-0 > a > .img-fluid').parent().click()

        cy.get('.pb-5 > :nth-child(1)').should('exist')
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/kalkulator-zakat')
    })


    it('TC-002 mengisi form dengan teks pada fragment penghasilan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(0).should('have.value', 'penghasilan')
        cy.get('#form_penghasilan').should('exist')

        // 2. masukkan gaji saya perbulan
        cy.get('#form_penghasilan > :nth-child(2) > .col-sm-11 > .form-control').eq(0).type("testing")

        // 3. masukkan penghasilan lainnya 
        cy.get('#form_penghasilan > :nth-child(4) > .col-sm-11 > .form-control').eq(0).type("testing")

        // 4. klik hitung zakat
        cy.get('.btn_hitung_penghasilan > .btn').click()
        cy.get('#form_penghasilan > :nth-child(6) > .col-sm-11 > .form-control').should('have.value', '0')

        // klik button sedekah
        cy.get('.under_nishab > div.text-center > .btn').click()

        cy.get('#nominal').should("have.value", "0")
        cy.get('#type_of_fund').should("have.value", "infak")

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


    it('TC-003 mengisi form dengan teks pada fragment perusahaan jasa', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const pendapatan = "testing";
        const zakatExpected = pendapatan * 0.025;

        const aktivaLancar = "testing";
        const pasivaLancar = "testing";
        const jumlahDagang = aktivaLancar - pasivaLancar;
        const zakatDagang = jumlahDagang * 0.025;

        // 1. Klik button drop down dan pilih perusahaan
        cy.get('#calculator_type').select(1).should('have.value', 'perusahaan')
        cy.get('#perusahaan').should('exist')

        // 2. masukkan pendapatan sebelum pajak
        cy.get('#pdp_pre_pajak').eq(0).type(pendapatan)

        // 3. klik hitung zakat
        cy.get('.btn_zakper_jasa > .btn').click()
        cy.get('.total_zakper_jasa > .form-group > .col-sm-11 > .form-control').should("have.value", "0")

        cy.get(':nth-child(4) > :nth-child(3) > .btn').click()

        cy.get('#nominal').should("have.value", "0")
        cy.get('#jenis').should("have.value", "zakatmaal")

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

    it('TC-004 mengisi form dengan teks pada fragment perusahaan dagang/industri', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const pendapatan = "testing";
        const zakatExpected = pendapatan * 0.025;

        const aktivaLancar = "testing";
        const pasivaLancar = "testing";
        const jumlahDagang = aktivaLancar - pasivaLancar;
        const zakatDagang = jumlahDagang * 0.025;

        // 1. Klik button drop down dan pilih perusahaan
        cy.get('#calculator_type').select(1).should('have.value', 'perusahaan')
        cy.get('#perusahaan').should('exist')

        cy.get('#custom-tabs-three-profile-tab').click()

        // 6. isi aktiva lancar
        cy.get('#custom-tabs-three-profile > form > :nth-child(2) > .col-sm-11 > .form-control').eq(0).type(aktivaLancar)

        // 7. isi pasiva lancar
        cy.get('#custom-tabs-three-profile > form > :nth-child(4) > .col-sm-11 > .form-control').eq(0).type(pasivaLancar)

        // 8. klik button hitung zakat
        cy.get('.btn_zakper_niaga > .btn').click()
        cy.get('#jml_zakper_niaga').should('have.value', '0')

        cy.get(':nth-child(8) > :nth-child(3) > .btn').click()

        cy.get('#nominal').should("have.value", "0")
        cy.get('#jenis').should("have.value", "zakatmaal")

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
        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.be.visible')

    })


    it('TC-005 Verifikasi pengguna berhasil mengisi form pada fragment perdagangan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const asetLancar = "testing";
        const laba = "testing";

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(2).should('have.value', 'perdagangan')
        cy.get('#perdagangan > .pl-3 > form').should('exist')

        // 2. masukkan aset lancar
        cy.get('#aset_lancar').eq(0).type(asetLancar)

        // 3. masukkan laba
        cy.get('#laba').eq(0).type(laba)

        // 4. klik hitung zakat
        cy.get('.btn_zak_per > .btn').click()
        cy.get('#jml_zak_per').should('have.value', '0')

        cy.get(':nth-child(10) > :nth-child(3) > .btn').click()

        cy.get('#nominal').should("have.value", "0")
        cy.get('#jenis').should("have.value", "zakatmaal")

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
        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.be.visible')

    })

    it('TC-006 Verifikasi pengguna berhasil mengisi form pada fragment emas', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const emas = "testing";
        const zakatExpected = emas * 0.025;

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(3).should('have.value', 'emas_perak')
        cy.get('#perdagangan > .pl-3 > form').should('exist')

        // 2. masukkan emas
        cy.get('#txt_emas').eq(0).type(emas)

        // 3. klik hitung zakat
        cy.get('.btn_zak_ms > .btn').click()
        cy.get('#jml_zak_ms').should('have.value', '0')

        cy.get(':nth-child(6) > :nth-child(3) > .btn').click()

        cy.get('#nominal').should("have.value", "0")
        cy.get('#jenis').should("have.value", "zakatmaal")

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
        cy.get(':nth-child(1) > .bg-yellow > .color-main').should('not.be.visible')
    })


    // it('TC-007 tidak mengisi form fragment penghasilan', () => {

    //     cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

    //     // 1. Klik button drop down dan pilih penghasilan
    //     cy.get('#calculator_type').select(0).should('have.value', 'penghasilan')
    //     cy.get('#form_penghasilan').should('exist')

    //     // 2. klik hitung zakat
    //     cy.get('.btn_hitung_penghasilan > .btn').click()

    //     //  Expected results : berhasil memunculkan error message
    //     cy.get('.under_nishab > p.text-center').should('exist')
    //     cy.get('.under_nishab > p.text-center').contains("Penghasilan Anda belum mencapai Nisab, ")

    //     // mencoba klik sedekah
    //     cy.get('.under_nishab > div.text-center > .btn').click()
    //     cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=sedekah&param1=0&param2=0&param3=0&param4=0&jumlah=0')

    //     // title
    //     cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')
    //     cy.get('#user_title').select(2).should('have.value', 'Ibu', 'contains', 'Ibu')
    //     cy.get('#user_title').select(1).should('have.value', 'Bapak', 'contains', 'Bapak')

    //     // nama
    //     cy.get('#name').eq(0).type("testing")

    //     // no hp
    //     cy.get('#handphone').eq(0).type("0812344856789")

    //     // email
    //     cy.get('#email').eq(0).type("testing@gmail.com")

    //     // button next
    //     cy.get('#next-button').click().wait(200)

    //     // button bank mandiri
    //     cy.get('[style="width: 100px;text-align: left; height: 10px"]').click()

    //     cy.get('#pay-button').click()

    // })


    // it('TC-008 tidak mengisi fragment penghasilan', () => {

    //     cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

    //     // 1. Klik button drop down dan pilih penghasilan
    //     cy.get('#calculator_type').select(0).should('have.value', 'penghasilan')
    //     cy.get('#form_penghasilan').should('exist')

    //     // 2. cek apakah form = 0
    //     cy.get('#form_penghasilan > :nth-child(2) > .col-sm-11 > .form-control').should('have.value', '0')
    //     cy.get('#form_penghasilan > :nth-child(4) > .col-sm-11 > .form-control').should('have.value', '0')
    //     cy.get('#form_penghasilan > :nth-child(6) > .col-sm-11 > .form-control').should('have.value', '0')
    // })


    // it('TC-009 tidak mengisi form fragment perusahaan', () => {

    //     cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

    //     // 1. Klik button drop down dan pilih perusahaan
    //     cy.get('#calculator_type').select(1).should('have.value', 'perusahaan')
    //     cy.get('.col-12 > .card > .card-body').should('exist')

    //     // 2. hitung zakat
    //     cy.get('.btn_zakper_jasa > .btn').click()

    //     // Expected results : jumlah = 0
    //     cy.get('.total_zakper_jasa > .form-group > .col-sm-11 > .form-control').should('have.value', '0')
    // })

    // it('TC-010 tidak mengisi form fragment perdagangan', () => {

    //     cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

    //     cy.get('#calculator_type').select(2).should('have.value', 'perdagangan')
    //     cy.get('#perdagangan > .pl-3').should('exist')

    //     // 2. klik hitung zakat
    //     cy.get('.btn_zak_per > .btn').click()

    //     // Expected results : value = 0
    //     cy.get('#aset_lancar').should('have.value', '0')
    //     cy.get('#laba').should('have.value', '0')
    //     cy.get('#jumlah_aset').should('have.value', '0')
    //     cy.get('#haul_nishab').should('have.value', '0')
    // })

    // it('TC-011 tidak mengisi form fragment emas', () => {

    //     cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

    //     cy.get('#calculator_type').select(3).should('have.value', 'emas_perak')
    //     cy.get('#perdagangan > .pl-3 > form').should('exist')

    //     // 2. klik hitung zakat
    //     cy.get('.btn_zak_ms > .btn').click()

    //     // Expected results : value = 0
    //     cy.get('#txt_emas').should('have.value', '0')
    //     cy.get('#haul_nishab2').should('have.value', '0')
    // })
})
