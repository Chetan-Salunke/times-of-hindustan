
# Times of Hindustan | [News Application]

React JS application consisting of stunning Daily news updates, custom categories, author section , and most importantly, infinite scroll.


Technologies - Javascript, React.js, FetchAPI, NewsAPI.

## API Reference

#### Get all items

```http
  GET /https://newsapi.org/v2/everything?q=tesla&from=2023-02-22&sortBy=publishedAt&apiKey=ed544fae4bcb40d4b12e0c1877d61765/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ed544fae4bcb40d4b12e0c1877d61765/items/${business}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |


## Screenshots

![App Screenshot]
![Screenshot_20230113_112040](https://user-images.githubusercontent.com/85216632/226975103-5b5f7357-7346-4ec7-9e03-585cbc7a6aee.png)

