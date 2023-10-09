import instance from "../axios/index-dev";

export function getPaper(query){
    return instance({
        url: '/web/thesis/web/list',
        method: 'get',
    })
}

export function getDetailedPaper(query){
    return instance({
      url: '/web/thesis/web/'+ query,
      method: 'get',
    })
}

// export function listPaper() {
//   return instance({
//     method: 'post',
//     headers: { 
//       'Content-Type': 'application/json', 
//    },
//     // dataType: 'json',
//     url: '/thesis/list',
//   })
// }

