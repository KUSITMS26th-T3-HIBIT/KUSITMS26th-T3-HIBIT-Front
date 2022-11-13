import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setRefreshToken = (refreshToken) => {
    const today = new Date();
    const expireDate = today.setDate(today.getDate() + 7);

    return cookies.set('refresh_token', refreshToken, {
        sameSite: 'strict',
        path: "/",
        expires: new Date(expireDate)
    });
};

export const getCookieToken = () => { // Cookie에 저장된 Refresh Token 값을 가져 옴
    return cookies.get('refresh_token');
};

export const removeCookieToken = () => { // Cookie 삭제 시 사용 : Logout에서 사용
    return cookies.remove('refresh_token', {sameSite: 'strict', path: '/'});
};