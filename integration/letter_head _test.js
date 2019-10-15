context('LetterHeadTest', () => {
    before(() => {
        cy.login()
        cy.visit('/desk')
    })

    it('test', () => {
        cy.new_form('Letter Head');
        cy.fill_field('letter_head_name', 'Test letter Head', 'Data');
        const fixtures = [{ filename: 'letterhead.png', mime_type: 'image/png' }];
        cy.upload_files(fixtures, 'image');
        cy.save();
    })
})
