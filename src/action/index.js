export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

export function success() {
    return {
        type: SUCCESS
    };
}

export function fail() {
    return {
        type: FAIL
    };
}


