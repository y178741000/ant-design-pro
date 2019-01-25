import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    body: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function accountLogin(params) {
  // TODO
  const requestURL = '/api/login/account';
  return request(requestURL, {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}
// 基本信息维护
export async function queryInfoList(params) {
  return request(`/api/infolist?${stringify(params)}`);
}

export async function removeInfoList(params) {
  return request('/api/infolist', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addInfoList(params) {
  return request('/api/infolist', {
    method: 'POST',
    body: {
      ...params,
      method: 'add',
    },
  });
}

export async function updateInfoList(params) {
  return request('/api/infolist', {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}

// 基本信息变更历史纪录
export async function queryModifyHisList(params) {
  return request(`/api/modifyhislist?${stringify(params)}`);
}

// 积分管理
export async function queryMarkHisList(params) {
  return request(`/api/markhislist?${stringify(params)}`);
}

export async function removeMarkHisList(params) {
  return request('/api/markhislist', {
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addMarkHisList(params) {
  return request('/api/markhislist', {
    method: 'POST',
    body: {
      ...params,
      method: 'add',
    },
  });
}

export async function updateMarkhisList(params) {
  return request('/api/markhislist', {
    method: 'POST',
    body: {
      ...params,
      method: 'update',
    },
  });
}
