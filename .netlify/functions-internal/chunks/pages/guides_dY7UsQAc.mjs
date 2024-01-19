/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, i as renderComponent, m as maybeRenderHead, h as addAttribute } from '../astro_j2t8kCZ3.mjs';
import 'kleur/colors';
import { b as $$Layout } from './__QeLSpL5N.mjs';
import { C as CasinoGuidesArticles, a as $$CasinoGuideSidebar } from './__aq7Zfyty.mjs';

const $$Astro = createAstro();
const $$Guides = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Guides;
  const data = await CasinoGuidesArticles();
  const sections = data.sectionsBasepress.edges;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Online Casino Guides" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="header-background bg-[url('https://slotsparadise.com/wp-content/uploads/2022/07/thebeach-guides.jpg')] bg-cover bg-center h-52 flex items-center text-white font-giloryRegular"> <div class="header-content-row w-[80%] mx-auto"> <div class="page-title"> <h1 class="entry-title text-2xl md:text-3xl font-giloryExtrabold mb-2">
Test
</h1> </div> </div> </div> <div class="online_casino_guide mt-10 font-giloryRegular font-semibold max-w-[1200px] mx-auto"> <div class="post-bread font-semibold my-10"> <div> <p> <span><span><a href="https://slotsparadise.com/the-beach/">Home</a></span> &gt;
<span><a href="/guides/">Casino Guides</a></span> </span> </p> <div class="inner_container flex flex-col md:flex-row justify-between"> ${renderComponent($$result2, "CasinoGuideSidebar", $$CasinoGuideSidebar, {})} <div class="section-container w-full md:w-3/4 mt-5 md:mt-0 pl-0 md:pl-2 xl:pl-10"> <div class="section_block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> ${sections.map((section) => renderTemplate`<div class="bg-white rounded px-5 pt-5 border border-[#f2f2f2] flex flex-col justify-between"> <h2 class="flex items-center"> <i class="fa italic block pr-2 text-lg">&#xf02d;</i>${" "} <a class="font-giloryExtrabold text-[#2f0536] text-lg leading-4"${addAttribute(section.node.uri, "href")}> ${section.node.name} </a> </h2> ${section.node.basepress.edges.map((article) => renderTemplate`<div class="hover:bg-[#ddd]"> <p class="py-2 font-giloryRegular font-semibold border-b border-dashed leading-3 flex items-start"> <i class="fa text-gray-400 pr-1 pt-1 block">
&#xf059;
</i> <a class="text-sm"${addAttribute(article.node.uri, "href")}> ${article.node.title} </a> </p> </div>`)} <p class="pt-4 pb-2"> <a class="py-2 block text-[#FD106A] text-sm"${addAttribute(section.node.uri, "href")}> <span>View all ${section.node.count} articles</span> </a> </p> </div>`)} </div> </div> </div> </div> </div> </div> ` })}`;
}, "/Users/lajennylove/code/projects/astro-theme/src/pages/guides.astro", void 0);

const $$file = "/Users/lajennylove/code/projects/astro-theme/src/pages/guides.astro";
const $$url = "/guides";

export { $$Guides as default, $$file as file, $$url as url };
