## Update Attributes
Updates attributes that should be dynamic. For instance, ID's and label 'for' attributes should always be unique.


### Input (set, update, attributes, template)

##### set: QueryResult
The set which needs updating. This can be generated using the [query](https://help.objectiflune.com/en/planetpress-connect-user-guide/2020.1/#designer/API/query.htm%3FTocPath%3DTemplate%2520Design%7CScript%2520API%7CStandard%2520Script%2520API%7C_____11)
function from the script API, or the [results](https://help.objectiflune.com/en/planetpress-connect-user-guide/2020.1/#designer/API/results_Object.htm%3FTocPath%3DTemplate%2520Design%7CScript%2520API%7CStandard%2520Script%2520API%7Cresults%7C_____0)
object that is generated with every OL script. They are both a QueryResult object on which this function can run.

##### update: number
To make it dynamic, an update is required. The update makes sure that every template is set specifically for this update
which makes it unique to every other template. Make sure to increment the update as required to improve the

##### attributes: string | string[]
The attributes that need changing are passed by array, or in case of one single attribute, by string.

##### template: string | regex
The template that will get replace with an update. This provides the ability to choose where to make the attributes of 
elements dynamic. By specifying a certain pattern that should get replaced, you can choose the position of the update.

### Output
The updated set is returned. Since the set is passed by reference, the set that is passed on as parameter is 
edited as well (the original).


### Examples
If you have the following html code:
```html
<form>
<input type="text" name="firstname__i__">
<input type="text" name="lastname__i__">
</form>
```
And you run the following script:
```typescript
updateAttributes(query('input'), 1, 'name', '__i__'); 
```
All inputs will receive an update on their name accordingly:
```html
<form>
<input type="text" name="firstname1">
<input type="text" name="lastname1">
</form>
```

---

If you have the following html and script:
```html
<form>
<div><input type="text" name="firstname__i__"></div>
<div><input type="text" name="firstname__i__"></div>
</form>
```
```typescript
query('div').each(function(update) {
    const allInputs = query('input', this);
    updateAttributes(allInputs, ++update, 'name', '__i__'); // note that update gets incremented BEFORE passing
});
```
The html code will be updated as follows:
```html
<form>
<div><input type="text" name="firstname1"></div>
<div><input type="text" name="firstname2"></div>
</form>
```
```text
UPDATEATTRIBUTES(set, update, attributes, template)
for each x in set:
  for each attr in attributes:
    if not hasAttribute(x, attr):
      continue
    old_value <- getAttributeValue(x, attr)
    new_value <- replace(template, update, old_value)
    setAttribute(x, new_value, attr)
```
