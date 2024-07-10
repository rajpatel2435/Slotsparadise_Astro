export const prerender = true;
import { getCachedData, setCachedData } from '../lib/cache.js';
import { GRAPHQL_ENDPOINT } from "../data/endpoints";
// Define a mapping of URI patterns to their transformed equivalents
const uriTransformations = {
  'casino/slots': 'casino/casino_slots',
  'casino/jackpot-games': 'casino/casino_jackpot-games',
  'casino/video-poker': 'casino/casino_video-poker',
  'casino/table-games': 'casino/casino_table-games',
  'casino/roulette': 'casino/casino_roulette',
  'casino/blackjack': 'casino/casino_blackjack',
  'casino/live-dealer': 'casino/casino_live-dealer',
};

export async function seoNodeByURI(uri) {
  const cacheKey = `seoNodeByUri:${uri}`;
  const cachedData = getCachedData(cacheKey);

  if (cachedData) {
    return cachedData;
  }
  try {
    Object.entries(uriTransformations).forEach(([key, value]) => {
      if (uri.includes(key)) {
        uri = uri.replace(key, value);
      }
    });

  const response = await fetch(GRAPHQL_ENDPOINT, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `query seoUri($uri: String!) {
              nodeByUri(uri: $uri) {
                __typename
                ... on Page {
                  id
                  title
                  uri
                  slug
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    metaRobotsNofollow
                    metaRobotsNoindex
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    readingTime
                    schema {
                      raw
                    }
                  }
                }
                ... on Post {
                  id
                  uri
                  slug
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    metaRobotsNofollow
                    metaRobotsNoindex
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    readingTime
                    schema {
                      raw
                    }
                  }
                }
                ... on Category {
                  id
                  name
                  uri
                  slug
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    metaRobotsNofollow
                    metaRobotsNoindex
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    schema {
                      raw
                    }
                  }
                }
                ... on Tag {
                  id
                  name
                  uri
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    metaRobotsNofollow
                    metaRobotsNoindex
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    schema {
                      raw
                    }
                  }
                }

                ... on Basepress {
                  id
                  title
                  uri
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    metaRobotsNofollow
                    metaRobotsNoindex
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    readingTime
                    schema {
                      raw
                    }
                  }
                }
                ... on SectionBasepress {
                  id
                  name
                  uri
                  seo {
                    opengraphSiteName
                    breadcrumbs {
                      text
                      url
                    }
                    opengraphUrl
                    canonical
                    metaDesc
                    metaRobotsNofollow
                    metaRobotsNoindex
                    title
                    opengraphDescription
                    opengraphPublishedTime
                    opengraphModifiedTime
                    opengraphImage {
                      sourceUrl
                      mimeType
                      author {
                        node {
                          name
                        }
                      }
                    }
                    opengraphType
                    schema {
                      raw
                    }
                  }
                }
              }
            }
          
            `,
      variables: {
        uri: uri,
      },
    }),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const { data } = await response.json();

  // Cache the fetched data
  setCachedData(cacheKey, data);
  return data;
} catch (error) {
  console.error("Error fetching SEO data:", error);
  return null; // Return null or handle the error in an appropriate way
}
}
