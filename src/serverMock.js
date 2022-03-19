const data = [
    {
      id: 1,
      title: 'News 1',
      text: 'Text novinky 1',
    },
  ];
  
  export const getNewsDetail = async (id) => data.find((i) => i.id === id);
  
  export const setNewsDetail = async (news) => {
    const findIndex = data.findIndex((i) => i.id === news.id);
    if (findIndex > -1) {
      data[findIndex].id = news.id;
      data[findIndex].title = news.title;
      data[findIndex].text = news.text;
    } else {
      data.push(news);
    }
  };