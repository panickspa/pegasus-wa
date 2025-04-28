## Constants

<dl>
<dt><a href="#variablesValueString">variablesValueString</a> ⇒ <code>string</code></dt>        
<dd><p>parsing JSON to insert values</p>
</dd>
<dt><a href="#getVarWithTimeout">getVarWithTimeout</a> ⇒ <code>Promise.&lt;DataResponse, Error&gt;</code></dt>
<dd></dd>
<dt><a href="#getPublication">getPublication</a> ⇒ <code>Promise.&lt;DataResponse, Error&gt;</code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#getData">getData(query, db)</a> ⇒ <code>Promise.&lt;SQLiteDatabase&gt;</code></dt>
<dd></dd>
<dt><a href="#getParts">getParts(q)</a> ⇒ <code>Array</code></dt>
<dd><p>Get parts for initiating model</p>
</dd>
<dt><a href="#genText">genText(t)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#chainRequest">chainRequest(p, attempt, db)</a> ⇒ <code>string</code> | <code>Array.&lt;Array.&lt;TitlePublikasi&gt;, Array.&lt;DatabaseVariable&gt;&gt;</code></dt>
<dd></dd>
<dt><a href="#analyze">analyze(v)</a> ⇒ <code><a href="#JSONAnalyzed">JSONAnalyzed</a></code></dt>
<dd><p>Analyze data from dynamic table</p>
</dd>
<dt><a href="#analyzeDataFromHTML">analyzeDataFromHTML(html)</a> ⇒ <code><a href="#HTMLAnalayzed">HTMLAnalayzed</a></code></dt>
<dd></dd>
<dt><a href="#transformApi">transformApi(data)</a> ⇒ <code>string</code></dt>
<dd><p>Transforming API to html</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#variabel">variabel</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#turvar">turvar</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#variable">variable</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Paginations">Paginations</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#VarObject">VarObject</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#VarApi">VarApi</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#VarResp">VarResp</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DataResponse">DataResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DatabaseVariable">DatabaseVariable</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#TitlePublikasi">TitlePublikasi</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#pertanyaan">pertanyaan</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#JSONAnalyzed">JSONAnalyzed</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#HTMLAnalayzed">HTMLAnalayzed</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="variablesValueString"></a>

## variablesValueString ⇒ <code>string</code>
parsing JSON to insert values

**Kind**: global constant

| Param | Type |
| --- | --- |
| e | [<code>DatabaseVariable</code>](#DatabaseVariable) |

<a name="getVarWithTimeout"></a>

## getVarWithTimeout ⇒ <code>Promise.&lt;DataResponse, Error&gt;</code>
**Kind**: global constant

| Param | Type |
| --- | --- |
| uri | <code>string</code> |
| timeout | <code>number</code> |

<a name="getPublication"></a>

## getPublication ⇒ <code>Promise.&lt;DataResponse, Error&gt;</code>
**Kind**: global constant

| Param | Type |
| --- | --- |
| uri | <code>string</code> |
| timeout | <code>number</code> |

<a name="getData"></a>

## getData(query, db) ⇒ <code>Promise.&lt;SQLiteDatabase&gt;</code>
**Kind**: global function

| Param | Type |
| --- | --- |
| query | <code>string</code> |
| db | <code>SQLiteDatabase</code> |

<a name="getParts"></a>

## getParts(q) ⇒ <code>Array</code>
Get parts for initiating model

**Kind**: global function
**Returns**: <code>Array</code> - Array of parts

| Param | Type | Description |
| --- | --- | --- |
| q | <code>string</code> | Question of input |

<a name="genText"></a>

## genText(t) ⇒ <code>string</code>
**Kind**: global function

| Param | Type |
| --- | --- |
| t | <code>String</code> |

<a name="chainRequest"></a>

## chainRequest(p, attempt, db) ⇒ <code>string</code> \| <code>Array.&lt;Array.&lt;TitlePublikasi&gt;, Array.&lt;DatabaseVariable&gt;&gt;</code>
**Kind**: global function

| Param | Type |
| --- | --- |
| p | [<code>pertanyaan</code>](#pertanyaan) |
| p.pertanyaan | <code>String</code> |
| attempt | <code>number</code> |
| db | <code>SQLiteDatabase</code> |

<a name="analyze"></a>

## analyze(v) ⇒ [<code>JSONAnalyzed</code>](#JSONAnalyzed)
Analyze data from dynamic table

**Kind**: global function

| Param | Type |
| --- | --- |
| v | <code>number</code> |

<a name="analyzeDataFromHTML"></a>

## analyzeDataFromHTML(html) ⇒ [<code>HTMLAnalayzed</code>](#HTMLAnalayzed)
**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| html | <code>string</code> | String of HTML |

<a name="transformApi"></a>

## transformApi(data) ⇒ <code>string</code>
Transforming API to html

**Kind**: global function
**Returns**: <code>string</code> - - string of HTMLData from JSONData

| Param | Type |
| --- | --- |
| data | [<code>DataResponse</code>](#DataResponse) |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The status of the data response. |
| data-availability | <code>string</code> | Indicates if the data is available. |
| var | [<code>Array.&lt;VarResp&gt;</code>](#VarResp) | An array of VarResp objects. |        
| turvar | [<code>Array.&lt;turvar&gt;</code>](#turvar) | An array of turvar objects. |        
| labelvervar | <code>string</code> | A string representing the label version of var. |        
| vervar | [<code>Array.&lt;turvar&gt;</code>](#turvar) | Another array of turvar objects. |   
| tahun | [<code>Array.&lt;turvar&gt;</code>](#turvar) | An array representing years (turvar objects). |
| turtahun | [<code>Array.&lt;turvar&gt;</code>](#turvar) | Another array representing years (turvar objects). |
| datacontent | <code>Array.&lt;string, number&gt;</code> | An object where keys are strings and values are numbers. |

<a name="variabel"></a>

## variabel : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| val | <code>string</code> \| <code>number</code> | The value of the variable. |
| label | <code>string</code> \| <code>number</code> | The label of the variable. |
| id | <code>string</code> \| <code>number</code> | The ID of the variable. |
| unit | <code>string</code> | The unit of the variable. |
| subj | <code>string</code> | The subject of the variable. |
| def | <code>string</code> | The definition of the variable. |
| decimal | <code>string</code> \| <code>number</code> | The number of decimal places for the variable. |
| note | <code>string</code> | A note about the variable. |

<a name="turvar"></a>

## turvar : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| val | <code>string</code> \| <code>number</code> | The value. |
| label | <code>string</code> \| <code>number</code> | The label. |

<a name="variable"></a>

## variable : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| var_id | <code>number</code> | The ID of the variable. |
| kategori_data | <code>string</code> | The data category. |
| judul | <code>string</code> | The title. |
| satuan | <code>string</code> | The unit of measurement. |
| wilayah | <code>string</code> | The region or area. |
| domain | <code>string</code> | The domain of the variable. |
| var_id_domain | <code>string</code> | The domain-specific variable ID. |

<a name="Paginations"></a>

## Paginations : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| page | <code>number</code> | The current page number. |
| per_page | <code>number</code> | The number of items per page. |
| pages | <code>number</code> | The total number of pages. |
| count | <code>number</code> | The number of items in the current response. |
| total | <code>number</code> | The total number of items. |

<a name="VarObject"></a>

## VarObject : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| var_id | <code>number</code> | The variable ID. |
| title | <code>string</code> | The title of the variable. |
| sub_id | <code>number</code> | The sub-category ID. |
| sub_name | <code>string</code> | The name of the sub-category. |
| def | <code>string</code> | The definition of the variable. |
| notes | <code>string</code> | Additional notes about the variable. |
| vertical | <code>number</code> | The vertical category (likely an ID). |
| unit | <code>string</code> | The unit of measurement. |
| graph_id | <code>number</code> | The ID of the associated graph. |
| graph_name | <code>string</code> | The name of the associated graph. |

<a name="VarApi"></a>

## VarApi : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The status of the API response. |
| data-availability | <code>string</code> | Indicates if the data is available. |
| data | <code>Array.&lt;Paginations, VarObject&gt;</code> | An array containing pagination information and an array of VarObject. |

<a name="VarResp"></a>

## VarResp : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| val | <code>number</code> | The value. |
| label | <code>string</code> | The label. |
| unit | <code>string</code> | The unit of measurement. |
| subj | <code>string</code> | The subject. |
| def | <code>string</code> | The definition. |
| decimal | <code>string</code> | The number of decimal places. |
| note | <code>string</code> | Additional notes. |

<a name="DataResponse"></a>

## DataResponse : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| status | <code>string</code> | The status of the data response. |
| data-availability | <code>string</code> \| <code>&#x27;available&#x27;</code> | Indicates if the data is available. |
| var | [<code>Array.&lt;VarResp&gt;</code>](#VarResp) | An array of VarResp objects. |        
| turvar | [<code>Array.&lt;turvar&gt;</code>](#turvar) | An array of turvar objects. |        
| labelvervar | <code>string</code> | A string representing the label version of var. |        
| vervar | [<code>Array.&lt;turvar&gt;</code>](#turvar) | Another array of turvar objects. |   
| tahun | [<code>Array.&lt;turvar&gt;</code>](#turvar) | An array representing years (turvar objects). |
| turtahun | [<code>Array.&lt;turvar&gt;</code>](#turvar) | Another array representing years (turvar objects). |
| datacontent | <code>object.&lt;string, number&gt;</code> | An object where keys are strings and values are numbers. |

<a name="DatabaseVariable"></a>

## DatabaseVariable : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type |
| --- | --- |
| var_id | <code>number</code> |
| kategori_data | <code>string</code> |
| judul | <code>string</code> |
| wilayah | <code>string</code> |
| satuan | <code>string</code> |
| domain | <code>string</code> |

<a name="TitlePublikasi"></a>

## TitlePublikasi : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type |
| --- | --- |
| title | <code>string</code> |
| count | <code>number</code> |

<a name="pertanyaan"></a>

## pertanyaan : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pertanyaan | <code>string</code> | text of question |

<a name="JSONAnalyzed"></a>

## JSONAnalyzed : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| natural_response | <code>string</code> | analyze of data |
| data | <code>string</code> | JSON of data |

<a name="HTMLAnalayzed"></a>

## HTMLAnalayzed : <code>object</code>
**Kind**: global typedef
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| natural_response | <code>string</code> | analyze of data |
| data | <code>string</code> | HTML of data |