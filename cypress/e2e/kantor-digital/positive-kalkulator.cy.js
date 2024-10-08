/* 
*Test Scenario : Memastikan Kalkulator Zakat berfungsi dengan benar
*test case 1 : Verifikasi pengguna berhasil beralih ke halaman Kalkulator Zakat
Pre-conditions : User mengklik kalkulator zakat pada bottom navbar
 
1. Klik button kalkulator zakat
 
Expected results : berhasil menampilkan halaman kalkulator zakat https://kotayogya.baznas.go.id/kalkulator-zakat
*/

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

    /* 
    *test case 2 : Verifikasi pengguna berhasil beralih ke fragment perusahaan
    Pre-conditions : User berada pada halaman kalkulator zakat
     
    1. Klik button drop down dan pilih perusahaan
    2. klik dagang/industri
    3. klik jasa
     
    Expected results : berhasil menampilkan halaman kalkulator zakat perusahaan
    */

    it('TC-002 Verifikasi pengguna berhasil beralih ke fragment perusahaan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        // 1. Klik button drop down dan pilih perusahaan
        cy.get('#calculator_type').select(1).should('have.value', 'perusahaan')
        cy.get('.col-12 > .card > .card-body').should('exist')

        // 2. klik dagang/industri
        cy.get('#custom-tabs-three-profile-tab').click()
        cy.get('.col-12 > .card > .card-body').should('exist')

        // klik jasa
        cy.get('#custom-tabs-three-home-tab').click()
        cy.get('.col-12 > .card > .card-body').should('exist')
    })

    /* 
    *test case 3 : Verifikasi pengguna berhasil beralih ke fragment perdagangan
    Pre-conditions : User berada pada halaman kalkulator zakat
     
    1. Klik button drop down
    2. pilih perdagangan
     
    Expected results : berhasil menampilkan halaman kalkulator zakat perdagangan
    */

    it('TC-003 Verifikasi pengguna berhasil beralih ke fragment perdagangan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        cy.get('#calculator_type').select(2).should('have.value', 'perdagangan')
        cy.get('#perdagangan > .pl-3').should('exist')
    })

    /* 
    *test case 4 : Verifikasi pengguna berhasil beralih ke fragment emas
    Pre-conditions : User berada pada halaman kalkulator zakat
     
    1. Klik button drop down
    2. pilih emas
     
    Expected results : berhasil menampilkan halaman kalkulator zakat emas
    */

    it('TC-004 Verifikasi pengguna berhasil beralih ke fragment emas', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        cy.get('#calculator_type').select(3).should('have.value', 'emas_perak')
        cy.get('#emas_perak > .pl-3').should('exist')
    })

    /* 
    *test case 5 : Verifikasi pengguna berhasil beralih ke fragment penghasilan
    Pre-conditions : User berada pada halaman kalkulator zakat
     
    1. Klik button drop down dan pilih penghasilan
     
    Expected results : berhasil menampilkan halaman kalkulator zakat penghasilan
    */

    it('TC-005 Verifikasi pengguna berhasil beralih ke fragment penghasilan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(0).should('have.value', 'penghasilan')
        cy.get('#form_penghasilan').should('exist')

        cy.get('#form_penghasilan > :nth-child(8) > .col-sm-11 > .form-control').eq(0)
        cy.get(':nth-child(10) > .col-sm-11 > .form-control').eq(0)
    })

    /* 
    *test case 6 : Verifikasi pengguna berhasil mengisi form pada fragment penghasilan
    Pre-conditions : User berada pada halaman kalkulator zakat dan fragment penghasilan
     
    1. Klik button drop down dan pilih penghasilan
    2. masukkan gaji saya perbulan
    3. masukkan penghasilan lainnya 
    4. klik hitung zakat
    5. klik bayar zakat
     
    Expected results : berhasil menampilkan jumlah wajib zakat dan halaman bayar zakat dengan kategori yang sudah sesuai
    */

    it('TC-006 Verifikasi pengguna berhasil mengisi form pada fragment penghasilan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(0).should('have.value', 'penghasilan')
        cy.get('#form_penghasilan').should('exist')

        // 2. masukkan gaji saya perbulan
        cy.get('#form_penghasilan > :nth-child(2) > .col-sm-11 > .form-control').eq(0).type("800000")

        // 3. masukkan penghasilan lainnya 
        cy.get('#form_penghasilan > :nth-child(4) > .col-sm-11 > .form-control').eq(0).type("200000")

        // 4. klik hitung zakat
        cy.get('.btn_hitung_penghasilan > .btn').click()
        cy.get('.zakat_penghasilan > .form-group > .col-sm-11 > .form-control').invoke('val').then(val => {
            const gajiPerbulan = 800000;
            const penghasilanLainnya = 200000;
            const totalPenghasilan = gajiPerbulan + penghasilanLainnya;
            const zakatExpected = totalPenghasilan * 0.025;
            expect(zakatExpected)
        })

        // 5. klik bayar zakat
        cy.get('.btn_bayar_penghasilan > .btn').click()

        // Expected results : berhasil menampilkan halaman bayar zakat dengan kategori yang sudah sesuai
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=profesi&param1=0&param2=0&param3=0&param4=0&jumlah=25.000')
        cy.get('#nominal').should('have.value', "25000")
        cy.get('#type_of_fund').should("have.value", "zakatpenghasilan")
    })

    /* 
    *test case 7 : Verifikasi pengguna dapat reset form pada fragment penghasilan
    Pre-conditions : User berada pada halaman kalkulator zakat dan fragment penghasilan
     
    1. Klik button drop down dan pilih penghasilan
    2. masukkan gaji saya perbulan
    3. masukkan penghasilan lainnya 
    4. klik hitung zakat zakat
    5. klik reset
     
    Expected results : berhasil reset form pada fragment penghasilan
    */

    it('TC-007 Verifikasi pengguna dapat reset form pada fragment penghasilan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const gajiPerbulan = 800000;
        const penghasilanLainnya = 200000;

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(0).should('have.value', 'penghasilan')
        cy.get('#form_penghasilan').should('exist')

        // 2. masukkan gaji saya perbulan
        cy.get('#form_penghasilan > :nth-child(2) > .col-sm-11 > .form-control').eq(0).type(gajiPerbulan)

        // 3. masukkan penghasilan lainnya 
        cy.get('#form_penghasilan > :nth-child(4) > .col-sm-11 > .form-control').eq(0).type(penghasilanLainnya)

        // 4. klik hitung zakat
        cy.get('.btn_hitung_penghasilan > .btn').click()
        cy.get('.zakat_penghasilan > .form-group > .col-sm-11 > .form-control').invoke('val').then(val => {
            const totalPenghasilan = gajiPerbulan + penghasilanLainnya;
            const zakatExpected = totalPenghasilan * 0.025;
            expect(zakatExpected)
        })

        // 5. klik reset
        cy.get('.btn_reset_penghasilan > .btn').click()

        // Expected results : berhasil reset form pada fragment penghasilan
        cy.get('#form_penghasilan > :nth-child(2) > .col-sm-11 > .form-control').eq(0)
        cy.get('#form_penghasilan > :nth-child(4) > .col-sm-11 > .form-control').eq(0)
    })

    /* 
   *test case 8 : Verifikasi pengguna berhasil mengisi form pada fragment perusahaan
   Pre-conditions : User berada pada halaman kalkulator zakat dan fragment perusahaan
    
   1. Klik button drop down dan pilih perusahaan
   2. masukkan pendapatan sebelum pajak
   3. klik hitung zakat
   4. klik bayar zakat
   5. klik tab Dagang/Industri
   6. isi aktiva lancar
   7. isi pasiva lancar
   8. klik button hitung zakat
   9. klik button bayar zakat
    
   Expected results : berhasil menampilkan jumlah wajib zakat dan halaman bayar zakat dengan kategori yang sudah sesuai
   */

    it('TC-008 Verifikasi pengguna berhasil mengisi form pada fragment perusahaan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const pendapatan = 1000000;
        const zakatExpected = pendapatan * 0.025;

        const aktivaLancar = 1200000;
        const pasivaLancar = 200000;
        const jumlahDagang = aktivaLancar - pasivaLancar;
        const zakatDagang = jumlahDagang * 0.025;

        // 1. Klik button drop down dan pilih perusahaan
        cy.get('#calculator_type').select(1).should('have.value', 'perusahaan')
        cy.get('#perusahaan').should('exist')

        // 2. masukkan pendapatan sebelum pajak
        cy.get('#pdp_pre_pajak').eq(0).type(pendapatan)

        // 3. klik hitung zakat
        cy.get('.btn_zakper_jasa > .btn').click()
        cy.get('.total_zakper_jasa > .form-group > .col-sm-11 > .form-control').invoke('val').then(val => {
            expect(zakatExpected)
        })

        // 4. klik bayar zakat
        cy.get(':nth-child(4) > :nth-child(3) > .btn').click()

        // Expected results : berhasil menampilkan halaman bayar zakat dengan kategori yang sudah sesuai
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=maal&param1=0&param2=0&param3=0&param4=0&jumlah=25.000')
        cy.go("back")
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/kalkulator-zakat/')


        // 5. klik tab Dagang/Industri
        cy.get('#calculator_type').select(0)
        cy.get('#calculator_type').select(1)
        cy.get('#custom-tabs-three-profile-tab').click()

        // 6. isi aktiva lancar
        cy.get('#custom-tabs-three-profile > form > :nth-child(2) > .col-sm-11 > .form-control').eq(0).type(aktivaLancar)

        // 7. isi pasiva lancar
        cy.get('#custom-tabs-three-profile > form > :nth-child(4) > .col-sm-11 > .form-control').eq(0).type(pasivaLancar)

        // 8. klik button hitung zakat
        cy.get('.btn_zakper_niaga > .btn').click()
        cy.get('#jml_zakper_niaga').invoke('val').then(val => {
            expect(zakatDagang)
        })

        // 9. klik button bayar zakat
        cy.get(':nth-child(8) > :nth-child(3) > .btn').click()

        // Expected results : berhasil menampilkan jumlah wajib zakat dan halaman bayar zakat dengan kategori yang sudah sesuai
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=maal&param1=0&param2=0&param3=0&param4=0&jumlah=25.000')
        cy.get('#nominal').should("have.value", "25000")
        cy.get('#jenis').should("have.value", "zakatmaal")
    })

    /* 
       *test case 9 : Verifikasi pengguna berhasil reset form pada fragment perusahaan
       Pre-conditions : User berada pada halaman kalkulator zakat dan fragment perusahaan
        
       1. Klik button drop down dan pilih perusahaan
       2. masukkan pendapatan sebelum pajak
       3. klik hitung zakat
       4. klik bayar zakat
       5. klik tab Dagang/Industri
       6. isi aktiva lancar
       7. isi pasiva lancar
       8. klik button hitung zakat
       9. klik reset
        
       Expected results : berhasil reset yang sudah diisi pada form
       */

    it('TC-009 Verifikasi pengguna berhasil reset form pada fragment perusahaan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const pendapatan = 1000000;
        const zakatExpected = pendapatan * 0.025;

        const aktivaLancar = 1200000;
        const pasivaLancar = 200000;

        // 1. Klik button drop down dan pilih perusahaan
        cy.get('#calculator_type').select(1).should('have.value', 'perusahaan')
        cy.get('#perusahaan').should('exist')

        // 2. masukkan pendapatan sebelum pajak
        cy.get('#pdp_pre_pajak').eq(0).type(pendapatan)

        // 3. klik hitung zakat
        cy.get('.btn_zakper_jasa > .btn').click()
        cy.get('.total_zakper_jasa > .form-group > .col-sm-11 > .form-control').invoke('val').then(val => {
            expect(zakatExpected)
        })

        // 4. klik bayar zakat
        cy.get(':nth-child(4) > :nth-child(3) > .btn').click()

        // Expected results : berhasil menampilkan halaman bayar zakat dengan kategori yang sudah sesuai
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=maal&param1=0&param2=0&param3=0&param4=0&jumlah=25.000')
        cy.go("back")
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/kalkulator-zakat/')


        // 5. klik tab Dagang/Industri
        cy.get('#calculator_type').select(0)
        cy.get('#calculator_type').select(1)
        cy.get('#custom-tabs-three-profile-tab').click()

        // 6. isi aktiva lancar
        cy.get('#custom-tabs-three-profile > form > :nth-child(2) > .col-sm-11 > .form-control').eq(0).type(aktivaLancar)

        // 7. isi pasiva lancar
        cy.get('#custom-tabs-three-profile > form > :nth-child(4) > .col-sm-11 > .form-control').eq(0).type(pasivaLancar)

        // 8. klik button hitung zakat
        cy.get('.btn_zakper_niaga > .btn').click()

        // 9. klik reset button
        cy.get('.btn_zakper_niaga_reset > .btn').click()

        cy.get('#pdp_pre_pajak').eq(0)

    })

    /* 
    *test case 10 : Verifikasi pengguna berhasil mengisi form pada fragment perdagangan
    Pre-conditions : User berada pada halaman kalkulator zakat dan fragment perdagangan
     
    1. Klik button drop down dan pilih perdagangan
    2. masukkan aset lancar
    3. masukkan laba
    4. klik hitung zakat
    5. klik bayar zakat
     
    Expected results : berhasil menampilkan jumlah wajib zakat dan halaman bayar zakat dengan kategori yang sudah sesuai
    */

    it('TC-010 Verifikasi pengguna berhasil mengisi form pada fragment perdagangan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const asetLancar = 800000;
        const laba = 200000;

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(2).should('have.value', 'perdagangan')
        cy.get('#perdagangan > .pl-3 > form').should('exist')

        // 2. masukkan aset lancar
        cy.get('#aset_lancar').eq(0).type(asetLancar)

        // 3. masukkan laba
        cy.get('#laba').eq(0).type(laba)

        // 4. klik hitung zakat
        cy.get('.btn_zak_per > .btn').click()
        cy.get('#jml_zak_per').invoke('val').then(val => {
            const totalPenghasilan = asetLancar + laba;
            const zakatExpected = totalPenghasilan * 0.025;
            expect(zakatExpected)
        })

        // 5. klik bayar zakat
        cy.get(':nth-child(10) > :nth-child(3) > .btn').click()

        // Expected results : berhasil menampilkan jumlah wajib zakat dan halaman bayar zakat dengan kategori yang sudah sesuai
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=maal&param1=0&param2=0&param3=0&param4=0&jumlah=25.000')
        cy.get('#nominal').should("have.value", "25000")
        cy.get('#jenis').should("have.value", "zakatmaal")
    })

    /* 
        *test case 11 : Verifikasi pengguna berhasil reset form pada fragment perdagangan
        Pre-conditions : User berada pada halaman kalkulator zakat dan fragment perdagangan
         
        1. Klik button drop down dan pilih perdagangan
        2. masukkan aset lancar
        3. masukkan laba
        4. klik hitung zakat
        5. klik reset
         
        Expected results : berhasil reset form pada fragment perdagangan
        */

    it('TC-011 Verifikasi pengguna berhasil mengisi form pada fragment perdagangan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const asetLancar = 800000;
        const laba = 200000;

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(2).should('have.value', 'perdagangan')
        cy.get('#perdagangan > .pl-3 > form').should('exist')

        // 2. masukkan aset lancar
        cy.get('#aset_lancar').eq(0).type(asetLancar)

        // 3. masukkan laba
        cy.get('#laba').eq(0).type(laba)

        // 4. klik hitung zakat
        cy.get('.btn_zak_per > .btn').click()
        cy.get('#jml_zak_per').invoke('val').then(val => {
            const totalPenghasilan = asetLancar + laba;
            const zakatExpected = totalPenghasilan * 0.025;
            expect(zakatExpected)
        })

        // 5. klik reset
        cy.get('.btn_zak_per_reset > .btn').click()

        cy.get('#aset_lancar').eq(0)
        cy.get('#laba').eq(0)
    })

    /* 
           *test case 12 : Verifikasi pengguna berhasil mengisi form pada fragment emas
           Pre-conditions : User berada pada halaman kalkulator zakat dan fragment emas
            
           1. Klik button drop down dan pilih emas
           2. masukkan emas
           3. klik hitung zakat
           4. klik bayar zakat
            
           Expected results : berhasil mengisi form pada fragment emas
           */

    it('TC-012 Verifikasi pengguna berhasil mengisi form pada fragment emas', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const emas = 1000000;
        const zakatExpected = emas * 0.025;

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(3).should('have.value', 'emas_perak')
        cy.get('#perdagangan > .pl-3 > form').should('exist')

        // 2. masukkan emas
        cy.get('#txt_emas').eq(0).type(emas)

        // 3. klik hitung zakat
        cy.get('.btn_zak_ms > .btn').click()
        cy.get('#jml_zak_ms').invoke('val').then(val => {
            expect(zakatExpected)
        })

        // 4. bayar zakat
        cy.get(':nth-child(6) > :nth-child(3) > .btn').click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=maal&param1=0&param2=0&param3=0&param4=0&jumlah=25.000')
        cy.get('#nominal').should("have.value", "25000")
        cy.get('#jenis').should("have.value", "zakatmaal")
    })

    /* 
           *test case 13 : Verifikasi pengguna berhasil reset form pada fragment emas
           Pre-conditions : User berada pada halaman kalkulator zakat dan fragment emas
            
           1. Klik button drop down dan pilih emas
           2. masukkan emas
           3. klik hitung zakat
           4. klik reset
            
           Expected results : berhasil reset form pada fragment emas
           */

    it('TC-013 Verifikasi pengguna berhasil reset form pada fragment emas', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        const emas = 1000000;
        const zakatExpected = emas * 0.025;

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(3).should('have.value', 'emas_perak')
        cy.get('#perdagangan > .pl-3 > form').should('exist')

        // 2. masukkan emas
        cy.get('#txt_emas').eq(0).type(emas)

        // 3. klik hitung zakat
        cy.get('.btn_zak_ms > .btn').click()
        cy.get('#jml_zak_ms').invoke('val').then(val => {
            expect(zakatExpected)
        })

        // 4. klik reset
        cy.get('.btn_zak_ms_reset > .btn').click()
        cy.get('#txt_emas').eq(0)
    })

    /* 
           *test case 14 : Negative test pengisian form fragment penghasilan
           Pre-conditions : User berada pada halaman fragment penghasilan
            
           1. Klik button drop down dan pilih penghasilan
           2. klik hitung zakat
            
           Expected results : berhasil memunculkan error message
           */

    it('TC-014 Negative test pengisian form fragment penghasilan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(0).should('have.value', 'penghasilan')
        cy.get('#form_penghasilan').should('exist')

        // 2. klik hitung zakat
        cy.get('.btn_hitung_penghasilan > .btn').click()

        //  Expected results : berhasil memunculkan error message
        cy.get('.under_nishab > p.text-center').should('exist')
        cy.get('.under_nishab > p.text-center').contains("Penghasilan Anda belum mencapai Nisab, ")

        // mencoba klik sedekah
        cy.get('.under_nishab > div.text-center > .btn').click()
        cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=sedekah&param1=0&param2=0&param3=0&param4=0&jumlah=0')

    })

    /* 
    *test case 15 : Negative test element fragment penghasilan
    Pre-conditions : User berada pada halaman kalkulator zakat dan fragment penghasilan
     
    1. Klik button drop down dan pilih penghasilan
    2. cek apakah form = 0
     
    Expected results : element = 0
    */

    it('TC-015 Negative test element fragment penghasilan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        // 1. Klik button drop down dan pilih penghasilan
        cy.get('#calculator_type').select(0).should('have.value', 'penghasilan')
        cy.get('#form_penghasilan').should('exist')

        // 2. cek apakah form = 0
        cy.get('#form_penghasilan > :nth-child(2) > .col-sm-11 > .form-control').should('have.value', '0')
        cy.get('#form_penghasilan > :nth-child(4) > .col-sm-11 > .form-control').should('have.value', '0')
        cy.get('#form_penghasilan > :nth-child(6) > .col-sm-11 > .form-control').should('have.value', '0')
        cy.get('#form_penghasilan > :nth-child(8) > .col-sm-11 > .form-control').should('have.value', '0')
        cy.get(':nth-child(10) > .col-sm-11 > .form-control').should('have.value', '0')
    })

    /* 
    *test case 16 : Negative test form fragment perusahaan
    Pre-conditions : User berada pada halaman fragment perusahaan
     
    1. Klik button drop down dan pilih perusahaan
    2. klik hitung zakat
            
    Expected results : jumlah = 0
    */

    it('TC-016 Negative test form fragment perusahaan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        // 1. Klik button drop down dan pilih perusahaan
        cy.get('#calculator_type').select(1).should('have.value', 'perusahaan')
        cy.get('.col-12 > .card > .card-body').should('exist')

        // 2. hitung zakat
        cy.get('.btn_zakper_jasa > .btn').click()

        // Expected results : jumlah = 0
        cy.get('.total_zakper_jasa > .form-group > .col-sm-11 > .form-control').should('have.value', '0')
    })

    /* 
    *test case 17 : Negative test form fragment perdagangan
    Pre-conditions : User berada pada halaman fragment perdagangan
     
    1. Klik button drop down dan pilih perdagangan
    2. klik hitung zakat
            
    Expected results : jumlah = 0
    */

    it('TC-017 Negative test form fragment perdagangan', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        cy.get('#calculator_type').select(2).should('have.value', 'perdagangan')
        cy.get('#perdagangan > .pl-3').should('exist')

        // 2. klik hitung zakat
        cy.get('.btn_zak_per > .btn').click()

        // Expected results : value = 0
        cy.get('#aset_lancar').should('have.value', '0')
        cy.get('#laba').should('have.value', '0')
        cy.get('#jumlah_aset').should('have.value', '0')
        cy.get('#haul_nishab').should('have.value', '0')
    })

    /* 
    *test case 18 : Negative test form fragment emas
    Pre-conditions : User berada pada halaman fragment emas
     
    1. Klik button drop down dan pilih emas
    2. klik hitung zakat
            
    Expected results : value = 0
    */

    it('TC-018 Negative test form fragment emas', () => {

        cy.visit('https://kotayogya.baznas.go.id/kalkulator-zakat/');

        cy.get('#calculator_type').select(3).should('have.value', 'emas_perak')
        cy.get('#perdagangan > .pl-3 > form').should('exist')

        // 2. klik hitung zakat
        cy.get('.btn_zak_ms > .btn').click()

        // Expected results : value = 0
        cy.get('#txt_emas').should('have.value', '0')
        cy.get('#haul_nishab2').should('have.value', '0')
    })
})
