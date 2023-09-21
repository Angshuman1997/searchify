export const mockApi = {
  success: true,
  data: [
    {
      _type: "NewsArticle",
      name: "Google brings its AI chatbot Bard into its inner circle, opening door to Gmail, Maps, YouTube",
      url: "https://abcnews.go.com/Technology/wireStory/google-brings-ai-chatbot-bard-circle-opening-door-103302869",
      image: {
        _type: "ImageObject",
        thumbnail: {
          _type: "ImageObject",
          contentUrl:
            "https://www.bing.com/th?id=OVFT.bAVvxzx3j8WSKpJ4sn3P0S&pid=News",
          width: 700,
          height: 393,
        },
      },
      description:
        "Google is introducing its artificially intelligent chatbot named Bard to other members of its digital family — including Gmail, Maps and YouTube — as it seeks to ward off competitive threats posed by",
      about: [
        {
          _type: "Thing",
          readLink:
            "https://api.cognitive.microsoft.com/api/v7/entities/f39b29ec-05ee-d6cb-3070-ddaa0fb00ee0",
          name: "Google",
        },
        {
          _type: "Thing",
          readLink:
            "https://api.cognitive.microsoft.com/api/v7/entities/d5a6ee1b-da4b-230b-9ad0-30d222388c11",
          name: "Chatterbot",
        },
      ],
      provider: [
        {
          _type: "Organization",
          name: "ABC",
          image: {
            _type: "ImageObject",
            thumbnail: {
              _type: "ImageObject",
              contentUrl:
                "https://www.bing.com/th?id=ODF.-LMnifaGw_NvPvJr_0E9tA&pid=news",
            },
          },
        },
      ],
      datePublished: "2023-09-19T17:02:00.0000000Z",
      category: "ScienceAndTechnology",
    },
  ],
};
