context('COA_Importer', () => {
    before(() => {
        cy.login()
        cy.visit('/desk')
    })

    it('test', () => {
        cy.visit('/desk#Form/Chart of Accounts Importer/New Chart of Accounts Importer');
        cy.fill_field('company', 'Frappe Technologies', 'Link');
        const fixtures = [{ filename: 'Chart_of_Accounts_Importer.csv', mime_type: 'text/csv' }];
        cy.upload_files(fixtures, 'import_file');
    })
})