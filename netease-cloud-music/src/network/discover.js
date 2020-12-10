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