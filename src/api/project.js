import requests from '@/utils/requests'

export function projectList (params = {}) {
  return requests({
    url: '/project/list',
    method: 'post',
    params
  })
}

export function projectAdd (params = {}) {
  return requests({
    url: '/project/list',
    method: 'post',
    params
  })
}
