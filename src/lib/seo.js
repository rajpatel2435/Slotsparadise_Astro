export const prerender = true;
import { GRAPHQL_ENDPOINT } from "../data/endpoints";
// Define a mapping of URI patterns to their transformed equivalents
const uriTransformations = {
  'casino/slots': 'casino/casino_slots',
  'casino/jackpot-games': 'casino/casino_jackpot-games',
  'casino/video-poker': 'casino/casino_video-poker',
  'casino/table-games': 'casino/casino_table-games',
  'casino/roulette': 'casino/casino_roulette',
  'casino/blackjack': 'casino/casino_blackjack',
};

export async function seoNodeByURI(uri) {
  // if (uri.includes("casino/slots", "casino_jackpot-games", "casino/video-poker", "casino/table-games")) {
  //   uri = uri.replace("casino/slots", "casino/casino_slots");
  // }

   // Transform the URI based on the defined mapping
   for (const [key, value] of Object.entries(uriTransformations)) {
    if (uri.includes(key)) {
      uri = uri.replace(key, value);
      break;  
    }
  }

  

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
  const { data } = await response.json();
  
  return data;
}
