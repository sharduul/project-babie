* Get all names   

1. URL: /api/name

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

2. URL: /api/name/:nameId

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

* POST a new name

URL: /api/name

**Request:**

**Response:**
