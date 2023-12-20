// index.js
const axios = require('axios');
const fs = require('fs');
require('dotenv').config();
const fetchAllArticles = async (endpoint, params) => {
  const cnt = 100
  let totalPage = 1
  let articlesList = []
  await axios.get(`${process.env.KUROCO_API_DOMAIN}${process.env.KUROCO_API_PREFIX}${endpoint}`, {
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
      await axios.get(`${process.env.KUROCO_API_DOMAIN}${process.env.KUROCO_API_PREFIX}${endpoint}`, {
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

async function generateSite() {
  // ヘッドレスCMSからデータを取得
  try {
    const response = await fetchAllArticles('news/list', {})
    
    if (!fs.existsSync('json')) {
      fs.mkdirSync('json');
    }
    fs.writeFileSync('json/all_news.json', JSON.stringify(response, null, 2));

  } catch (error) {
      console.error('Error fetching data:', error);
  }
}

generateSite();
