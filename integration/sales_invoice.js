context('Sales Invoice', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Sales Invoice', () => {
		cy.new_form("Sales Invoice");
		cy.fill_field("customer", "test", "Link");
		cy.wait(1000);
		cy.fill_field("account_id", "crescent.erpnext.com");
		cy.fill_table("items", [{"item_code": "P25"}, {"item_code": "Paid Feature Development"}]);
		cy.fill_field("remarks", "test remark");
		cy.save();
		cy.submit();
		cy.get_toolbar("Create", "Payment");
		cy.fill_field("reference_no", "1234567890000");
		cy.fill_field("reference_date", "10-10-2019", "Date");
		cy.save();
		cy.submit();
		cy.get_button("Ledger");
	});
});
