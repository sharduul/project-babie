###Get all names   

**URL: api/name?page=1&size=3**

**Request:**

NA

**Response:**
```json
[{
	"nameId": 1,
	"nameInfo": "vijay",
	"meaning": [
		{
			"meaningId": 1,
			"meaningInfo": "victory"
		},
		{
			"meaningId": 1,
			"meaningInfo": "victory"
		}
	],
	"upVotes": 30,
	"viewCount": 100,
	"labels": [
		{
			"labelId": 1,
			"labelInfo": "god"
		},
		{
			"labelId": 2,
			"labelInfo": "boy"
		}
	],
	"assignedByCount": 30
}]
```

###Get a name by Id

**URL: /api/name/:nameId**

**Request:**

NA

**Response:**
```json
{
	"nameId": 1,
	"nameInfo": "vijay",
	"meaning": [
		{
			"meaningId": 1,
			"meaningInfo": "victory"
		},
		{
			"meaningId": 1,
			"meaningInfo": "victory"
		}
	],
	"upVotes": 30,
	"viewCount": 100,
	"labels": [
		{
			"labelId": 1,
			"labelInfo": "god"
		},
		{
			"labelId": 2,
			"labelInfo": "boy"
		}
	],
	"assignedByCount": 30
}
```

###POST a new name

**URL: /api/name**

**Request:**

```json
{
    "nameInfo": "vijay",
    "meaning": [
        {
            "meaningId": 1,
            "meaningInfo": "victory"
        }
    ],
    "upVotes": 0,
    "viewCount": 0,
    "labels": [
        {
            "labelId": 1,
            "labelInfo": "god"
        },
        {
            "labelId": 2,
            "labelInfo": "boy"
        }
    ],
    "assignedByCount": 0
}


```

**Response:**

```json

{
	"nameId": 1,
	"nameInfo": "vijay",
	"meaning": [
		{
			"meaningId": 1,
			"meaningInfo": "victory"
		}
	],
	"upVotes": 0,
	"viewCount": 0,
	"labels": [
		{
			"labelId": 1,
			"labelInfo": "god"
		},
		{
			"labelId": 2,
			"labelInfo": "boy"
		}
	],
	"assignedByCount": 0
}
```
