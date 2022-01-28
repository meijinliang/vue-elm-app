import request from "../utils/request";

export function CurrentLocation(params) {
  return request({
    method: 'get',
    url: 'v1/cities',
    params
  })
}

