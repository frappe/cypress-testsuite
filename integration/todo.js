context('ToDo Test', () => {
    before(() => {
		cy.login();
		cy.visit('/desk');
	});

    it('list todos', () => {
        cy.go_to_list('ToDo');
        cy.fill_filter('Status', 'Open')
    })
})