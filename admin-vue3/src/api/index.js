/*
 * @Description: ajax
 * @Author: yijian
 * @Version: 0.1.0
 * @Date: 2021-12-02 16:08:38
 */

import axios from '@/plugins/axios.js'

export const GET_meInfo = () => axios.get('/api/manage/sys/user/me')

export const GET_logout = () => axios.get('/api/manage/sys/user/logout')

export const POST_userlist = (data = {}) => axios.post('/api/manage/sys/user/list', data)

export const POST_userdelete = (data = {}) => axios.post('/api/manage/sys/user/delete', data)

export const GET_tree = () => axios.get('/api/manage/sys/menu/tree')