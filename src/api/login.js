import requests from '@/utils/requests'

export function login (params = {}) {
  return requests({
    url: '/login',
    method: 'post',
    params
  })
}
