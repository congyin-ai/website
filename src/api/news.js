import instance from "../axios/index-dev";

export function getNews(query){
    return instance({
        url: '/web/news/web/List',
        // url:'/112571926/'+query,
        headers: {
          region: 0
        },
        method: 'get',
        params: query
    })
}

export function getDetailedNews(query){
    return instance({
      url: '/web/news/web/'+ query,
      method: 'get',
      
    })
}

export function listPaper() {
  return instance({
    method: 'post',
    headers: { 
      'Content-Type': 'application/json', 
   },
    // dataType: 'json',
    url: '/thesis/list',
  })
}

