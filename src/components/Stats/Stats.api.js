export const fetchStats = (url) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 100 + 1));
        }, 2000)
    })
}