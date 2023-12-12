/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute } from '../astro_V6vkh6i_.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './__68PuGx3-.mjs';
import 'clsx';

const $$Astro$1 = createAstro();
const $$CasinoGuideSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CasinoGuideSidebar;
  return renderTemplate`${maybeRenderHead()}<div class="menu_container bg-[#eee] h-max rounded-lg p-6 w-full md:w-1/4"> <h3 class="text-[#2f0536] text-[22px]">Choose a Lesson</h3> <div id="shortcode-container"></div> </div> `;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/CasinoGuideSidebar.astro", void 0);

/* export async function navQuery(){
  const siteNavQueryRes = await fetch("https://slotsstg.wpengine.com/graphql", {
      method: 'post', 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `{
              menus(where: {location: PRIMARY}) {
                nodes {
                  name
                  menuItems {
                      nodes {
                          uri
                          url
                          order
                          label
                      }
                  }
                }
              }
              generalSettings {
                  title
                  url
                  description
              }
          }
          `
      })
  });
  const{ data } = await siteNavQueryRes.json();
  return data;
} */

/* export async function homePagePostsQuery(){
  const response = await fetch("https://slotsstg.wpengine.com/graphql", {
      method: 'post', 
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
          query: `{
            posts(first: 100) {
                nodes {
                  date
                  uri
                  title
                  commentCount
                  excerpt
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
                }
              }
            }
          `
      })
  });
  const{ data } = await response.json();
  return data;
} */

async function CasinoGuidesArticles(){
  const response = await fetch("https://slotsstg.wpengine.com/graphql", {
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




async function getNodeByURI(uri){
  const response = await fetch("https://slotsstg.wpengine.com/graphql", {
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
              }
              ... on Page {
                id
                title
                uri
                slug
                date
                content
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
                    }
                  }
                }
              }
              ... on Basepress {
                id
                title
                uri
                slug
                content
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

async function getAllUris() {
  let uris = [];

  // Initial cursor for pagination
  let postCursor = null;

  do {
    const response = await fetch("https://slotsstg.wpengine.com/graphql", {
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

    //console.log(data.pages);
    //console.log(data.allBasepress.nodes[0].sectionsBasepress);

    // Extract post URIs and add them to the uris array
    const postNodes = data.posts.nodes || [];
    uris = uris.concat(postNodes.map((node) => ({ params: { uri: trimURI(node.uri) } })));

    // Extract category URIs and add them to the uris array
    const categoryNodes = data.categories.nodes || [];
    uris = uris.concat(categoryNodes.map((node) => ({ params: { uri: trimURI(node.uri) } })));

    // Extract pages URIs and add them to the uris array
     const pageNodes = data.pages.nodes || [];
    uris = uris.concat(pageNodes.map((node) => ({ params: { uri: trimURI(node.uri) } }))); 

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
    uris = uris.concat(basepressSectionNodes);


    // Update the cursor for the next page
    postCursor = data.posts.pageInfo.hasNextPage ? data.posts.pageInfo.endCursor : null;
  } while (postCursor);

  return uris;
}

// Function to trim URI
function trimURI(uri) {
  return uri.substring(1, uri.length - 1);
}

const $$Astro = createAstro();
const $$Guides = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Guides;
  const data = await CasinoGuidesArticles();
  const sections = data.sectionsBasepress.edges;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Online Casino Guides" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="header-background bg-[url('https://slotsparadise.com/wp-content/uploads/2022/07/thebeach-guides.jpg')] bg-cover bg-center h-52 flex items-center text-white font-giloryRegular"> <div class="header-content-row w-[80%] mx-auto"> <div class="page-title"> <h1 class="entry-title text-2xl md:text-3xl font-giloryExtrabold mb-2">Test</h1> </div> </div> </div> <div class="online_casino_guide mt-10 font-giloryRegular font-semibold max-w-[1200px] mx-auto"> <div class="post-bread font-semibold my-10"> <div> <p><span><span><a href="https://slotsparadise.com/the-beach/">Home</a></span> &gt;
<span><a href="http://localhost:3000/guides/">Casino Guides</a></span> </span></p></div> </div> <div class="inner_container flex flex-col md:flex-row justify-between"> ${renderComponent($$result2, "CasinoGuideSidebar", $$CasinoGuideSidebar, {})} <div class="section-container w-full md:w-3/4 mt-5 md:mt-0 pl-0 md:pl-2 xl:pl-10"> <div class="section_block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> ${sections.map((section) => renderTemplate`<div class="bg-white rounded px-5 pt-5 border border-[#f2f2f2] flex flex-col justify-between"> <h2 class="flex items-center"><i class="fa italic block pr-2 text-lg">&#xf02d;</i> <a class="font-giloryExtrabold text-[#2f0536] text-lg leading-4"${addAttribute(section.node.uri, "href")}>${section.node.name}</a></h2> ${section.node.basepress.edges.map((article) => renderTemplate`<div class="hover:bg-[#ddd]"> <p class="py-2 font-giloryRegular font-semibold border-b border-dashed leading-3 flex items-start"><i class="fa text-gray-400 pr-1 pt-1 block">&#xf059;</i><a class="text-sm"${addAttribute(article.node.uri, "href")}>${article.node.title}</a></p> </div>`)} <p class="pt-4 pb-2"><a class="py-2 block text-[#FD106A] text-sm"${addAttribute(section.node.uri, "href")}><span>View all ${section.node.count} articles</span></a></p> </div>`)} </div> </div> </div> </div>` })}`;
}, "/Users/lajennylove/code/projects/astro-theme/src/pages/guides.astro", void 0);

const $$file = "/Users/lajennylove/code/projects/astro-theme/src/pages/guides.astro";
const $$url = "/guides";

const guides = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Guides,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CasinoGuideSidebar as $, getAllUris as a, guides as b, getNodeByURI as g };
