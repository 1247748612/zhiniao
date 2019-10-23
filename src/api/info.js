import requests from '@/utils/requests'

export function bind (params = {}) {
  return requests({
    url: '/bind',
    method: 'post',
    params
  })
}
