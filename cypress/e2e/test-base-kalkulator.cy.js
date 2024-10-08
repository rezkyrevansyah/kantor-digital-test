describe('Memastikan Kalkulator Zakat berfungsi dengan benar', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    })

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

            // 5. klik bayar zakat
            cy.get('.btn_bayar_penghasilan > .btn').click()

            // Expected results : berhasil menampilkan halaman bayar zakat dengan kategori yang sudah sesuai
            cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=profesi&param1=0&param2=0&param3=0&param4=0&jumlah=25.000')
            cy.get('#nominal').should('have.value', zakatExpected)
            cy.get('#type_of_fund').should("have.value", "zakatpenghasilan")
        })
    })

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

            // 9. klik button bayar zakat
            cy.get(':nth-child(8) > :nth-child(3) > .btn').click()

            // Expected results : berhasil menampilkan jumlah wajib zakat dan halaman bayar zakat dengan kategori yang sudah sesuai
            cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=maal&param1=0&param2=0&param3=0&param4=0&jumlah=25.000')
            cy.get('#nominal').should("have.value", zakatExpected)
            cy.get('#jenis').should("have.value", "zakatmaal")
        })
    })

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

            // 5. klik bayar zakat
            cy.get(':nth-child(10) > :nth-child(3) > .btn').click()

            // Expected results : berhasil menampilkan jumlah wajib zakat dan halaman bayar zakat dengan kategori yang sudah sesuai
            cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=maal&param1=0&param2=0&param3=0&param4=0&jumlah=25.000')
            cy.get('#nominal').should("have.value", zakatExpected)
            cy.get('#jenis').should("have.value", "zakatmaal")
        })
    })


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

            // 4. bayar zakat
            cy.get(':nth-child(6) > :nth-child(3) > .btn').click()
            cy.url().should('eq', 'https://kotayogya.baznas.go.id/bayarzakat?jenis=maal&param1=0&param2=0&param3=0&param4=0&jumlah=25.000')
            cy.get('#nominal').should("have.value", zakatExpected)
            cy.get('#jenis').should("have.value", "zakatmaal")
        })
    })

})