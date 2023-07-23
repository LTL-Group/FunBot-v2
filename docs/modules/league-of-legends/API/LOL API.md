

Using:

1. Get summoner info by name
2. Get summoner matches
3. Get summoner match info

## Get summoner info by name

Riot docs: https://developer.riotgames.com/apis#summoner-v4/GET_getBySummonerName

Method: `getBySummonerName(server: PlatformRoutingValues, name: string)`

Using: For add new lol account to bot

Base url: `https://${SERVER}.api.riotgames.com/lol/summoner/v4/summoners/by-name/${NAME}?api_key=${LOL_API_KEY}`

Where `SERVER` and `NAME` variables we get from user

Example url: `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/ltlaitoff?api_key=${LOL_API_KEY}`

Execution: 
1. Check if `server` its really PlatformRoutingValues
2. Check if `name` is not empty
3. Send request to Riot API
4. On error - return LolAPIError
5. On success - return LolApiGetBySummonerName 

### Types

On error:

```ts
interface LolAPIError = {
	status: {
		message: string,
		status_code: LolResponseCodesErrors
	}
}
```

On success: 

```ts
interface LolApiGetBySummonerName {
	accountId: string
	profileIconId: int
	revisionDate: number
	name: string
	id: string
	puuid: string
	summonerLevel: number
}
```

Example: 
```ts
const result: LolApiGetBySummonerName = {
    "id": "l6ZupPuAVJVgMB-oOoXlO5az9vGbaM8TMzpg7RmBEgWSTprzMT9Tmu7qQA",
    "accountId": "cN_IF3nJ_d3p2UjTBatPVYCWAhwCZqNL_lCu1UAD0z1zTsSJuhBTs24P",
    "puuid": "6M-0FXkuX-SfAdWSMFdbF4LPhE0nShbhbJehZMHaKJ77Kd9Wdpo8Qf5qTJuetd7UghvaL6W7Sb56vA",
    "name": "ltlaitoff",
    "profileIconId": 1227,
    "revisionDate": 1690025714587,
    "summonerLevel": 189
}
```