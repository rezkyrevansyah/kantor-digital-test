describe('Test Fungsi Button Rekening Zakat dan Salin Rekening Zakat', () => {

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(() => {
        cy.visit('https://kotayogya.baznas.go.id/');

        cy.get(':nth-child(1) > .mb-0 > a > .img-fluid').click();
    })

    it('Navigasi ke halaman rekening zakat', () => {

        cy.get(':nth-child(1) > .mb-0 > a > .img-fluid').click();

        cy.url().should('eq', 'https://kotayogya.baznas.go.id/rekening');
    });

    it('Berhasil copy rekening bca syariah', () => {

        cy.get(':nth-child(1) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 0461666877');
    });

    it('Berhasil copy rekening BPD DIY SYARIAH', () => {

        cy.get(':nth-child(2) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 801111000053');
    });

    it('Berhasil copy rekening BPD DIY', () => {

        cy.get(':nth-child(3) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 006111001057');
    });

    it('Berhasil copy rekening bank JOGJA', () => {

        cy.get(':nth-child(4) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 2020000001');
    });

    it('Berhasil copy rekening KB BUKOPIN SYARIAH', () => {

        cy.get(':nth-child(5) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 7709007310');
    });

    it('Berhasil copy rekening MAYBANK SYARIAH', () => {

        cy.get(':nth-child(6) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 2726000056');
    });

    it('Berhasil copy rekening CIMB NIAGA SYARIAH', () => {

        cy.get(':nth-child(7) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 861050505100');
    });

    it('Berhasil copy rekening MUAMALAT', () => {

        cy.get(':nth-child(8) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 5390001935');
    });

    it('Berhasil copy rekening BANK MANDIRI', () => {

        cy.get(':nth-child(9) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 1370050000989');
    });

    it('Berhasil copy rekening BRI', () => {

        cy.get(':nth-child(10) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 153101000007309');
    });

    it('Berhasil copy rekening BNI', () => {

        cy.get(':nth-child(11) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 1331441771');
    });

    it('Berhasil copy rekening BSI', () => {

        cy.get(':nth-child(12) > :nth-child(4) > .color-main').click();

        cy.get('.toast').should('be.visible');

        cy.get('.toast-message').should('contain', 'Tersalin 4441111113');
    });

    it('Navigasi ke API whatsapp', () => {
        // Kunjungi halaman utama

        const whatsappUrl = 'https://api.whatsapp.com/send/?phone=6282141232770&text&type=phone_number&app_absent=0';

        // Cari tombol WhatsApp dan pastikan membuka di tab yang sama
        cy.get('.d-lg-block > .btn-primary > .img-fluid')
            .click();  // Klik tombol

        // Pastikan bahwa request ke WhatsApp API dilakukan
        cy.request({
            url: whatsappUrl,
            failOnStatusCode: false // Agar Cypress tidak gagal jika ada error dari server
        }).then((response) => {
            // Verifikasi bahwa request ke WhatsApp API berhasil
            expect(response.status).to.eq(200); // Pastikan status response sukses
        });
    });

    it('Navigasi ke halaman konfirmasi zakat', () => {

        const zis = 'https://kotayogya.baznas.go.id/konfirmasi-zis';

        cy.get('.row > :nth-child(2) > a > img')
            .click();

        cy.request({
            url: zis,
            failOnStatusCode: false
        }).then((response) => {

            expect(response.status).to.eq(200);
        });
    });
});