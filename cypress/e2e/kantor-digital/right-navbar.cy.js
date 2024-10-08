//* Test Scenario : memastikan navigasi right navbar berjalan berjalan dengan baik

describe('Memastikan navigasi right navbar berjalan berjalan dengan baik', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  })

  beforeEach(() => {
    cy.visit('https://kotayogya.baznas.go.id/');
  });

  /* 
  *test case 1 : Verifikasi pengguna berhasil beralih ke halaman beranda melalui hamburger bar
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar
  
  1. Buka hamburger bar
  2. Klik beranda
  
  Expected results : berhasil menampilkan beranda
  */

  it('TC-001 Verifikasi pengguna berhasil beralih ke halaman beranda melalui hamburger bar', () => {

    // Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // Klik beranda
    // Expected results : berhasil menampilkan beranda
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(1) > a').click()
    cy.title().should('eq', 'BAZNAS');

  })

  /* 
  *test case 2 : Verifikasi pengguna berhasil beralih ke halaman Profil BAZNAS dari menu TENTANG BAZNAS
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar dan menu TENTANG BAZNAS
  
  1. Buka hamburger bar
  2. Klik tentang BAZNAS
  3. Klik Profil BAZNAS
  
  Expected results : berhasil menampilkan halaman Profil BAZNAS https://kotayogya.baznas.go.id/baznas-profile
  */

  it('TC-002 Verifikasi pengguna berhasil beralih ke halaman Profil BAZNAS dari menu TENTANG BAZNAS', () => {

    // Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // Klik tentang BAZNAS
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

    // Klik Profil BAZNAS
    // Expected results : berhasil menampilkan halaman Profil BAZNAS https://kotayogya.baznas.go.id/baznas-profile
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-is-opening.menu-open > ul > li:nth-child(1) > a')
      .click()
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/baznas-profile')
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h4').contains("profil BAZNAS")

  })

  /* 
  *test case 3 : Verifikasi pengguna berhasil beralih ke halaman Struktur BAZNAS dari menu TENTANG BAZNAS
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar dan menu TENTANG BAZNAS
  
  1. Buka hamburger bar
  2. Klik tentang BAZNAS
  3. Klik struktur BAZNAS
  
  Expected results : berhasil menampilkan halaman struktur BAZNAS https://kotayogya.baznas.go.id/struktur-baznas
  */

  it('TC-003 Verifikasi pengguna berhasil beralih ke halaman Struktur BAZNAS dari menu TENTANG BAZNAS', () => {

    // Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // Klik tentang BAZNAS
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

    // Klik Struktur BAZNAS
    //     Expected results : berhasil menampilkan halaman struktur BAZNAS https://kotayogya.baznas.go.id/struktur-baznas
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(2) > a')
      .click()
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/struktur-baznas')
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("Pimpinan")

  })

  /* 
  *test case 4 : Verifikasi pengguna berhasil beralih ke halaman detail profil pimpinan BAZNAS
  Pre-conditions : User membuka menu struktur BAZNAS
  
  1. Buka hamburger bar
  2. Klik tentang BAZNAS
  3. Klik struktur BAZNAS
  4. klik profil ketua -> go back
  5. klik profil wakil ketua 1 -> go back
  6. klik profil wakil ketua 2 -> go back
  7. klik profil wakil ketua 3 -> go back
  8. klik profil wakil ketua 4 -> go back
  
  Expected results : berhasil menampilkan halaman detail profil pimpinan BAZNAS sesuai pada halaman struktur BAZNAS
  */

  it('TC-004 Verifikasi pengguna berhasil beralih ke halaman detail profil pimpinan BAZNAS', () => {

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

    // 4. klik profil ketua -> go back
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div:nth-child(1) > a').click()
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h1').contains("Drs. H. Syamsul Azhari")
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h4:nth-child(2)').contains("Ketua")
    cy.go('back')

    // 5. klik profil wakil ketua 1 -> go back
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div:nth-child(2) > a').click()
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h1').contains("Drs. Abd Samik")
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h4:nth-child(2)').contains("Wakil Ketua 1")
    cy.go('back')

    // 6. klik profil wakil ketua 2 -> go back
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div:nth-child(3) > a').click()
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h1').contains("Drs. Abd Samik")
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h4:nth-child(2)').contains("Wakil Ketua 2")
    cy.go('back')

    // 7. klik profil wakil ketua 3 -> go back
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div:nth-child(4) > a').click()
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h1').contains("Muhammad Iqbal, SE")
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h4:nth-child(2)').contains("Wakil Ketua 3")
    cy.go('back')

    // 8. klik profil wakil ketua 4 -> go back
    // Expected results : berhasil menampilkan halaman detail profil pimpinan BAZNAS sesuai pada halaman struktur BAZNAS
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > div:nth-child(5) > a').click()
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h1').contains("Dr. Adi Soeprapto, S.Sos., M.Si.")
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-3 > h4:nth-child(2)').contains("Wakil Ketua 4")
    cy.go('back')

    cy.get(':nth-child(1) > a > .card > .img-fluid').then(() => {
      const apiUrl = 'https://simba.baznas.go.id/https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=amilphotos/attachments/amilphotos/amil_13240_photo_20240308094517.jpg';
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
      });
      cy.title('404 Page Not Found').should('not.exist')

    });

  })
  /* 
  *test case 5 : Verifikasi pengguna berhasil beralih ke halaman penghargaan dari menu TENTANG BAZNAS
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar dan menu TENTANG BAZNAS
  
  1. Buka hamburger bar
  2. Klik tentang BAZNAS
  3. Klik Penghargaan
  
  Expected results : berhasil menampilkan halaman penghargaan
  */

  it('TC-005 Verifikasi pengguna berhasil beralih ke halaman penghargaan dari menu TENTANG BAZNAS', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik tentang BAZNAS
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

    // 3. Klik Penghargaan
    //     Expected results : berhasil menampilkan halaman penghargaan
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(3) > a').click()
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/penghargaan')
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("penghargaan")
  })

  /* 
  *test case 6 : Verifikasi halaman penghargaan sesuai tahun yang dipilih oleh user
  Pre-conditions : User membuka menu penghargaan
  
  1. Buka hamburger bar
  2. Klik tentang BAZNAS
  3. Klik menu Penghargaan
  4. klik semua untuk menampilkan penghargaan
  5. klik 2022 untuk menampilkan penghargaan
  6. klik 2021 untuk menampilkan penghargaan
  7. klik 2020 untuk menampilkan penghargaan
  8. klik 2019 untuk menampilkan penghargaan
  9. klik 2018 untuk menampilkan penghargaan
  10. klik 2017 untuk menampilkan penghargaan
  11. klik 2016 untuk menampilkan penghargaan
  12. klik 2015 untuk menampilkan penghargaan
  13. klik 2014 untuk menampilkan penghargaan
  14. cek ketersediaan tahun pada list tahun
  
  Expected results : berhasil menampilkan penghargaan sesuai tahun yang dipilih
  Unexpected results : menampilkan penghargaan tidak sesuai tahun yang dipilih
  */

  it('TC-006 Verifikasi halaman penghargaan sesuai tahun yang dipilih oleh user', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik tentang BAZNAS
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

    // 3. Klik menu Penghargaan
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(3) > a').click()
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/penghargaan')
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains("penghargaan")

    // 4. klik semua untuk menampilkan penghargaan
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-5.pl-2.pr-2.text-center > div.d-none.d-sm-block > div > div:nth-child(1) > button')
      .click()

    const years = ['2023', '2022', '2021']

    // Seleksi elemen dengan selector yang diberikan
    const selector = '#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div.col-12.mt-5.pl-2.pr-2.text-center > div.row.mt-3';

    // Loop untuk memastikan setiap tahun ada di selector
    years.forEach(year => {
      cy.get(selector)
        .contains(year) // Mencari selector yang mengandung teks tahun
        .should('exist'); // Pastikan elemen tersebut ada
    })

    // 5. klik 2022 untuk menampilkan penghargaan
    cy.get('div.d-none > [style="border:0px solid;display:inline-block;"] > :nth-child(2) > .button')
      .click();

    // Pastikan hanya penghargaan tahun 2022 yang ada dan tidak ada tahun lainnya
    cy.get(selector).within(() => {
      cy.contains('2022').should('exist'); // Pastikan penghargaan tahun 2022 muncul
      cy.contains('2023', '2024').should('not.exist'); // Pastikan tahun 2023 tidak muncul
    });


    // 6. klik 2021 untuk menampilkan penghargaan
    cy.get('div.d-none > [style="border:0px solid;display:inline-block;"] > :nth-child(3) > .button')
      .click();

    // Pastikan hanya penghargaan tahun 2021 yang ada dan tidak ada tahun lainnya
    // Expected results : berhasil menampilkan penghargaan sesuai tahun yang dipilih
    cy.get(selector).within(() => {
      cy.contains('2021').should('exist'); // Pastikan penghargaan tahun 2021 muncul
      cy.contains('2023').should('not.exist'); // Pastikan tahun 2023 tidak muncul
      cy.contains('2024').should('not.exist'); // Pastikan tahun 2024 tidak muncul

    });
  })

  /*
  *test case 7 : Verifikasi pengguna berhasil beralih ke halaman Mitra BAZNAS dari menu TENTANG BAZNAS
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar dan menu TENTANG BAZNAS
  
  1. Buka hamburger bar
  2. Klik tentang BAZNAS
  3. Klik menu Mitra BAZNAS
  
  
  Expected results : berhasil menampilkan halaman mitra baznas https://kotayogya.baznas.go.id/mitra-baznas
  */

  it('TC-007 Verifikasi pengguna berhasil beralih ke halaman Mitra BAZNAS dari menu TENTANG BAZNAS', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik tentang BAZNAS
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

    // 3. klik menu mitra baznas
    // Expected results : berhasil menampilkan halaman mitra baznas https://kotayogya.baznas.go.id/mitra-baznas

    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(4) > a').click()

    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > div > img').should('exist')
  })
  /*
  *test case 8 : Verifikasi pengguna berhasil beralih ke halaman Pemberitahuan dari menu TENTANG BAZNAS
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar dan menu TENTANG BAZNAS
  
  1. Buka hamburger bar
  2. Klik tentang BAZNAS
  3. Klik menu Pemberitahuan
  
  Expected results : berhasil menampilkan halaman mitra baznas https://kotayogya.baznas.go.id/pemberitahuan
  */

  it('TC-008 Verifikasi pengguna berhasil beralih ke halaman Pemberitahuan dari menu TENTANG BAZNAS', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik tentang BAZNAS
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

    // 3. klik menu pemberitahuan
    // Expected results : berhasil menampilkan halaman mitra baznas https://kotayogya.baznas.go.id/pemberitahuan
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(5) > a').click()
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains('pemberitahuan')
    cy.get('.table').should('exist')

  })

  /*
  *test case 9 : Verifikasi file pada halaman Pemberitahuan dapat ditampilkan
  Pre-conditions : User membuka halaman Pemberitahuan
  
  1. Buka hamburger bar
  2. Klik tentang BAZNAS
  3. Klik menu Pemberitahuan
  4. klik 2022 untuk menampilkan Pemberitahuan
  5. klik 2021 untuk menampilkan Pemberitahuan
  6. klik 2020 untuk menampilkan Pemberitahuan
  7. klik 2019 untuk menampilkan Pemberitahuan
  8. klik 2018 untuk menampilkan Pemberitahuan
  9. klik 2017 untuk menampilkan Pemberitahuan
  10. klik 2016 untuk menampilkan Pemberitahuan
  11. klik 2015 untuk menampilkan Pemberitahuan
  12. klik 2014 untuk menampilkan Pemberitahuan
  
  Expected results : berhasil menampilkan file pemberitahuan disetiap tahunnya
  Unexpected results : tidak menampilkan file pemberitahuan disetiap tahunnya
  */

  it('TC-009 Verifikasi file pada halaman Pemberitahuan dapat ditampilkan', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik tentang BAZNAS
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

    // 3. klik menu mitra baznas
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul > li:nth-child(5) > a').click()
    cy.get('#control_sidebar > div > div > div.content-wrapper > section > div > div > div > div:nth-child(1) > h4').contains('pemberitahuan')

    // 4. klik 2022 untuk menampilkan Pemberitahuan
    cy.get('tbody > :nth-child(1) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')

    // 5. klik 2021 untuk menampilkan Pemberitahuan
    cy.get('tbody > :nth-child(2) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')

    // 6. klik 2020 untuk menampilkan Pemberitahuan
    cy.get(':nth-child(3) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')

    // 7. klik 2019 untuk menampilkan Pemberitahuan
    cy.get(':nth-child(4) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')

    // 8. klik 2018 untuk menampilkan Pemberitahuan
    cy.get(':nth-child(5) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')

    // 9. klik 2017 untuk menampilkan Pemberitahuan
    cy.get(':nth-child(6) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')

    // 10. klik 2016 untuk menampilkan Pemberitahuan
    cy.get(':nth-child(7) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')

    // 11. klik 2015 untuk menampilkan Pemberitahuan
    cy.get(':nth-child(8) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')

    // 12. klik 2014 untuk menampilkan Pemberitahuan
    cy.get(':nth-child(9) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')

    // 11. klik 2013 untuk menampilkan Pemberitahuan
    cy.get(':nth-child(10) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')

    // 12. klik 2012 untuk menampilkan Pemberitahuan
    // Expected results : berhasil menampilkan file pemberitahuan disetiap tahunnya
    cy.get(':nth-child(11) > :nth-child(3) > a > .fas').click()
    cy.title('404 Page Not Found').should('not.exist')
  })

  /*
  *test case 10 : Verifikasi pengguna berhasil beralih ke halaman Kontak BAZNAS dari menu TENTANG BAZNAS
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar dan menu TENTANG BAZNAS
  
  1. Buka hamburger bar
  2. Klik tentang BAZNAS
  3. Klik menu kontak BAZNAS
  
  Expected results : berhasil menampilkan halaman Kontak BAZNAS https://kotayogya.baznas.go.id/kontak-baznas
  */

  it('TC-010 Verifikasi file pada halaman Pemberitahuan dapat ditampilkan', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik tentang BAZNAS
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li:nth-child(2) > a').click()

    // 3. Klik menu kontak BAZNAS
    // Expected results : berhasil menampilkan halaman Kontak BAZNAS https://kotayogya.baznas.go.id/kontak-baznas
    cy.get('.menu-open > .nav > :nth-child(6) > .nav-link > p').click()
    cy.get('.text').contains('Kontak BAZNAS')
    cy.get('center > iframe').should('exist')

  })

  /*
  *test case 11 : Verifikasi pengguna berhasil beralih ke halaman Berita dari right navbar
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar
   
  1. Buka hamburger bar
  2. Klik BERITA
   
  Expected results : berhasil menampilkan halaman BERITA https://kotayogya.baznas.go.id/news
  */

  it('TC-011 Verifikasi pengguna berhasil beralih ke halaman Berita dari right navbar', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik BERITA
    cy.get('.nav-pills > :nth-child(3) > .nav-link').click()

    // Expected results : berhasil menampilkan halaman BERITA https://kotayogya.baznas.go.id/news
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/news')
    cy.get('.active > .item > .bg-main > .d-none').should('exist')
  })

  /*
  *test case 12 : Verifikasi pengguna berhasil beralih ke halaman agenda pimpinan dari right navbar
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar
   
  1. Buka hamburger bar
  2. Klik AGENDA PIMPINAN
   
  Expected results : berhasil menampilkan halaman AGENDA PIMPINAN https://kotayogya.baznas.go.id/agenda-pimpinan-all
  */

  it('TC-012 Verifikasi pengguna berhasil beralih ke halaman agenda pimpinan dari right navbar', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik agenda pimpinan
    cy.get('.nav-pills > :nth-child(4) > .nav-link').click()

    // Expected results : berhasil menampilkan halaman AGENDA PIMPINAN https://kotayogya.baznas.go.id/agenda-pimpinan-all
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/agenda-pimpinan-all')
  })

  /*
  *test case 13 : Verifikasi pengguna berhasil beralih ke halaman Konfirmasi ZIS dari menu LAYANAN
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar dan menu LAYANAN
   
  1. Buka hamburger bar
  2. Klik LAYANAN
  3. Klik menu Konfirmasi ZIS
   
   
  Expected results : berhasil menampilkan halaman Konfirmasi ZIS https://kotayogya.baznas.go.id/konfirmasi-zis
  */

  it('TC-013 Verifikasi pengguna berhasil beralih ke halaman Konfirmasi ZIS dari menu LAYANAN', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik LAYANAN
    cy.get(':nth-child(5) > [href="#"]').click()
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul').should('be.visible')

    // 3. klik menu Konfirmasi ZIS
    cy.get('.menu-is-opening > .nav > :nth-child(1) > .nav-link').click()

    // Expected results : berhasil menampilkan halaman Konfirmasi ZIS https://kotayogya.baznas.go.id/konfirmasi-zis
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/konfirmasi-zis')
    cy.get('.mt-1 > :nth-child(1)').should('exist')

  })

  /*
  *test case 14 : Verifikasi pengguna berhasil beralih ke halaman Kalkulator Zakat dari menu LAYANAN
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar dan menu LAYANAN
   
  1. Buka hamburger bar
  2. Klik LAYANAN
  3. Klik menu Kalkulator Zakat
   
   
  Expected results : berhasil menampilkan halaman Kalkulator Zakat https://kotayogya.baznas.go.id/kalkulator-zakat
  */

  it('TC-014 Verifikasi pengguna berhasil beralih ke halaman Kalkulator Zakat dari menu LAYANAN', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik LAYANAN
    cy.get(':nth-child(5) > [href="#"]').click()
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul').should('be.visible')

    // 3. klik menu Kalkulator Zakat
    cy.get('.menu-is-opening > .nav > :nth-child(2) > .nav-link').click()

    // Expected results : berhasil menampilkan halaman Kalkulator Zakat https://kotayogya.baznas.go.id/kalkulator-zakat
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/kalkulator-zakat')
    cy.get('.pb-5 > :nth-child(1)').should('exist')
  })

  /*
  *test case 15 : Verifikasi pengguna berhasil beralih ke halaman Info Rekening Zakat dari menu LAYANAN
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar dan menu LAYANAN
   
  1. Buka hamburger bar
  2. Klik LAYANAN
  3. Klik menu Info Rekening Zakat
   
   
  Expected results : berhasil menampilkan halaman Info Rekening Zakat https://kotayogya.baznas.go.id/rekening
  */

  it('TC-015 Verifikasi pengguna berhasil beralih ke halaman Info Rekening Zakat dari menu LAYANAN', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik LAYANAN
    cy.get(':nth-child(5) > [href="#"]').click()
    cy.get('#control_sidebar > div > div > aside > div > nav > ul > li.nav-item.has-treeview.menu-open > ul').should('be.visible')

    // 3. klik menu Info Rekening Zakat
    cy.get('.menu-is-opening > .nav > :nth-child(3) > .nav-link').click()

    // Expected results : berhasil menampilkan halaman Info Rekening Zakat https://kotayogya.baznas.go.id/rekening
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/rekening')
    cy.get('.card-body > :nth-child(1)').should('exist')

  })

  /*
  *test case 16 : Verifikasi pengguna berhasil beralih ke halaman Keuangan dari menu LAPORAN
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar dan menu LAPORAN
   
  1. Buka hamburger bar
  2. Klik LAPORAN
  3. Klik menu Keuangan
   
   
  Expected results : berhasil menampilkan halaman Keuangan https://kotayogya.baznas.go.id/keuangan
  */

  it('TC-016 Verifikasi pengguna berhasil beralih ke halaman Keuangan dari menu LAPORAN', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik LAPORAN
    cy.get(':nth-child(6) > [href="#"] > .text-uppercase').parent().click()

    // 3. klik menu Keuangan
    cy.get('.menu-open > .nav > .nav-item > .nav-link').click()

    // Expected results : berhasil menampilkan halaman Keuangan https://kotayogya.baznas.go.id/keuangan
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/keuangan')
    cy.get('.card-body > :nth-child(1)').should('exist')
  })

  /*
  *test case 17 : Verifikasi file pada halaman keuangan dapat diakses
  Pre-conditions : User membuka halaman keuangan
   
  1. Buka hamburger bar
  2. Klik LAPORAN
  3. Klik menu Keuangan
  4. klik button download pada laporan 2023
  5. klik button download pada laporan 2022
  6. klik button download pada laporan 2021
  7. klik button download pada laporan 2020
  8. klik button download pada laporan 2019
  9. klik button download pada laporan 2018
  10. klik button download pada laporan 2017
  11. klik button download pada laporan 2016
  12. klik button download pada laporan 2015
   
  Expected results : berhasil menampilkan file yang dipilih pada halaman Keuangan
  */

  it('TC-017 Verifikasi file pada halaman keuangan dapat diakses', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik LAPORAN
    cy.get(':nth-child(6) > [href="#"] > .text-uppercase').parent().click()

    // 3. klik menu Keuangan
    cy.get('.menu-open > .nav > .nav-item > .nav-link').click()

    // url harus sesuai, card body harus ada, table harus ada
    // Expected results : berhasil menampilkan file yang dipilih pada halaman Keuangan
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/keuangan')
    cy.get('.card-body > :nth-child(1)').should('exist')
    cy.get('embed').should('exist')
    cy.get('.table').should('exist')

    // 4. klik button download pada laporan 2023
    cy.get(':nth-child(1) > [width="55"] > a.color-main > .fas').click().then(() => {
      const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/laporan/841-BAZNAS%20KOTA%20YOGYAKARTA%202023%20-%20Audited_compressed.pdf';
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    // 5. klik button download pada laporan 2022
    cy.get(':nth-child(2) > [width="55"] > a.color-main > .fas').click().then(() => {
      const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/laporan/334-BAZNAS%20KOTA%20YOGYAKARTA%202022%20-%20AuditedA_compressed.pdf';
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    // 6. klik button download pada laporan 2021
    cy.get(':nth-child(3) > [width="55"] > a.color-main > .fas').click().then(() => {
      const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/laporan/211-Laporan%20Keuangan%202021%20Audited.pdf';
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    // 7. klik button download pada laporan 2020
    cy.get(':nth-child(4) > [width="55"] > a.color-main > .fas').click().then(() => {
      const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/laporan/266-Laporan%20Keuangan%202020%20Audited.pdf';
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    // 8. klik button download pada laporan 2019
    cy.get(':nth-child(5) > [width="55"] > a.color-main > .fas').click().then(() => {
      const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/laporan/272-Laporan%20Keuangan%202019%20Audited.pdf';
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    // 9. klik button download pada laporan 2018
    cy.get(':nth-child(6) > [width="55"] > a.color-main > .fas').click().then(() => {
      const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/laporan/179-Laporan%20Keuangan%202018%20Audited.pdf';
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    // 10. klik button download pada laporan 2017
    cy.get(':nth-child(7) > [width="55"] > a.color-main > .fas').click().then(() => {
      const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/laporan/';
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
      })
    });


    // 11. klik button download pada laporan 2016
    cy.get(':nth-child(8) > [width="55"] > a.color-main > .fas').click().then(() => {
      const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/laporan/639-Laporan%20Keuangan%202016%20Audited.pdf';
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    // 12. klik button download pada laporan 2015
    cy.get(':nth-child(9) > [width="55"] > a.color-main > .fas').click().then(() => {
      const apiUrl = 'https://bucket-api.baznas.go.id/bucket-api/file?bucket=bzn-fdr-smb-p5739641&file=attachments/laporan/';
      cy.request('GET', apiUrl).then((response) => {
        expect(response.status).to.eq(200);
      })
    });
  })

  /*
  *test case 18 : Verifikasi pengguna berhasil beralih ke halaman JARINGAN dari right navbar
  Pre-conditions : User membuka right navbar dengan mengklik hamburger bar
   
  1. Buka hamburger bar
  2. Klik JARINGAN
   
  Expected results : berhasil menampilkan halaman Jaringan https://kotayogya.baznas.go.id/jaringan
  */

  it('TC-018 Verifikasi pengguna berhasil beralih ke halaman JARINGAN dari right navbar', () => {

    // 1. Buka hamburger bar
    cy.get('.navbar-nav > .nav-item > .nav-link').click();
    cy.get('.sidebar').should('be.visible');

    // 2. Klik JARINGAN
    cy.get(':nth-child(7) > .nav-link').click()

    // Expected results : berhasil menampilkan halaman Keuangan https://kotayogya.baznas.go.id/keuangan
    cy.url().should('eq', 'https://kotayogya.baznas.go.id/jaringan')
    cy.get('.collapsed').click()
    cy.get('#kota > ol').should('exist')
  })
})