## Update Attributes
Updates attributes that should be dynamic. For instance, ID's and label 'for' attributes should always be unique.


### Input (snippet, index)

##### snippet
The snippet which needs updating. This can be generated using the [query](https://help.objectiflune.com/en/planetpress-connect-user-guide/2020.1/#designer/API/query.htm%3FTocPath%3DTemplate%2520Design%7CScript%2520API%7CStandard%2520Script%2520API%7C_____11)
function from the script API, or the [results](https://help.objectiflune.com/en/planetpress-connect-user-guide/2020.1/#designer/API/results_Object.htm%3FTocPath%3DTemplate%2520Design%7CScript%2520API%7CStandard%2520Script%2520API%7Cresults%7C_____0)
object that is generated with every OL script. They are both a QueryResult object on which this function can run.

##### index


##### Out
The updated snippet is returned. Since the snippet is passed by reference, the snippet that is passed on as parameter is 
edited as well (the original). 

```text
UPDATEATTRIBUTES()


```
