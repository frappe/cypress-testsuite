# List of commands offered by frappe test suite

## cy.login(email,password)
Login as given user.
### Parameters:
- email (string): email address of the user.
- password (string): password of the user.
### Example
```javascript
cy.login("Administrator","qwertyuiop");
```

## cy.call(method,args)

Calls an API method as a `POST` request.

### Parameters:
- method (string): method to be called
- args (object): arguments to be passed to the method called

### Example:

```javascript
cy.call('frappe.core.doctype.user.user.get_role_profile', {
    role_profile: 'Test'
});
```

## cy.create_records

## cy.get_field(fieldname,fieldtype)

Get selector for a specific field from currennt document form.

### Parameters:

- fieldname (string): fieldname of the field
- fieldtype (string): fieldtype of the field

### Example:

In the employee form
```javascript
cy.get_field('full_name','data');
```

## cy.fill_field(fieldname,value,fieldtype)

Set value for specified field in current document form.

### Parameters:

- fieldname (string): fieldname of the field
- value (string) : value to be set
- fieldtype (string): fieldtype of the field

### Example:

In employee form
```javascript
cy.fill_field('first_name','frappe','data');
```

## cy.fill_table(tablename,rows)

Fill a child table with specified rows in current document form.

### Parameters:

- tablename (string): name of the child table
- rows (array of objects): array of rows, with each row as an object

### Example:
In quotation form
```javascript
cy.fill_table("items", [{"item_code": "P25","qty":"2.00"}])
```

## cy.get_toolbar(fieldname,action)

Get an element from the toolbar and click on it.

### Parameters:
- fieldname (string): name of the toolbar element to be clicked
- action (string)(optional): name of the action under the toolbar that needs to be clicked

### Example:
Within lead form
```javascript
cy.get_toolbar("Create", "Opportunity");
```

## cy.get_button(fieldname)
Click on a button within the current form.

### Parameters:
- fieldname : name of the button to be clicked

### Example:
In inoice view
```javascript
cy.get_button("Ledger");
```

## cy.awesomebar(text)
Search for specified text in the awesomebar.

### Parameters:
- text (string): text to be searched

### Example
```
cy,awesomebar("5+8")
```

## cy.new_form(doctype)

Open the form to create new document of specified doctype.

### Parameters:

- doctype (string): name of the doctype for which new document needs to be created

### Example:

```javascript
cy.new_form("Lead")
```

## cy.go_to_form(docype,docname)

Open specified document form.

### Parameters:
- doctype (string): Document type of the form to be opened
- docname (string): Document name of the form to be opened

### Example:

```javascript
cy.go_to_form("Lead","Test Lead");
```

## cy.go_to_list(doctype)
Open the list for the specified doctype.

### Parameters:
- doctype (string) : Document Type of the list to be opened.

### Example:

```javascript
cy.go_to_list("Lead")
```

## cy.go_to_report(doctype)
Open report view for specified doctype.

### Parameters:
- doctype (string) : Document Type of the report to be opened.

### Example
```javascript
cy.go_to_report("Lead")
```

## cy.clear_cache()

Clear cache.

### Parameters

None

### Example

```javascript
cy.clear_cache()
```

## cy.dialog(opts)

Open a dialog with specified options.

### Parameters

- opts (object): [options](https://frappe.io/docs/user/en/api/dialog) to generate specified dialog.

### Example
```javascript
cy.dialog({
			title: 'Rating',
			fields: [{
				'fieldname': 'rate',
				'fieldtype': 'Rating',
			}]
        });
```

## cy.get_open_dialog()

Get open dialogs.
Returns `selector` object of open dialog.

### Parameters

None

### Example

```javascript
cy.get_open_dialog()
```

## cy.hide_dialog()
Close currently open dialogs.

### Parameters
None

### Example

```javascript
cy.hide_dialog()
```

## cy.save()

Save the currently open form.

### Parameters

None

### Example
In any form 
```javascript
cy.save()
```

## cy.submit()

Submit the current form if it is submittable.

### Parameters

None

### Example

In any form view
```javascript
cy.submit()
```

## cy.fill_filter(label,value)

Fill the current doc form filter with specified value.

### Parameters

- label (string): name of the filter field.
- value (string): value to be filled in filter field.

### Example

```javascript
cy.fill_filter('Status','Open')
```

## cy.upload_files(files,fieldname)
Upload files to the current document form under the specified field.

### Parmeters
- files (array): list of files that are to be uploaded.
- fieldname (string): name of the field in which the files are to be attached.

### Example

```
const fixtures = [{ filename: 'letterhead.png', mime_type: 'image/png' }];
cy.upload_files(fixtures, 'image');
```

## cy.find_in_list(value)
Find specified value in list view.
List view needs to be open.

### Parameters

- value (string): value that needs to be searched for.

### Example

In lead list
```javascript
cy.find_in_list('Test Lead')
```

## cy.sidebar()

Interact with the specified sidebar element.

### Parameters

- fieldname (string): fieldname of the element on the sidebar.
- dropdown (boolean): check if the current field is a dropdown field.
- search (boolean) check if the current field is a search field.
- value (string) value for dropdown/search field.

### Example
```javscript

```