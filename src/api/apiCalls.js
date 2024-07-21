export const getTopNews= async ()=>{
    let response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5626ee82048f49a7979094bcd51decc4')
    let res = await response.json()
    return res
}