export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b400da4d81msh7bc7f791c43a550p19ece1jsn6034f4ac8933',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b400da4d81msh7bc7f791c43a550p19ece1jsn6034f4ac8933',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
