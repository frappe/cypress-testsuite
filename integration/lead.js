context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Purchase Order', () => {
		cy.new_form("Lead");
		cy.fill_field("lead_name", "Test lead");
		cy.fill_field("contact_date", "27-10-2019 16:49:42", "Datetime");
		cy.fill_field("type", "Client", "Select");
		cy.save();
		cy.get_toolbar("Create", "Opportunity");
		cy.wait(1000);
		cy.save();
		cy.get_toolbar("Create", "Quotation");
		cy.fill_table("items", [{"item_code": "P25", "qty": "2.00"}])
		cy.save();
		cy.submit();
	});
});
