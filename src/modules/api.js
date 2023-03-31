//? Axios Wrapper - /oauth
export const $fetchLogin = options => loginService(setContentType(options));

//? Axios Original
export const $axios = axios;
