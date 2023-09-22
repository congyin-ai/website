import instance from "../axios/index-dev";

export function getPaper(query){
    return instance({
        url: '/thesis/detail',
        // url:'/112571926/'+query,
        method: 'get',
        // params: query
    })
}

export function getDetailedPaper(query){
    return instance({
      url: '/thesis/detail/'+ query,
      method: 'get',
    })
}

export function listPaper(query) {
  return instance({
    method: 'post',
    headers: { 
      'Content-Type': 'application/json', 
   },
    // dataType: 'json',
    url: '/thesis/list',
    data: JSON.stringify(query),
  })
}

