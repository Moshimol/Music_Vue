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

// 热门歌手
export function getHotSinger(limit, offset) {
    return request({
        url: '/top/artists',
        params: {
            limit,
            offset
        }
    })
}

// 新歌速递
export function getSongsTop(type) {
    return request({
        url: '/top/song',
        params: {
            type
        }
    })
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


// 最新MV
export function getNewMv(area, limit) {
    return request({
        url: '/mv/first',
        params: {
            area,
            limit
        }
    })
}