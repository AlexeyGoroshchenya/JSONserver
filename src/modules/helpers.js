export const debounce = (func, ms = 300) => {

    let timer

    return (...args) => {
        clearTimeout(timer);

        timer = setTimeout(() => { func.apply(this, args) }, ms)

    }
}

export const makeFetch = (url, settings = {}) => {
    console.log('res')
    return fetch(url, settings).then(res => res.json())
}