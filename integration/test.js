context('Payroll Entry', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Payroll Entry', () => {
		cy.new_form("Payroll Entry");
		cy.fill_field("payroll_frequency", "Monthly", "Select");
		cy.fill_field("branch", "Vidyavihar", "Link");
		cy.fill_field("designation", "Writer", "Link");
		cy.save();
		cy.get_toolbar("Get Employees");
		cy.get_button("Create Salary Slips");
		cy.reload();
		cy.get_toolbar("Submit Salary Slip");
		cy.get_open_dialog().find('.btn-primary').click();
		cy.hide_dialog();
	});
});
