import {request} from './request';

// Banner 
export function getBanner(type) {
  return request({
    url: '/banner',
    params: {
      type
    }
  });
}

// 首页信息
export function getHomePage(refresh) {
  return request({
    url: '/homepage/block/page',
    params : {refresh}
  })

}

// 获取新歌曲
export function getNewSong() {
    return request({
        url: '/recommend/songs'
    })
}

// 热门歌单
export function getHotSheet(order, cat = "全部", limit, offset) {
    return request({
        url: '/top/playlist',
        params: {
            order,
            cat,
            limit,
            offset
        }
    })
}
