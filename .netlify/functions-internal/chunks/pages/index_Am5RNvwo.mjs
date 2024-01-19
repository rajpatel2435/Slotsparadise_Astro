/* empty css                          */
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, i as renderComponent, u as unescapeHTML } from '../astro_j2t8kCZ3.mjs';
import 'kleur/colors';
import 'clsx';
import { w as wpquery, $ as $$Image, b as $$Layout } from './__QeLSpL5N.mjs';
import { b as $$SidebarArticles } from './__aq7Zfyty.mjs';

const $$Astro$7 = createAstro();
const $$HomePosts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$HomePosts;
  const data = await wpquery({
    query: `
  query HomePosts {
  posts(where: {in: [992, 1244, 1285, 1287, 1250, 1289, 1252, 2218]}) {
    edges {
      node {
        title
        slug
        featuredImage {
          node {
            altText
            title
            sourceUrl
          }
        }
        link
      }
    }
  }
}
  `
  });
  return renderTemplate`<!-- Slider main container -->${maybeRenderHead()}<div class="swiper swiper1 py-20 my-12 bg-[#eee]"> <div class=" flex justify-between px-2 mb-4"> <h3 class="text-[#ff688b] text-3xl font-bold font-giloryExtrabold">Game Reviews</h3> <h3><a href="" class="text-lg font-bold text-[#1c8fdf] font-giloryRegular">More Game Reviews</a></h3> </div> <!-- Additional required wrapper --> <div class="swiper-wrapper"> ${data.posts.edges.map((post) => renderTemplate`<!-- Slides --><article class="home-slider-article swiper-slide rounded-[3px] bg-white shadow-homePosts overflow-hidden h-[283px]"> <a class="entry-featured-image-url mb-5"${addAttribute(post.node.link, "href")}> ${renderComponent($$result, "Image", $$Image, { "class": "games-Image reco w-full h-[228px]", "width": "328", "height": "223", "alt": post.node.title, "title": post.node.title, "src": post.node.featuredImage.node.sourceUrl })} </a> <h4 class="entry-title pl-5 h-[55px] leading-[55px] text-[#2f0536] font-extrabold text-[18px] whitespace-nowrap font-gilorybold"> <a href="">${post.node.title}</a> </h4> </article>`)} </div> <!-- If we need navigation buttons --> <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> </div> `;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/Home/HomePosts.astro", void 0);

const $$Astro$6 = createAstro();
const $$CasinoNews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$CasinoNews;
  const postData = await fetch("https://slotsstg.wpengine.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: `query CasinoNewsHome {
  posts(where: {categoryId: 9}, first: 4) {
    edges {
      node {
        link
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
}`
    })
  }).then((data) => data.json());
  const posts = postData.data.posts.edges;
  return renderTemplate`${maybeRenderHead()}<section class="casino_news max-w-[1440px] mx-auto font-giloryRegular px-4 pb-16 pt-10"> <div class="casino_news_title"> <h2 class="text-[#ff688b] pb-3 font-medium font-giloryExtrabold text-3xl">
Casino News
</h2> </div> <div class="casino_news_blocks grid grid-cols-5 gap-12"> <div class="casino_news_left_block col-span-5 md:col-span-3"> ${posts.slice(0, 1).map((post) => renderTemplate`<div class="left_block"> <article class=""> <a class="mb-5"${addAttribute(post.node.link, "href")}> ${post.node.featuredImage?.node ? renderTemplate`${renderComponent($$result, "Image", $$Image, { "class": "shadow-casinoBlock rounded-lg", "width": "825", "height": "460", "alt": post.node.title, "title": post.node.title, "src": post.node.featuredImage.node.sourceUrl })}` : null} </a> <h4 class="text-3xl py-3 font-giloryBold text-[#ff688b]"> <a${addAttribute(post.node.link, "href")}>${post.node.title}</a> </h4> <p class="text-[#491957] py-2 before:content-[url('https://slotsparadise.com/wp-content/uploads/2022/03/Group-4377.png')] flex gap-2 before:inline-block before:h-full before:w-4 items-center"> ${post.node.date.split("T")[0]} </p> <div class="text-[#2f0536] font-giloryRegular font-semibold"> <a class="font-giloryRegular"${addAttribute(post.node.link, "href")}>${unescapeHTML(post.node.excerpt)}</a> </div> </article> </div>`)} </div> <div class="casino_news_right_block col-span-5 md:col-span-2 flex flex-col gap-4"> ${renderComponent($$result, "SidebarArticles", $$SidebarArticles, {})} </div> </div> <div class="more-casino-news-btn text-center mt-10"> <a class="bg-[#a64485] inline-block text-white text-lg px-12 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all">
More News
</a> </div> </section>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/Home/CasinoNews.astro", void 0);

const $$Astro$5 = createAstro();
const $$OnlineCasinoGuides = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$OnlineCasinoGuides;
  return renderTemplate`${maybeRenderHead()}<section class="online_casino_guides py-24 my-12 bg-[#eee] px-5"> <div class="guides_block_container max-w-[1440px] mx-auto"> <div class="title mb-7"> <h2 class="text-[#51135a] pb-3 font-medium font-giloryExtrabold text-3xl">Online Casino Guides</h2> </div> <div class="guides_blocks grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mb-6"> <div class="guides_box flex"> <div class="guide_box_img"> ${renderComponent($$result, "Image", $$Image, { "width": "132", "height": "128", "title": "Blackjack", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/03/Path-6725.png", "alt": "Blackjack" })}</div> <div class="guide_box_content pl-4"> <h4 class="guide_box_title text-[#2f0536] font-giloryExtrabold text-xl pb-2"><a href="">Blackjack</a></h4> <p class="guide_box_text font-semibold text-[#2f0536] leading-6 text-lg font-giloryRegular">Complete Blackjack Guide with all the variations, rules, and the best strategies</p> </div> </div> <div class="guides_box flex"> <div class="guide_box_img"> ${renderComponent($$result, "Image", $$Image, { "width": "130", "height": "128", "title": "Slot Games", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/03/Group-4264.png", "alt": "Slot Games" })}</div> <div class="guide_box_content pl-4"> <h4 class="guide_box_title text-[#2f0536] font-giloryExtrabold text-xl pb-2"><a href="">Slot Games</a></h4> <p class="guide_box_text font-semibold text-[#2f0536] leading-6 text-lg font-giloryRegular">Everything you need to know about Slot Games, how to play, features, strategies & more</p> </div> </div> <div class="guides_box flex"> <div class="guide_box_img"> ${renderComponent($$result, "Image", $$Image, { "width": "126", "height": "128", "title": "Live Dealer Casino", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/03/Path-6729.png", "alt": "Live Dealer Casino" })}</div> <div class="guide_box_content pl-4"> <h4 class="guide_box_title text-[#2f0536] font-giloryExtrabold text-xl pb-2"><a href="">Live Dealer Casino</a></h4> <p class="guide_box_text font-semibold text-[#2f0536] leading-6 text-lg font-giloryRegular">Your ultimate guide about Live Dealer Casino is full of information, games, rules, and bonuses</p> </div> </div> <div class="guides_box flex"> <div class="guide_box_img"> ${renderComponent($$result, "Image", $$Image, { "width": "128", "height": "128", "title": "Table Games", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/03/Path-6726.png", "alt": "Table Games" })}</div> <div class="guide_box_content pl-4"> <h4 class="guide_box_title text-[#2f0536] font-giloryExtrabold text-xl pb-2"><a href="">Table Games</a></h4> <p class="guide_box_text font-semibold text-[#2f0536] leading-6 text-lg font-giloryRegular">Are you a big fan of table games? Check this amazing Table Games Guide with all the basics, strategies, and types</p> </div> </div> <div class="guides_box flex"> <div class="guide_box_img"> ${renderComponent($$result, "Image", $$Image, { "width": "128", "height": "128", "title": "Roulette", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/03/Path-6727.png", "alt": "Roulette" })}</div> <div class="guide_box_content pl-4"> <h4 class="guide_box_title text-[#2f0536] font-giloryExtrabold text-xl pb-2"><a href="">Roulette</a></h4> <p class="guide_box_text font-semibold text-[#2f0536] leading-6 text-lg font-giloryRegular">Become an expert with the perfect Roulette Guide loaded with bonuses, tips, and bets information</p> </div> </div> <div class="guides_box flex"> <div class="guide_box_img"> ${renderComponent($$result, "Image", $$Image, { "width": "128", "height": "128", "title": "Video Poker", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/03/Path-6728.png", "alt": "Video Poker" })}</div> <div class="guide_box_content pl-4"> <h4 class="guide_box_title text-[#2f0536] font-giloryExtrabold text-xl pb-2"><a href="">Video Poker</a></h4> <p class="guide_box_text font-semibold text-[#2f0536] leading-6 text-lg font-giloryRegular">Get into the best Video Poker Guide and increase your wins with bonuses, tips, and tactics</p> </div> </div> </div> </div> <div class="more-guide-btn text-center mt-10"> <a class="bg-[#a64485] inline-block text-white text-lg px-12 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all">More Guides</a> </div> </section>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/Home/OnlineCasinoGuides.astro", void 0);

const $$Astro$4 = createAstro();
const $$Promos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Promos;
  return renderTemplate`${maybeRenderHead()}<section class="promos max-w-[1440px] mx-auto px-4"> <div class="promos_title"><h2 class="text-[#ff688b] pb-3 font-medium font-giloryExtrabold text-3xl">Promos</h2></div> <!-- Slider main container --> <div class="swiper swiper2 bg-[#eee] text-[#51135a] rounded-[10px] pb-16"> <!-- Additional required wrapper --> <div class="swiper-wrapper"> <!-- Slides --> <div class="swiper-slide"> <div class="slide_content"> <div> ${renderComponent($$result, "Image", $$Image, { "width": "1440", "height": "440", "alt": "welcome bonus", "class": "mob-promo w-full object-cover hidden sm:block", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/08/promotions-page-desk-slider.jpg", "title": "welcome bonus" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "width": "870", "height": "300", "alt": "welcome bonus", "class": "mob-promo w-full object-cover block sm:hidden", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/08/promotions-page-mob-slider.jpg", "title": "welcome bonus" })}` })}</div> <h3 class="text-center text-2xl font-giloryExtrabold py-4">Welcome Bonus</h3> <p class="text-base font-giloryRegular font-semibold text-center mb-5">Get a whopping 250% slots bonus up to $2,500 on your very first deposit. 30x playthrough on bonus amount and $5,000 maximum cash-out limit.
<br>Use code: <strong>WELCOME1</strong> Claim now and give your first steps into paradise!</p> <p class="text-center space-y-2"><a class="slide-btn-detail mx-2 bg-[#51135a] inline-block text-white text-lg px-12 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all" href="https://slotsstg.wpengine.com/promotions">Details</a> <a class="slide-btn-more mx-2 bg-[#a64485] inline-block text-white text-lg px-12 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all" href="https://slotsstg.wpengine.com/promotions">More promos</a> </p> </div> </div> <div class="swiper-slide"> <div class="slide_content"> <div> ${renderComponent($$result, "Image", $$Image, { "width": "1440", "height": "440", "alt": "2nd Deposit Bonus", "class": "mob-promo w-full object-cover hidden sm:block", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/07/promotions-page-desk-slider2.jpg", "title": "2nd Deposit Bonus" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "width": "870", "height": "300", "alt": "2nd Deposit Bonus", "class": "mob-promo w-full object-cover block sm:hidden", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/07/promotions-page-mob-slider2.jpg", "title": "2nd Deposit Bonus" })}` })}</div> <h3 class="text-center text-2xl font-giloryExtrabold py-4">2nd Deposit Bonus</h3> <p class="text-base font-giloryRegular font-semibold text-center mb-5">Unplug from the routine for a while and treat yourself with extra funds that let you play longer and win bigger.<br>Use code <strong>WELCOME2</strong> to get a bonus of up to $1,500.</p> <p class="text-center space-y-2"><a class="slide-btn-detail mx-2 bg-[#51135a] inline-block text-white text-lg px-12 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all" href="https://slotsstg.wpengine.com/promotions">Details</a> <a class="slide-btn-more mx-2 bg-[#a64485] inline-block text-white text-lg px-12 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all" href="https://slotsstg.wpengine.com/promotions">More promos</a> </p> </div> </div> <div class="swiper-slide"> <div class="slide_content"> <div> ${renderComponent($$result, "Image", $$Image, { "width": "1440", "height": "440", "alt": "3rd Deposit Bonus", "class": "mob-promo w-full object-cover hidden sm:block", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/07/promotions-page-desk-slider3.jpg", "title": "3rd Deposit Bonus" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "width": "870", "height": "300", "alt": "3rd Deposit Bonus", "class": "mob-promo w-full object-cover block sm:hidden", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/07/promotions-page-mob-slider3.jpg", "title": "3rd Deposit Bonus" })}` })}</div> <h3 class="text-center text-2xl font-giloryExtrabold py-4">3rd Deposit Bonus</h3> <p class="text-base font-giloryRegular font-semibold text-center mb-5">One isn’t enough? Relax and de-stress with another bonus up to $1,500. Use code <strong>WELCOME3.</strong></p> <p class="text-center space-y-2"><a class="slide-btn-detail mx-2 bg-[#51135a] inline-block text-white text-lg px-12 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all" href="https://slotsstg.wpengine.com/promotions">Details</a> <a class="slide-btn-more mx-2 bg-[#a64485] inline-block text-white text-lg px-12 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all" href="https://slotsstg.wpengine.com/promotions">More promos</a> </p> </div> </div> <div class="swiper-slide"> <div class="slide_content"> <div> ${renderComponent($$result, "Image", $$Image, { "width": "1440", "height": "440", "alt": "4th Deposit Bonus", "class": "mob-promo w-full object-cover hidden sm:block", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/07/promo3-promotions3-desk.jpg", "title": "4th Deposit Bonus" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "width": "870", "height": "300", "alt": "4th Deposit Bonus", "class": "mob-promo w-full object-cover block sm:hidden", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/07/promotions-page-mob-slider4.jpg", "title": "4th Deposit Bonus" })}` })}</div> <h3 class="text-center text-2xl font-giloryExtrabold py-4">4th Deposit Bonus</h3> <p class="text-base font-giloryRegular font-semibold text-center mb-5">Take it easy, we’ve got you covered. On your fourth deposit you can claim a bonus up to $2,000. Use code: <strong>WELCOME4</strong>. Complete the 4 welcome bonuses and claim a prize!</p> <p class="text-center space-y-2"><a class="slide-btn-detail mx-2 bg-[#51135a] inline-block text-white text-lg px-12 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all" href="https://slotsstg.wpengine.com/promotions">Details</a> <a class="slide-btn-more mx-2 bg-[#a64485] inline-block text-white text-lg px-12 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all" href="https://slotsstg.wpengine.com/promotions">More promos</a> </p> </div> </div> </div> <!-- If we need navigation buttons --> <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> </div> </section>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/Home/Promos.astro", void 0);

const $$Astro$3 = createAstro();
const $$Recommend = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Recommend;
  const data = await wpquery({
    query: `
  query RecommendPosts {
  posts(where: {categoryId: 61}, first: 5) {
    edges {
      node {
        title
        featuredImage {
          node {
            sourceUrl
            title
          }
        }
        link
      }
    }
  }
}
  `
  });
  return renderTemplate`${maybeRenderHead()}<section class="recommended_block max-w-[1440px] mx-auto px-4 my-16"> <div> <div class="title"> <h2 class="text-[#ff688b] pb-4 font-medium font-giloryExtrabold text-3xl">Recommended</h2> </div> <div class="recommend_block grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-10 overflow-hidden"> ${data.posts.edges.map((post) => renderTemplate`<!-- Slides --><article class="w-full"> <a class="mb-5"${addAttribute(post.node.link, "href")}> <img class="w-full rounded-lg" width="328" height="223"${addAttribute(post.node.title, "alt")}${addAttribute(post.node.title, "title")}${addAttribute(post.node.featuredImage.node.sourceUrl, "src")}> </a> <h4 class="entry-title leading-6 text-[#2f0536] font-bold text-[18px] font-giloryRegular"> <a${addAttribute(post.node.link, "href")}>${post.node.title}</a> </h4> </article>`)} </div> </div> </section>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/Home/Recommend.astro", void 0);

const $$Astro$2 = createAstro();
const $$Reviews = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Reviews;
  return renderTemplate`${maybeRenderHead()}<div class="reviews_box"> <h2 class="text-[#ff688b] pb-3 font-medium font-giloryExtrabold text-3xl">Reviews</h2> <div id="get-reviews"></div> </div> `;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/Reviews.astro", void 0);

const $$Astro$1 = createAstro();
const $$WhySlots = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$WhySlots;
  return renderTemplate`${maybeRenderHead()}<div> <div class=" font-giloryRegular "> <h2 class="text-[#ff688b] pb-3 font-medium font-giloryExtrabold text-3xl">
Why Slots Paradise?
</h2> </div> <div class="why-slots-tabs flex flex-col md:flex-row gap-3"> <ul id="tabs" class="flex flex-col h-[460px] justify-between"> <li class="bg-[#eee] text-[#a64485] text-center min-w-[330px] py-2 rounded-lg"> <a href="#tab_0" class="block w-full font-giloryRegular font-semibold ">
Your safety is our priority
</a> </li> <li class="bg-[#eee] text-[#a64485] text-center min-w-[330px] py-2 rounded-lg"> <a href="#tab_1" class="block w-full font-giloryRegular font-semibold ">
Benefits of playing Casino Games Online
</a> </li> <li class="bg-[#eee] text-[#a64485] text-center min-w-[330px] py-2 rounded-lg"> <a href="#tab_2" class="block w-full font-giloryRegular font-semibold ">
Casino Game Types
</a> </li> <li class="bg-[#eee] text-[#a64485] text-center min-w-[330px] py-2 rounded-lg"> <a href="#tab_3" class="block w-full font-giloryRegular font-semibold ">
Reliable and Fast Payouts
</a> </li> <li class="bg-[#eee] text-[#a64485] text-center min-w-[330px] py-2 rounded-lg"> <a href="#tab_4" class="block w-full font-giloryRegular font-semibold ">
Player Reviews and Site Reputation
</a> </li> <li class="bg-[#eee] text-[#a64485] text-center min-w-[330px] py-2 rounded-lg"> <a href="#tab_5" class="block w-full font-giloryRegular font-semibold ">
Games Fairness
</a> </li> <li class="bg-[#eee] text-[#a64485] text-center min-w-[330px] py-2 rounded-lg"> <a href="#tab_6" class="block w-full font-giloryRegular font-semibold ">
Bonuses and Promotions
</a> </li> <li class="bg-[#eee] text-[#a64485] text-center min-w-[330px] py-2 rounded-lg"> <a href="#tab_7" class="block w-full font-giloryRegular font-semibold ">
Game Variety and Providers
</a> </li> <li class="bg-[#eee] text-[#a64485] text-center min-w-[330px] py-2 rounded-lg"> <a href="#tab_8" class="block w-full font-giloryRegular font-semibold ">
Customer Service
</a> </li> </ul> <div class="all_tabs bg-gradient-to-r from-custom-pink via-custom-purple to-transparent 
      max-w-[600px] text-white font-giloryRegular font-semibold p-7 h-[460px] rounded-lg" id="tab-contents"> <div class="tab" id="tab_0"> <div class="tab_content"> <img class="block mx-auto" width="102" height="128" alt="sp-your-safety-priority" src="https://cdn-ijecn.nitrocdn.com/xQDKkszZvfubgABZYAOVkLEBHdJfEQZp/assets/images/optimized/rev-0836318/slotsparadise.com/wp-content/uploads/2022/02/Group-4384.png" title="sp-your-safety-priority"> <div class="tab-pgraph max-h-[233px] overflow-x-hidden overflow-scroll px-2"> <p class="pb-3">
At Slots Paradise, we value your privacy and security above all else.
                We are committed to protecting you from any form of online fraud or abuse.
</p> <p class="pb-3">
We have a strict Code of Practice that governs the conduct of our employees
                and agents concerning the collection, use, and disclosure of personal information.
<br> <span>
We adhere to strict guidelines when it comes to data protection. This
                  means that we will never sell your details to other companies for marketing
                  purposes.
</span> </p> <p class="pb-3"> <span>
Our site uses SSL encryption technology to protect your sensitive information.
                  The SSL technology encrypts every transaction so that no one can see what
                  you enter online.
</span> </p> <p class="pb-3"> <span>
Our website has been certified as secure. This certification ensures that
                  our website meets certain data security and privacy standards.
</span> </p> <p class="pb-3"> <span>
The Paradise Slots website complies with the requirements of the US Data
                  Protection Act 2020, whereby we must notify you if we intend to share your
                  information with third parties for marketing purposes.
</span> </p> <p class="pb-3"> <span>
If you would like more information about how we handle your personal information,
                  please contact us at paradiseslots.com or through our hotlines.
</span> </p> <p class="pb-3"> <span>
Lastly, we are committed to updating our security measures regularly to
                  ensure that they remain effective. If there are changes to our policy,
                  we will post them here.
</span> </p> </div> </div> </div> <div class="tab hidden" id="tab_1"> <div class="tab_content"> <p class="pb-3"> <img class="block mx-auto" width="124" height="128" alt="Benefits of playing Casino Games Online" src="https://cdn-ijecn.nitrocdn.com/xQDKkszZvfubgABZYAOVkLEBHdJfEQZp/assets/images/optimized/rev-0836318/slotsparadise.com/wp-content/uploads/2022/03/sp-benefits-playing-2.png" title="Benefits of playing Casino Games Online"> </p> <div class="tab-pgraph max-h-[233px] overflow-x-hidden overflow-scroll pr-3"> <p class="pb-3"> <span>
Featuring the latest updates and reviews with the final goal of providing
                  players like you with the best casino experience.
</span> </p> <p class="pb-3"> <span>
Each of our casino game guides is packed full of expertly-researched material
                  that has proven positive results.
</span> </p> <p class="pb-3"> <span>
We are committed to providing a world-class experience for each of our
                  readers.
</span> </p> <p class="pb-3"> <span>
We do so by ensuring that we report the most up-to-date and accurate information
                  within each of our one-of-a-kind guides.
</span> </p> </div> </div> </div> <div class="tab hidden" id="tab_2"> <div class="tab_content"> <img class="block mx-auto" width="128" height="128" alt="Casino Game Types" src="https://cdn-ijecn.nitrocdn.com/xQDKkszZvfubgABZYAOVkLEBHdJfEQZp/assets/images/optimized/rev-0836318/slotsparadise.com/wp-content/uploads/2022/03/sp-game-types.png" title="Casino Game Types"> <div class="tab-pgraph max-h-[233px] overflow-x-hidden overflow-scroll pr-3"> <p class="pb-3"> <span>
At Slots Paradise, we offer a wide variety of casino games to suit your
                  needs and preferences. Our online slots are some of the most popular in
                  the industry, with more than 2000 titles available for play. Whether you’re
                  looking for classic slot machines or video poker, our selection will have
                  something to please every player.
</span> </p> <p class="pb-3"> <span>
We also offer roulette, blackjack, craps, baccarat, keno, and scratch
                  cards. If you want to try your luck at one of these table games, you can
                  do so right from the comfort of your home.
<br> </span> </p> <p class="pb-3"> <span>
At Slots Paradise, we know that sometimes it’s not always about how much
                  money you win but rather what fun you have while playing! That is why we
                  strive to make sure all of our players enjoy their time on our site. All
                  of our games are designed to be easy-to-use and quick to learn, so you
                  can start having fun right away. You don’t need any special skills to get
                  started; just sign up and begin playing.
<br> </span> </p> <p class="pb-3"> <span>
Without forgetting, all our games are acquired from renowned providers
                  such as Rival, Betsoft and Thunderspin. So, if you like our casino games,
                  you’ll love them too. The best part? They’re free! And they come with no
                  strings attached.
<br> </span> </p> <p class="pb-3"> <span>
We also focus on the latest games and technology. This means you’ll find
                  the hottest new releases and top software providers in the business. Plus,
                  we offer daily promotions and bonuses to keep our players happy and coming
                  back for more.
<br> </span> </p> <p class="pb-3"> <span>
So, whether you’re looking for a place to relax after work or you’re ready
                  to kick off your shoes and party hard, we invite you to join us today at
                  Slots Paradise Online!
</span> </p> </div> </div> </div> <div class="tab hidden" id="tab_3"> <div class="tab_content"> <img class="block mx-auto" width="147" height="128" alt="Reliable and Fast Payouts" src="https://cdn-ijecn.nitrocdn.com/xQDKkszZvfubgABZYAOVkLEBHdJfEQZp/assets/images/optimized/rev-0836318/slotsparadise.com/wp-content/uploads/2022/03/sp-fast-payouts.png" title="Reliable and Fast Payouts"> <div class="tab-pgraph max-h-[233px] overflow-x-hidden overflow-scroll pr-3"> <p class="pb-3"> <span>
At Slots Paradise, we offer reliable and fast payouts to our players.
                  We are a licensed casino, so you can be sure that your money is safe with
                  us. When it comes to withdrawals, we offer competitive processing times!
</span> </p> <p class="pb-3"> <span>
Our platform supports Wire transfers and Crypto payments.
</span> </p> <p class="pb-3"> <span>
You will always receive timely payouts regardless of the payments method
                  chosen. No hidden fees, no tricks.
</span> <br> <span>
Our banking partners approve all the payment methods available. This means
                  that they have passed strict security checks and meet all the necessary
                  requirements. The only thing you need to do is make a deposit to play.
</span> </p> <p class="pb-3"> <span>
If you want to withdraw your winnings, simply contact our support team.
                  They will help you complete the withdrawal request as quickly as possible.
</span> </p> <p class="pb-3"> <span>
At Slots Paradise, we take pride in offering the best customer service
                  around. Our friendly staff members are ready to assist you 24/7.
</span> </p> <p class="pb-3"> <span>
If you ever have any questions about payments, deposits, bonuses, promotions,
                  or other issues related to playing at our online casino, feel free to get
                  in touch with us via email, phone, or live chat.
</span> </p> </div> </div> </div> <div class="tab hidden" id="tab_4"> <div class="tab_content"> <img class="block mx-auto" width="151" height="128" alt="Player Reviews and Site Reputation" src="https://cdn-ijecn.nitrocdn.com/xQDKkszZvfubgABZYAOVkLEBHdJfEQZp/assets/images/source/rev-0836318/slotsparadise.com/wp-content/uploads/2022/03/sp-player-reviews.png" title="Player Reviews and Site Reputation"> <div class="tab-pgraph max-h-[233px] overflow-x-hidden overflow-scroll pr-3"> <p class="pb-3"> <span>
At Slots Paradise, we have a lot of fun playing slot machines online for
                  free. We are always looking to add new games that will keep us entertained
                  and provide hours of entertainment.
</span> </p> <p class="pb-3"> <span>
Our players love the variety and quality of the slot games available here.
                  You can tell from the player reviews and ratings on this site alone.
</span> </p> <p class="pb-3"> <span>
Slots Paradise has a good reputation in the gambling industry. Our team
                  of casino reviewers takes great pride in providing honest and unbiased
                  information about all of the sites they review.
</span> </p> <p class="pb-3"> <span>
Our customers rated the casino 4 out of 5 stars based on their experience
                  while visiting our website. You can read more about how we rate casinos
                  on our page about Casino Ratings.
</span> </p> <p class="pb-3"> <span>
If you want to be sure you’re getting the best possible gaming experience,
                  make sure you check out our list of recommended payment methods and deposit
                  options.
</span> </p> <p class="pb-3"> <span>
If you’re interested in reading some of the positive feedback our players
                  have left us, check out our page about Customer Satisfaction.
</span> </p> <p class="pb-3"> <span>
The more feedback we receive, the better our service becomes. If you have
                  any questions or comments, please feel free to contact us.
</span> </p> </div> </div> </div> <div class="tab hidden" id="tab_5"> <div class="tab_content"> <img class="block mx-auto" width="125" height="128" alt="Games Fairness" style="display:block;margin-left:auto;margin-right:auto;" src="https://cdn-ijecn.nitrocdn.com/xQDKkszZvfubgABZYAOVkLEBHdJfEQZp/assets/images/optimized/rev-0836318/slotsparadise.com/wp-content/uploads/2022/03/sp-games-fairness.png" title="Games Fairness"> <div class="tab-pgraph max-h-[233px] overflow-x-hidden overflow-scroll pr-3"> <p class="pb-3"> <span>
At Slots Paradise, game fairness is our top priority. All of the games
                  are tested and certified fairly by independent auditors before they are
                  added to our site. We do not accept any unfair or deceptive games in any
                  way. We test our game fairness using three methods:
</span> </p> <p class="pb-3"> <strong> <span>
Random Number Generators
</span> </strong> <br> <span>
In random number generator (RNG) testing, we use a computer program to
                  generate numbers at random. These numbers are then compared against the
                  expected results from an RNG. If there’s a discrepancy between what was
                  generated and what should have been generated, it means that the RNG has
                  been compromised. In other words, the RNG is cheating you out of your winnings.
</span> </p> <p class="pb-3"> <span>
To ensure that all of our games are fair, we regularly run them through
                  this process.
</span> </p> <p class="pb-3"> <strong> <span>
Independent Auditors
</span> </strong> <br> <span>
Our second method for checking games for fairness involves hiring outside
                  auditors specializing in gaming audits. They examine each game thoroughly
                  to ensure that it meets our high standards of fairness. Once the auditors
                  are satisfied with the game’s fairness, they issue a certificate stating
                  as much. This ensures that every single game offered at Slots Paradise
                  is fair and honest.
</span> </p> </div> </div> </div> <div class="tab hidden" id="tab_6"> <div class="tab_content"> <img class="block mx-auto" width="141" height="128" alt="Bonuses and Promotions" src="https://cdn-ijecn.nitrocdn.com/xQDKkszZvfubgABZYAOVkLEBHdJfEQZp/assets/images/optimized/rev-0836318/slotsparadise.com/wp-content/uploads/2022/03/sp-bonuses-promotions.png" title="Bonuses and Promotions"> <div class="tab-pgraph max-h-[233px] overflow-x-hidden overflow-scroll pr-3"> <p class="pb-3"> <span>
At Slots Paradise, bonuses and promotions are our specialties! We have
                  a wide variety of slots that feature the best bonus games around. Our slot
                  machines come with some of the biggest progressive jackpots in the industry.
</span> </p> <p class="pb-3"> <span>
Our welcoming bonus is one of the most generous you will find on any online
                  casino site. You can get up to $1,000 free when you make your first deposit
                  at Slots Paradise!
</span> </p> <p class="pb-3"> <span>
You can also earn extra cash by playing all of our other exciting slot
                  games. When you play Slots Paradise slots for real money, you’ll be able
                  to enjoy exclusive features like Free Spins, Scatter Wins, and Bonus Rounds.
</span> </p> <p class="pb-3"> <span>
Plus, we offer daily deals and weekly promotions, so you never run out
                  of ways to win big. Our daily and weekly promotions include free spins,
                  no-deposit bonuses, reload bonuses and more.
</span> </p> <p class="pb-3"> <span>
You may also enjoy the cashback offers that we regularly provide to players
                  who sign up through us.
</span> </p> <p class="pb-3"> <span>
We don’t have any hidden fees or charges. All of our bonuses and promotions
                  are clearly displayed before you sign up. So, there’s nothing to worry
                  about.
</span> </p> <p class="pb-3"> <span>
If you’ve got questions about our welcome bonus, please contact us. We’re
                  always looking for new ways to reward our loyal customers and are happy
                  to answer any questions you may have.
</span> </p> </div> </div> </div> <div class="tab hidden" id="tab_7"> <div class="tab_content"> <img class="block mx-auto" width="127" height="128" alt="Game Variety and Providers" src="https://cdn-ijecn.nitrocdn.com/xQDKkszZvfubgABZYAOVkLEBHdJfEQZp/assets/images/optimized/rev-0836318/slotsparadise.com/wp-content/uploads/2022/03/sp-game-variety-providers.png" title="Game Variety and Providers"> <div class="tab-pgraph max-h-[233px] overflow-x-hidden overflow-scroll pr-3"> <p class="pb-3"> <span>
At Slots Paradise, we understand that you want to play the games you like.
                  That’s why we have a wide variety of slot machines from top providers,
                  including slots, video poker, keno, bingo, and more! We also offer a large
                  selection of online casino games for our players.
</span> </p> <p class="pb-3"> <span>
Most of our games have free trials, so you can try them out before committing
                  to any real money deposit. New games are being continuously added for your
                  enjoyment and entertainment.
</span> </p> <p class="pb-3"> <span>
If you are looking for a place where you can find all of these great games
                  in one location, then look no further than Slots Paradise. Our site is
                  easy to navigate and has a clean layout with plenty of information about
                  each game.
</span> </p> <p class="pb-3"> <span>
You will be able to see what other people think about each game and how
                  much they like it. This way, you won’t waste time playing games that don’t
                  suit you or your budget.
</span> </p> <p class="pb-3"> <span>
We know that when you visit us, you expect to find only the best quality
                  games at the lowest prices. Our gaming partners include some of the most
                  trusted names in the industry, such as Nucleus Gaming, Betsoft, Dragon
                  Gaming, Rival, Mancala and Zeus Play. Therefore, you are sure that you
                  will get only the highest quality games available on the web.
</span> </p> <p class="pb-3"> <span>
Our team of experts is ready to help you choose the right game based on
                  your personal preferences. Whether you prefer classic slot machines, progressive
                  jackpot slots, or table games, we’ve got you covered.
</span> </p> </div> </div> </div> <div class="tab hidden" id="tab_8"> <div class="tab_content"> <p class="pb-3"> <img class="block mx-auto" width="97" height="128" alt="Customer Service" src="https://cdn-ijecn.nitrocdn.com/xQDKkszZvfubgABZYAOVkLEBHdJfEQZp/assets/images/source/rev-0836318/slotsparadise.com/wp-content/uploads/2022/03/sp-customer-service.png" title="Customer Service"> </p> <div class="tab-pgraph max-h-[233px] overflow-x-hidden overflow-scroll pr-3"> <p class="pb-3"> <span>
At Slots Paradise, we pride ourselves in the best customer service available
                  on the web. We are always here to help you with any questions or concerns
                  that you may have. Our friendly and knowledgeable staff is ready to assist
                  you at any time of day!
</span> </p> <p class="pb-3"> <span>
We have online chat support for all your questions 24/7. You can also
                  call us toll-free if you prefer. Besides, our social media handles are
                  always active, so feel free to ask a question there as well.
</span> </p> <p class="pb-3"> <span>
Players can enquire about their account by visiting the “My Account” section
                  of the website. Here they will find all the information regarding their
                  current balance, pending transactions, etc. They can also check out the
                  FAQs page to get answers to some common queries.
</span> </p> <p class="pb-3"> <span>
If players want to make changes to their account, then they need to log
                  into their account first. Once logged in, they can go ahead and change
                  their password, email address, phone number, etc.
</span> </p> <p class="pb-3"> <span>
Players can also update their billing details. If you want assistance
                  with all these things, then do not hesitate to contact our customer care
                  team via live chat, telephone, or email.
</span> </p> <p class="pb-3"> <span>
Lastly, you can leave your details so that the available agents can reach
                  you whenever required.
</span> </p> </div> </div> </div> </div> </div> </div> `;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/Home/WhySlots.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Welcome to Astro." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="top_casino_section max-w-[1440px] mx-auto"> <div class="home-first-column"> <div class="the-beach-new-page"> <h1 class="wp-block-heading text-center text-3xl sm:text-[40px] font-bold capitalize font-giloryBold">
Top casino games to play online
</h1> <div class="beach-games flex justify-center items-center sm:justify-between mt-10 flex-wrap font-giloryBold"> <div class="w-full sm:w-1/2 md:w-1/4 p-4"> <div class="beach-home-game rounded-[20px] overflow-hidden text-center shadow-custom"> <figure class=""> <img class="w-full" width="686" height="386" src="https://slotspressdev.wpengine.com/the-beach/images/2023/10/slots-paradise-thebeach-blackjack.webp" alt=""> </figure> <h3 class="image-block-text font-semibold py-3 text-2xl">
BlackJack
</h3> </div> </div> <div class="w-full sm:w-1/2 md:w-1/4 p-4"> <div class="beach-home-game rounded-[20px] overflow-hidden text-center shadow-custom"> <figure class=""> <img class="w-full" width="686" height="386" src="https://slotspressdev.wpengine.com/the-beach/images/2023/10/slots-paradise-thebeach-slots-1.webp" alt=""> </figure> <h3 class="image-block-text font-semibold py-3 text-2xl">
Slots
</h3> </div> </div> <div class="w-full sm:w-1/2 md:w-1/4 p-4"> <div class="beach-home-game rounded-[20px] overflow-hidden text-center shadow-custom"> <figure class=""> <img class="w-full" width="686" height="386" src="https://slotspressdev.wpengine.com/the-beach/images/2023/10/slots-paradise-thebeach-roulette.webp" alt=""> </figure> <h3 class="image-block-text font-semibold py-3 text-2xl">
Roulette
</h3> </div> </div> <div class="w-full sm:w-1/2 md:w-1/4 p-4"> <div class="beach-home-game rounded-[20px] overflow-hidden text-center shadow-custom"> <figure class=""> <img class="w-full" width="686" height="386" src="https://slotspressdev.wpengine.com/the-beach/images/2023/10/slots-paradise-thebeach-baccarat.webp" alt=""> </figure> <h3 class="image-block-text font-semibold py-3 text-2xl">
Table Games
</h3> </div> </div> </div> <div class=""> <div class="more-casino-games-btn text-center"> <a class="mt-5 bg-[#a64485] inline-block text-white font-giloryExtrabold text-lg px-10 py-2 rounded-[25px] font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all">More Casino Games</a> </div> </div> </div> </div> </section> ${renderComponent($$result2, "HomePosts", $$HomePosts, {})} ${renderComponent($$result2, "CasinoNews", $$CasinoNews, {})} ${renderComponent($$result2, "OnlineCasinoGuides", $$OnlineCasinoGuides, {})} <div class="review_container flex flex-col lg:flex-row max-w-[1440px] mx-auto px-4"> <div class="w-full lg:w-[64%] mr-[5%]">${renderComponent($$result2, "WhySlots", $$WhySlots, {})}</div> <div class="w-full lg:w-[31%]">${renderComponent($$result2, "Reviews", $$Reviews, {})}</div> </div> ${renderComponent($$result2, "Promos", $$Promos, {})} ${renderComponent($$result2, "Recommend", $$Recommend, {})} </main> ` })}`;
}, "/Users/lajennylove/code/projects/astro-theme/src/pages/index.astro", void 0);

const $$file = "/Users/lajennylove/code/projects/astro-theme/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
