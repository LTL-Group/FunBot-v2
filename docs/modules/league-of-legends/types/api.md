Table of Riot API errors:

| Code  | Message  |
|---|---|
|400|Bad request|
|401|Unauthorized|
|403|Forbidden|
|404|Data not found|
|405|Method not allowed|
|415|Unsupported media type|
|429|Rate limit exceeded|
|500|Internal server error|
|502|Bad gateway|
|503|Service unavailable|
|504|Gateway timeout|

```ts
type LolResponseCodesErrors = 400 | 401 | 403 | 404 | 405 | 415 | 429 | 500 | 502 | 503 | 504
```


Docs: https://developer.riotgames.com/docs/lol

```ts
type PlatformRoutingValues =
| "BR1"
| "EUN1"
| "EUW1"
| "JP1"
| "KR"
| "LA1"
| "LA2"
| "NA1"
| "OC1"
| "TR1"
| "RU"
| "PH2"
| "SG2"
| "TH2"
| "TW2"
| "VN2"
```


```ts
type RegionalRoutingValues =
| "AMERICAS"
| "ASIA"
| "EUROPE"
| "SEA"
```
