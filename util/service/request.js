import http from './http'

export default function (ds) {
  ds.payload = ds.payload || {}
  if (ds.type === 'get') {
    return http.get(ds.url, ds.payload)
  } else if (ds.type === 'post') {
    return http.post(ds.url, ds.payload)
  } else {
    throw new Error('ds request type undefined')
  }
}
