import axios from 'axios';
import router from '@/router';

const errorHandler = throttle((err) => {
  const route = router.currentRoute.value;
  const errorResponse = err.response;

  if (errorResponse) {
    // 401 에러 발생 시 SSO 로그인 페이지로 이동
    // if (errorResponse.status === 401) {
    //   window.location.href = `/api/auth/v1/login/pms?originUrl=${encodeURIComponent(encodeURIComponent(getOriginUrl()))}`;
    // }

    // // 403 에러 발생 시 NotFound 페이지로 이동
    // if (errorResponse.status === 403) {
    //   router.replace({
    //     // name: 'NotFound',
    //     // params: { pathMatch: route.path.substring(1).split('/') },
    //     // query: route.query,
    //     // hash: route.hash,
    //   });
    // }
  }
}, 500);

const axiosInstance = axios.create({
  withCredentials: false,
});

axiosInstance.interceptors.response.use((res) => res, (err) => {
  errorHandler(err);

  throw err;
});

export const axiosCall = async (config) => {
  try {
    const { data } = await axiosInstance.request<APIResponse<T>>(config);
    console.log(config.method, config.url, data);
    return [null, data];
  } catch (err) {
    return [err];
  }
};


export default axiosCall;