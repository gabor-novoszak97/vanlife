export function setActiveNav(isActive, className){
    return isActive ? className : null
}

export function generateURLsearchParams(key, value, currentSerachParams){
    const searchUrl = new URLSearchParams(currentSerachParams)
    if(!value)
        searchUrl.delete(key)
    else
        searchUrl.set(key, value)
    return `?${searchUrl.toString()}`
}