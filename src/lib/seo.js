export const prerender = true;
import { GRAPHQL_ENDPOINT } from "../data/endpoints";
export async function seoNodeByURI(uri){
    const response = await fetch(GRAPHQL_ENDPOINT, {
        method: 'post', 
        headers: {'Content-Type':'application/json'},
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
                uri: uri
            }
        })
    });
    const{ data } = await response.json();
    return data;
  }