/* empty css                         */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, g as addAttribute, j as renderComponent, u as unescapeHTML } from './astro_BXbDcoCo.mjs';
import 'kleur/colors';
import { a as $$Image, $ as $$Layout, b as $$CasinoSchoolSidebar } from './pages/casino-school_yTUh3-r_.mjs';
import { w as wpquery, $ as $$SidebarArticles } from './pages/index_dPFGetxE.mjs';
import 'clsx';
/* empty css                         */
import { g as getNodeByURI, $ as $$CasinoGuideSidebar, a as getAllUris } from './pages/guides_1Bi86kaO.mjs';

const $$Astro$c = createAstro();
const $$NewsPostCategory = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$NewsPostCategory;
  const { href, title, body, src, alt, excerpt, slug, uri } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="news_post_article flex flex-col md:flex-row gap-8 mb-16"> <a${addAttribute(uri, "href")} class="block w-full md:w-1/4 rounded-lg overflow-hidden shadow-casinoBlock"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "width": 300, "height": 200, "format": "webp", "style": "width: 100%; object-fit: cover;" })}</a> <div class="post-content w-full md:w-3/4"> <div class="post-content-inner"> <h2 class="text-[#ff688b] pb-3 font-medium font-giloryExtrabold text-xl sm:text-2xl"> <a${addAttribute(uri, "href")}> ${title}</a> </h2> <p class="text-[15px]">${unescapeHTML(excerpt)}</p> <a${addAttribute(uri, "href")} class="bg-[#a64485] inline-block text-white text-lg px-8 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all mt-5">Read More</a> </div> </div> </article>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/NewsPostCategory.astro", void 0);

const $$Astro$b = createAstro();
const prerender$1 = true;
async function getStaticPaths$1({ paginate }) {
  const data = await wpquery({
    query: `
      query GetNewsPosts {
        posts(where: { categoryName: "news" }, first: 1000) {
          edges {
            node {
              id
              title
              date
              uri
              slug
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
    `
  });
  const allPosts = data.posts.edges;
  return paginate(allPosts, {
    pageSize: 20
  });
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$$1;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "News" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="news_page_container max-w-[1440px] mx-auto w-[80%] font-giloryRegular font-semibold text-base text-[#666]"> <div> <div> <h1 class="text-3xl sm:text-4xl text-[#ff688b] pb-3 font-medium font-giloryExtrabold">
Casino News
</h1> <p> <span>Our Casino News section is your source for the latest happenings in
            the world of gambling and casinos. Stay informed on new casino
            openings, industry developments, and changes in laws and
            regulations. Discover the latest trends and innovations in the
            casino industry and get insights into winning strategies and
            tactics. From major tournament events to tips for success, Casino
            News has everything you need to stay ahead in the world of online
            gambling.
</span> </p> <p> <span>Whether you are a seasoned gambler or just starting out, this
            section is your go-to resource for all things related to the casino
            world. Stay informed, and stay ahead of the game, with Casino News.</span> </p> </div> </div> <section class="news_page max-w-[1440px] mx-auto px-4 my-16"> ${page.data.map((post) => renderTemplate`${renderComponent($$result2, "NewsPostCategory", $$NewsPostCategory, { "href": post.node.uri, "title": post.node.title, "body": post.node.excerpt, "src": post.node.featuredImage.node.sourceUrl, "alt": post.node.featuredImage.node.altText, "excerpt": post.node.excerpt, "slug": post.node.slug, "uri": post.node.uri })}`)} ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")}>Previous</a>` : null} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")}>Next</a>` : null} </section> </div> ` })}`;
}, "/Users/lajennylove/code/projects/astro-theme/src/pages/news/[...page].astro", void 0);

const $$file$1 = "/Users/lajennylove/code/projects/astro-theme/src/pages/news/[...page].astro";
const $$url$1 = "/news/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$$1,
    file: $$file$1,
    getStaticPaths: getStaticPaths$1,
    prerender: prerender$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro();
const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Archive;
  const { node } = Astro2.props;
  return renderTemplate`<!-- Page to be designed for Archive -->${maybeRenderHead()}<h1>${node.name} - Archive</h1> <!-- { node.children.edges.map(childEdge =>
  childEdge.node.posts.edges.map(post =>{
    return (
        <SingleNewsArticleCard post= {post}></SingleNewsArticleCard >
    )
  }
    
  )
)} -->`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/templates/Archive.astro", void 0);

const $$Astro$9 = createAstro();
const $$Single = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Single;
  const { node } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1 data-astro-cid-6ejvupo2>${node.title}</h1> <!-- Display categories links if node has terms --> ${node.categories ? node.categories.nodes.map((category) => renderTemplate`<a class="term-link"${addAttribute(category.uri, "href")} data-astro-cid-6ejvupo2>${category.name}</a>`) : null} <!-- Only show date if node is a Post --> ${node.__typename === "Post" ? renderTemplate`<p class="post-details" data-astro-cid-6ejvupo2>
Posted on <time${addAttribute(node.date, "datetime")} data-astro-cid-6ejvupo2>${new Date(node.date).toLocaleDateString()}</time> </p>` : null} <img class="featured-image"${addAttribute(node.featuredImage?.node?.mediaItemUrl, "src")} alt="" data-astro-cid-6ejvupo2> <article data-astro-cid-6ejvupo2>${unescapeHTML(node.content)}</article>  `;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/templates/Single.astro", void 0);

const $$Astro$8 = createAstro();
const $$SingleNewsArticle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SingleNewsArticle;
  const { node } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="header-background bg-[url('https://slotsparadise.com/wp-content/uploads/2022/08/casino-guides-header-v23.jpg')] bg-cover bg-center h-52 flex items-center text-white font-giloryRegular"> <div class="header-content-row w-[80%] mx-auto"> <div class="page-title"> <h1 class="entry-title text-2xl md:text-3xl font-giloryExtrabold mb-2">${node.title}</h1> <!-- <div class="post-bread font-semibold">
                <div class=""><p><span><span><a href="https://slotsparadise.com/the-beach/">Home</a></span> &gt; 
                    <span><a href="https://slotsparadise.com/the-beach/news/">News</a></span> &gt; 
                    <span>{ node.categories ?
                    node.categories.nodes.map(category => (<a class='term-link' href={category.uri}>{category.name}</a>)) :     
                    null 
                    }</span> &gt; 
                    <span class="breadcrumb_last" aria-current="page"><strong>{node.title}</strong></span></span></p>
                </div>
            </div> --> </div> </div> </div> <!-- Main Page --> <div class="post-content-row max-w-[1440px] mx-auto mt-16"> <div class="casino_news_blocks grid grid-cols-6 gap-12"> <div class="post-content-module col-span-6 md:col-span-4"> <div class="pb-10"><img class="featured-image rounded-lg overflow-hidden" width="1200" height="667"${addAttribute(node.featuredImage?.node?.sourceUrl, "src")}${addAttribute(node.title, "alt")}${addAttribute(node.title, "title")}> </div> <article class=" font-giloryRegular font-semibold ">${unescapeHTML(node.content)}</article> </div> <div class="sidebar col-span-6 md:col-span-2 flex flex-col gap-4"> <h2 class="text-[#ff688b] pb-3 font-medium font-giloryExtrabold text-3xl">Articles</h2> ${renderComponent($$result, "SidebarArticles", $$SidebarArticles, {})} </div> </div> </div> `;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/templates/SingleNewsArticle.astro", void 0);

const $$Astro$7 = createAstro();
const $$SingleGameReviewSidebar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SingleGameReviewSidebar;
  const query = `query GetPostsBySlug {
  posts(where: {name: "burning-aces-jackpot-game"}) {
    edges {
      node {
        slug
        blocks {
          ... on CoreShortcodeBlock {
            attributesJSON
            dynamicContent
          }
        }
      }
    }
  }
}`;
  const response = await fetch(
    `https://slotsstg.wpengine.com/graphql`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ query })
    }
  ).then((response2) => response2.json());
  const posts = response.data.posts.edges;
  return renderTemplate`<!-- Your container to display the shortcode result -->${posts.map(
    (post) => {
      const firstDynamicBlock = post.node.blocks.find((block) => block.dynamicContent);
      if (firstDynamicBlock) {
        return renderTemplate`${maybeRenderHead()}<div>${firstDynamicBlock.dynamicContent}</div>`;
      }
    }
  )}`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/SingleGameReviewSidebar.astro", void 0);

const $$Astro$6 = createAstro();
const $$GameInfoShortcode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GameInfoShortcode;
  const slugs = Astro2.params.uri;
  const parts = slugs.split("/");
  const lastPart = parts[parts.length - 1];
  const query = `query GetPostsBySlug($slug: String) {
  posts(where: {name: $slug}) {
    edges {
      node {
        slug
        blocks {
          ... on CoreShortcodeBlock {
            attributesJSON
            dynamicContent
          }
        }
      }
    }
  }
}`;
  const variables = { slug: lastPart };
  const response = await fetch(
    `https://slotsstg.wpengine.com/graphql`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ query, variables })
    }
  ).then((response2) => response2.json());
  const posts = response.data.posts.edges;
  return renderTemplate`${maybeRenderHead()}<div> ${posts.map((post) => renderTemplate`<article> ${post.node.blocks.map((block, index) => {
    if (index === post.node.blocks.length - 1 && block.attributesJSON === "[]") {
      const processedContent = block.dynamicContent.replace(/\[gameinfo\]/g, "").replace(/\[\/gameinfo\]/g, "").replace(/<br \/>/g, "").replace(/<\/?p>/g, "");
      const lines = processedContent.split("\n").filter((line) => line.trim() !== "");
      return renderTemplate`<div class="char-table"> <table class="game-table"> <caption>Characteristics</caption> <tbody> ${lines.map((line) => renderTemplate`<tr> <td>${line}</td> </tr>`)} </tbody> </table> </div>`;
    }
    return null;
  })} </article>`)} </div>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/GameInfoShortcode.astro", void 0);

const $$Astro$5 = createAstro();
const $$SingleGamePage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SingleGamePage;
  const { node } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="header-background bg-[url('https://slotsparadise.com/wp-content/uploads/2022/08/casino-guides-header-v23.jpg')] bg-cover bg-center h-52 flex items-center text-white font-giloryRegular"> <div class="header-content-row w-[80%] mx-auto"> <div class="page-title"> <h1 class="entry-title text-2xl md:text-3xl font-giloryExtrabold mb-2">${node.title}</h1> </div> </div> </div> <!-- Main Page --> <div class="post-content-row max-w-[1440px] mx-auto mt-16"> <div class="casino_news_blocks grid grid-cols-6 gap-12"> <div class="post-content-module col-span-6 md:col-span-4"> <div class="pb-10"><img class="featured-image rounded-lg overflow-hidden" width="1200" height="667"${addAttribute(node.featuredImage?.node?.sourceUrl, "src")}${addAttribute(node.title, "alt")}${addAttribute(node.title, "title")}> </div> <div class="post-bread font-semibold"> <div class=""><p><span><span><a href="https://slotsparadise.com/the-beach/">Home</a></span> &gt; <span><a href="https://slotsparadise.com/the-beach/news/online-casino/">${node.slug}</a></span> &gt; <span class="breadcrumb_last" aria-current="page"><strong>${node.title}</strong></span></span></p></div> </div> <article class=" font-giloryRegular font-semibold ">${unescapeHTML(node.content)}</article> </div> <div class="sidebar col-span-6 md:col-span-2 flex flex-col gap-4"> ${renderComponent($$result, "SingleGameReviewSidebar", $$SingleGameReviewSidebar, {})} ${renderComponent($$result, "GameInfoShortcode", $$GameInfoShortcode, {})} <h2 class="text-[#ff688b] pb-3 font-medium font-giloryExtrabold text-3xl">Articles</h2> ${renderComponent($$result, "SidebarArticles", $$SidebarArticles, {})} </div> </div> </div> `;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/templates/SingleGamePage.astro", void 0);

const $$Astro$4 = createAstro();
const $$NewsArchiveCategory = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$NewsArchiveCategory;
  const uri = `/${Astro2.params.uri}/`;
  const data = await getNodeByURI(uri);
  const node = data.nodeByUri;
  const slug = node.slug;
  const postsData = await wpquery({
    query: `
      query GetNewsPosts {
        posts(where: { categoryName: "${slug}" }, first: 1000) {
          edges {
            node {
              id
              title
              date
              uri
              slug
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
    `
  });
  const allPosts = postsData?.posts?.edges;
  return renderTemplate`${maybeRenderHead()}<div class="news_page_container max-w-[1440px] mx-auto w-[80%] font-giloryRegular font-semibold text-base text-[#666]"> <div> <div><h1 class="text-3xl sm:text-4xl text-[#ff688b] pb-3 font-medium font-giloryExtrabold">Casino News</h1> <p><span>Our Casino News section is your source for the latest happenings in the world of gambling and casinos. Stay informed on new casino openings, industry developments, and changes in laws and regulations. Discover the latest trends and innovations in the casino industry and get insights into winning strategies and tactics. From major tournament events to tips for success, Casino News has everything you need to stay ahead in the world of online gambling. </span></p> <p><span>Whether you are a seasoned gambler or just starting out, this section is your go-to resource for all things related to the casino world. Stay informed, and stay ahead of the game, with Casino News.</span></p> </div> </div> <section class="news_page max-w-[1440px] mx-auto px-4 my-16"> ${allPosts.map((post) => renderTemplate`${renderComponent($$result, "NewsPostCategory", $$NewsPostCategory, { "href": post.node.uri, "title": post.node.title, "body": post.node.excerpt, "src": post.node.featuredImage?.node?.sourceUrl, "alt": post.node.featuredImage?.node?.altText, "excerpt": post.node.excerpt, "slug": post.node.slug, "uri": post.node.uri })}`)} </section></div>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/templates/NewsArchiveCategory.astro", void 0);

const $$Astro$3 = createAstro();
const $$SingleCasinoSchool = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$SingleCasinoSchool;
  const { node } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="main_container"> <div class="header-background bg-[url('https://slotsparadise.com/wp-content/uploads/2022/08/casino-guides-header-v23.jpg')] bg-cover bg-center h-52 flex items-center text-white font-giloryRegular"> <div class="header-content-row w-[80%] mx-auto"> <div class="page-title"> <h1 class="entry-title text-2xl md:text-3xl font-giloryExtrabold mb-2">${node.title}</h1> </div> </div> </div> <div class="casino_school_main  max-w-[1440px] w-4/5 mx-auto px-2 mt-10 font-giloryRegular"> <div class="post-bread font-semibold"> <div class=""><p><span><span><a href="https://slotsparadise.com/the-beach/">Home</a></span> &gt;
<span><a href="https://slotsparadise.com/the-beach/news/">Casino School</a></span> &gt;
<span class="breadcrumb_last font-giloryExtrabold" aria-current="page"><strong>${node.title}</strong></span></span></p> </div> </div> <div class="casino_single_container mt-10 font-giloryRegular font-semibold"> <div class="inner_container flex flex-col md:flex-row justify-between"> ${renderComponent($$result, "CasinoSchoolSidebar", $$CasinoSchoolSidebar, {})} <div class="content-container w-full md:w-3/5 mt-5 md:mt-0"> <h1 class="text-[#ff688b] font-giloryExtrabold">${node.title}</h1> <article>${unescapeHTML(node.content)}</article> </div> </div> </div> </div> </div>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/templates/SingleCasinoSchool.astro", void 0);

const $$Astro$2 = createAstro();
const $$SingleKnowledgeBase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SingleKnowledgeBase;
  const { node } = Astro2.props;
  const uriParts = node.uri.split("/");
  const guidesCat = uriParts[uriParts.length - 3];
  const guidesCategory = guidesCat.replace(/-/g, " ");
  return renderTemplate`${maybeRenderHead()}<div class="main_container"> <div class="header-background bg-[url('https://slotsparadise.com/wp-content/uploads/2022/08/casino-guides-header-v23.jpg')] bg-cover bg-center h-52 flex items-center text-white font-giloryRegular"> <div class="header-content-row w-[80%] mx-auto"> <div class="page-title"> <h1 class="entry-title text-2xl md:text-3xl font-giloryExtrabold mb-2">${node.title}</h1> </div> </div> </div> <div class="casino_school_main  max-w-[1440px] w-4/5 mx-auto px-2 mt-10 font-giloryRegular"> <div class="post-bread font-semibold"> <div class=""> <p><span><span><a href="https://slotsparadise.com/the-beach/">Home</a></span> &gt;
<span><a href="http://localhost:3000/guides/">Casino Guides</a></span> &gt;
<span><a${addAttribute(`http://localhost:3000/guides/${guidesCat}`, "href")} class="capitalize">${guidesCategory}</a></span> &gt;
<span><a href="#">${node.title}</a></span></span> </p> </div> <div class="casino_single_container mt-10 font-giloryRegular font-semibold"> <div class="inner_container flex flex-col md:flex-row justify-between"> ${renderComponent($$result, "CasinoSchoolSidebar", $$CasinoSchoolSidebar, {})} <div class="content-container w-full md:w-3/5 mt-5 md:mt-0"> <h1 class="text-[#ff688b] font-giloryExtrabold">${node.title}</h1> <article>${unescapeHTML(node.content)}</article> </div> </div> </div> </div> </div></div>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/templates/SingleKnowledgeBase.astro", void 0);

const $$Astro$1 = createAstro();
const $$GuidesSectionArchive = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$GuidesSectionArchive;
  const { node } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="online_casino_guide mt-10 font-giloryRegular font-semibold max-w-[1200px] mx-auto"> <div class="inner_container flex flex-col md:flex-row justify-between"> ${renderComponent($$result, "CasinoGuideSidebar", $$CasinoGuideSidebar, {})} <div class="section-container w-full md:w-3/4 pl-0 md:pl-10 "> <div class="section_block"> <h1><i class="fa italic text-xl">&#xf02d;</i> <a class="font-giloryExtrabold text-[#2f0536] text-2xl"${addAttribute(node.uri, "href")}>${node.name}</a></h1> <div> ${node.basepress.edges.map((item) => renderTemplate`<a${addAttribute(item.node.uri, "href")} class="py-3 font-giloryRegular font-semibold border-b border-dashed leading-3 flex items-start hover:bg-[#ddd]"> <i class="fa text-gray-400 pr-1 block">&#xf059;</i><h3 class="text-sm m-0">${item.node.title}</h3></a>`)} </div> </div> </div> </div></div>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/templates/GuidesSectionArchive.astro", void 0);

const $$Astro = createAstro();
const prerender = true;
async function getStaticPaths() {
  return await getAllUris();
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const uri = Astro2.params.uri.replace(/^\/+|\/+$/g, "");
  const data = await getNodeByURI(uri);
  const node = data.nodeByUri;
  function resolveContentTemplate(node2) {
    let template;
    switch (node2.__typename) {
      case "Post":
        if (uri.includes("news")) {
          template = $$SingleNewsArticle;
        } else {
          template = $$SingleGamePage;
        }
        break;
      case "Category":
        if (uri.includes("news")) {
          template = $$NewsArchiveCategory;
        } else {
          template = $$Archive;
        }
        break;
      case "Page":
        if (uri.includes("casino-school")) {
          template = $$SingleCasinoSchool;
        } else {
          template = $$Single;
        }
        break;
      case "Basepress":
        template = $$SingleKnowledgeBase;
        break;
      case "SectionBasepress":
        template = $$GuidesSectionArchive;
        break;
      case "Tag":
        template = $$Archive;
        break;
      default:
        template = $$Single;
    }
    return template;
  }
  const Template = resolveContentTemplate(node);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": node.title || node.name }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Template", Template, { "node": node })} </main> ` })}`;
}, "/Users/lajennylove/code/projects/astro-theme/src/pages/[...uri].astro", void 0);

const $$file = "/Users/lajennylove/code/projects/astro-theme/src/pages/[...uri].astro";
const $$url = "/[...uri]";

const ____uri_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    getStaticPaths,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____page_ as _, ____uri_ as a };
