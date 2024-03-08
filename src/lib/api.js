export const prerender = true;

const GRAPHQL_ENDPOINT = "https://slotsstg.wpengine.com/graphql";

export async function GuideSidebar(){
  const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'post', 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `query GuideSidebar {
            sectionsBasepress(first: 100) {
              edges {
                node {
                  name
                  basepress(first: 100) {
                    edges {
                      node {
                        title
                        uri
                      }
                    }
                  }
                }
              }
            }
          }
          `
      })
  });
  const{ data } = await response.json();
  return data;
}




export async function CasinoGuidesArticles(){
  const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'post', 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `query CasinoGuidePage {
            sectionsBasepress(first: 100) {
              edges {
                node {
                  name
                  uri
                  basepress(first: 6) {
                    edges {
                      node {
                        title
                        uri
                      }
                      cursor
                    }
                    pageInfo {
                      endCursor
                      hasNextPage
                    }
                  }
                  count
                }
              }
            }
          }
          `
      })
  });
  const{ data } = await response.json();
  return data;
}




export async function getNodeByURI(uri){
  const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'post', 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `query GetNodeByURI($uri: String!) {
            nodeByUri(uri: $uri) {
              __typename
              isContentNode
              isTermNode
              ... on Post {
                id
                title
                date
                uri
                slug
                excerpt
                content
                categories {
                  nodes {
                    name
                    uri
                  }
                }
                featuredImage {
                  node {
                    srcSet
                    sourceUrl
                    altText
                    mediaDetails {
                      height
                      width
                    }
                  }
                }
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
              ... on Page {
                id
                title
                uri
                slug
                date
                content
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
                slug
                children {
                  edges {
                    node {
                      name
                      posts {
                        edges {
                          node {
                            title
                            uri
                            excerpt
                            featuredImage {
                              node {
                                sourceUrl
                                altText
                              }
                            }
                          }
                        }
                      }
                      seo {
                        breadcrumbs {
                          text
                          url
                        }
                      }
                    }
                  }
                }
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
                slug
                date
                databaseId
                content
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
                slug
                basepress {
                  edges {
                    node {
                      title
                      uri
                    }
                  }
                }
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

export async function getAllUris() {
  let uris = [];

  // Initial cursor for pagination
  let postCursor = null;

  do {
    const response = await fetch(GRAPHQL_ENDPOINT, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
        query GetAllUris($postCursor: String) {
          terms {
            nodes {
              uri
            }
          }
          posts(first: 1000, after: $postCursor) {
            pageInfo {
              endCursor
              hasNextPage
            }
            nodes {
              uri
            }
          }
          pages(first: 1000) {
            nodes {
              uri
            }
          }
          categories(first: 1000) {
            nodes {
              uri
              slug
            }
          }
          allBasepress(first: 1000) {
            nodes {
              uri
              slug
              sectionsBasepress {
                edges {
                  node {
                    name
                    slug
                    uri
                  }
                }
              }
            }
          }
        }
        `,
        variables: {
          postCursor: postCursor,
        },
      }),
    });

    const { data } = await response.json();

    // Extract post URIs and add them to the uris array
    const postNodes = data.posts.nodes || [];
    uris = uris.concat(
      postNodes
        .map((node) => trimURI(node.uri)) // Extract URIs
        .filter((uri) => uri && uri !== '/') // Filter out empty or invalid URIs
        .map((uri) => ({ params: { uri } }))
    );

    // Extract category URIs and add them to the uris array
    const categoryNodes = data.categories.nodes || [];
    uris = uris.concat(
      categoryNodes
        .map((node) => trimURI(node.uri)) // Extract URIs
        .filter((uri) => uri && uri !== '/') // Filter out empty or invalid URIs
        .map((uri) => ({ params: { uri } }))
    );

    // Extract pages URIs and add them to the uris array
    /* const pageNodes = data.pages.nodes || [];
    uris = uris.concat(pageNodes.map((node) => ({ params: { uri: trimURI(node.uri) } })));  */

    // Extract pages URIs and add them to the uris array
const pageNodes = data.pages.nodes || [];
uris = uris.concat(
  pageNodes
    .map((node) => trimURI(node.uri)) // Extract URIs
    .filter((uri) => uri && uri !== '/') // Filter out empty or invalid URIs
    .map((uri) => ({ params: { uri } }))
);

    // Extract Basepress URIs and add them to the uris array
    const basepressNodes = data.allBasepress.nodes|| [];
    uris = uris.concat(basepressNodes.map((node) => ({ params: { uri: trimURI(node.uri) } })));

    // Extract Basepress Sections URIs and add them to the uris array
    const basepressSectionNodes = basepressNodes.reduce((acc, node) => {
      const sections = node.sectionsBasepress?.edges || [];
      return acc.concat(
        sections.map((section) => ({
          params: { uri: trimURI(section.node.uri), basepressSlug: trimURI(node.slug) },
        }))
      );
    }, []);
    
    // Filter out empty or invalid URIs before adding them to the uris array
    basepressSectionNodes.forEach((node) => {
      if (node.params.uri && node.params.uri !== "/") {
        uris.push(node);
      }
    });

    // Update the cursor for the next page
    postCursor = data.posts.pageInfo.hasNextPage ? data.posts.pageInfo.endCursor : null;
  } while (postCursor);

  return uris;
}


// Function to trim URI
function trimURI(uri) {
  return uri.substring(1, uri.length - 1);
}

