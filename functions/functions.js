import axios from 'axios';
const api_url = process.env.KUROCO_API_DOMAIN + process.env.KUROCO_API_PREFIX;
console.log({api_url})
const fetchAllArticles = async (endpoint, params) => {
  const cnt = 100
  let totalPage = 1
  let articlesList = []
  await axios.get(`${api_url}${endpoint}`, {
    params: {
      ...params,
      cnt: cnt,
    }
  })
  .then(({ data }) => {
    totalPage = data.pageInfo.totalPageCnt
    const len = data.list.length
    articlesList = new Array(data.pageInfo.totalCnt)
    for (var i=0; i<len; i++){
      articlesList[i] = data.list[i]
    }
  })
  if (articlesList.length > 0 && totalPage > 1) {
    for (var page = 2; page <= totalPage; page++) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      await axios.get(`${api_url}${endpoint}`, {
        params: {
          ...params,
          cnt: cnt,
          pageID: page,
        }
      })
      .then(({ data }) => {
        console.log(`Fetched page ${page}.`)
        const len = data.list.length
        const baseIndex = (page - 1) * cnt
        for (var i=0; i<len; i++){
          articlesList[baseIndex + i] = data.list[i]
        }
      })
    }
  }
  return articlesList
}
export default {
  fetchAllArticles,
}