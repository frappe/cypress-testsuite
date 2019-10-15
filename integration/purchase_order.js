context('Purchase Order', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Purchase Order', () => {
		cy.new_form("Purchase Order");
		cy.fill_field("supplier", "Google India Pvt Ltd", "Link");
		cy.fill_table("items", [{"item_code": "ERPNext Functional Support", "schedule_date": "25-09-2019", "rate": "100000"}])
		cy.save();
		cy.get_toolbar("Create", "Receipt");
		cy.save();
		cy.submit();
		cy.get_toolbar("Create", "Invoice");
		cy.save();
		cy.submit();
		cy.get_toolbar("Create", "Payment");
		cy.fill_field("reference_no", "test");
		cy.fill_field("reference_date", "25-09-2019");
		cy.save();
		cy.submit();
		cy.get_toolbar("Ledger");
	});
});
