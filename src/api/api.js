// Web Search
export const webSearchFunc = async (search) => {
  const options = {
    method: process.env.REACT_APP_API_METHOD,
    headers: {
      "X-BingApis-SDK": process.env.REACT_APP_BINGAPIS_SDK,
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_WEB_HOST,
    },
  };

  try {
    const response = await fetch(
      process.env.REACT_APP_WEBSEARCH1 +
        search +
        process.env.REACT_APP_WEBSEARCH2,
      options
    );
    const result = await response.json();
    return { success: true, data: result.value };
  } catch (error) {
    return { success: false, data: [], error: error };
  }
};

// News Trend
export const newsTrendFunc = async () => {
  const options = {
    method: process.env.REACT_APP_API_METHOD,
    headers: {
      "X-BingApis-SDK": process.env.REACT_APP_BINGAPIS_SDK,
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_NEWS_HOST,
    },
  };

  try {
    const response = await fetch(process.env.REACT_APP_NEWSTRENDS, options);
    const result = await response.json();
    return { success: true, data: result.value };
  } catch (error) {
    return { success: false, data: [], error: error };
  }
};

// News Search
export const newsSearchFunc = async (search) => {
  const options = {
    method: process.env.REACT_APP_API_METHOD,
    headers: {
      "X-BingApis-SDK": process.env.REACT_APP_BINGAPIS_SDK,
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_NEWS_HOST,
    },
  };

  try {
    const response = await fetch(
      process.env.REACT_APP_NEWSSEARCH1 +
        search +
        process.env.REACT_APP_NEWSSEARCH2,
      options
    );
    const result = await response.json();
    return { success: true, data: result.value };
  } catch (error) {
    return { success: false, data: [], error: error };
  }
};

// Images Trend
export const imageTrendFunc = async () => {
  const options = {
    method: process.env.REACT_APP_API_METHOD,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_IMAGE_HOST,
    },
  };

  try {
    const response = await fetch(process.env.REACT_APP_IMAGETRENDS, options);
    const result = await response.json();
    const valD = [];
    for (let i = 0; i < result?.categories?.length; i++) {
      const vD = result?.categories[i]?.tiles;
      for (let j = 0; j < vD?.length; j++) {
        const valData = {
          name: vD[j].query.displayText,
          description: "no description for image",
          image: { thumbnail: { contentUrl: vD[j].image.thumbnailUrl } },
          url: vD[j].query.webSearchUrl,
        };

        valD.push(valData);
      }
    }
    return { success: true, data: valD };
  } catch (error) {
    return { success: false, data: [], error: error };
  }
};

// Images Search
export const imageSearchFunc = async (search) => {
  const options = {
    method: process.env.REACT_APP_API_METHOD,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_IMAGE_HOST,
    },
  };

  try {
    const response = await fetch(
      process.env.REACT_APP_IMAGESEARCH1 +
        search +
        process.env.REACT_APP_IMAGESEARCH2,
      options
    );
    const result = await response.json();
    return { success: true, data: result.value };
  } catch (error) {
    return { success: false, data: [], error: error };
  }
};

// Video Trend
export const videoTrendFunc = async () => {
  const options = {
    method: process.env.REACT_APP_API_METHOD,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_VIDEO_HOST,
    },
  };

  try {
    const response = await fetch(process.env.REACT_APP_VIDEOTRENDS, options);
    const result = await response.json();
    const valD = [];
    for (let i = 0; i < result?.categories?.length; i++) {
      const vlD = result?.categories[i]?.subcategories;
      for (let k = 0; k < vlD?.length; k++) {
        const vD = vlD[k]?.tiles;
        for (let j = 0; j < vD?.length; j++) {
          const valData = {
            name: vD[j].query.displayText,
            description: "no description for image",
            image: { thumbnail: { contentUrl: vD[j].image.thumbnailUrl } },
            url: vD[j].query.webSearchUrl,
          };

          valD.push(valData);
        }
      }
    }
    return { success: true, data: valD };
  } catch (error) {
    return { success: false, data: [], error: error };
  }
};

// Video Search
export const videoSearchFunc = async (search) => {
  const options = {
    method: process.env.REACT_APP_API_METHOD,
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
      "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_VIDEO_HOST,
    },
  };

  try {
    const response = await fetch(
      process.env.REACT_APP_VIDEOSEARCH1 +
        search +
        process.env.REACT_APP_VIDEOSEARCH2,
      options
    );
    const result = await response.json();
    return { success: true, data: result.value };
  } catch (error) {
    return { success: false, data: [], error: error };
  }
};
