// Test case for creating a simple Sales Invoice, with partial payment entry.

context('Table MultiSelect', () => {
	beforeEach(() => {
		cy.login();
	});

	it('Generate Sales Invoice', () => {
		cy.new_form("Sales Invoice");
		cy.fill_field("Customer", "test", "Link");
  		cy.fill_table("items", [{"item_code": "Test Item"} ,{"quantity": "2"}, {"basic_rate": "300"}]);
		cy.save();
		cy.fill_field("Sales Taxes and Charges Template", "In State", "Link");
	    	cy.save();
    		cy.submit();
    		// Creating a payment entry against a Sales Invoice.
    		cy.get_toolbar("Create", "Payment Entry");
		cy.wait(1000);
   		cy.fill_field("Mode of Payment", "Credit Card");
    		// Ensure Paid To account is fetched after selecting mode of payment.
    		cy.wait(100);
    		cy.fill_field("Paid Amount", "500");
    		cy.fill_field("reference_no", "UV6FU675");
    		cy.fill_field("reference_date", "UV6FU675");
		cy.save();
		cy.submit();
    		cy.get_button("Ledger");
	});
});
