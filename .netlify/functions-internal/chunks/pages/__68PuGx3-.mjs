import '@astrojs/internal-helpers/path';
/* empty css                          */
import { e as createAstro, f as createComponent, A as AstroError, g as ImageMissingAlt, r as renderTemplate, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, u as unescapeHTML, i as renderComponent, F as Fragment, j as renderSlot, k as renderHead } from '../astro_V6vkh6i_.mjs';
import 'kleur/colors';
import 'clsx';
import { optimize } from 'svgo';
/* empty css                          */
import { i as isESMImportedImage, g as getImage$1 } from '../astro/assets-service_witxwYB4.mjs';

const $$Astro$b = createAstro();
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(additionalAttributes)}${spreadAttributes(image.attributes)}>`;
}, "/Users/lajennylove/code/projects/astro-theme/node_modules/astro/components/Image.astro", void 0);

const $$Astro$a = createAstro();
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({ ...props, format, widths: props.widths, densities: props.densities })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(props.src) && specialFormatsFallback.includes(props.src.format)) {
    resultFallbackFormat = props.src.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionaAttributes = {};
  if (props.sizes) {
    sourceAdditionaAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute("image/" + image.options.format, "type")}${spreadAttributes(sourceAdditionaAttributes)}>`;
  })} <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(imgAdditionalAttributes)}${spreadAttributes(fallbackImage.attributes)}> </picture>`;
}, "/Users/lajennylove/code/projects/astro-theme/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[]};
					new URL("file:///Users/lajennylove/code/projects/astro-theme/dist/");
					const getImage = async (options) => await getImage$1(options, imageConfig);

const SPRITESHEET_NAMESPACE = `astroicon`;

const baseURL = "https://api.astroicon.dev/v1/";
const requests = /* @__PURE__ */ new Map();
const fetchCache = /* @__PURE__ */ new Map();
async function get(pack, name) {
  const url = new URL(`./${pack}/${name}`, baseURL).toString();
  if (requests.has(url)) {
    return await requests.get(url);
  }
  if (fetchCache.has(url)) {
    return fetchCache.get(url);
  }
  let request = async () => {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(await res.text());
    }
    const contentType = res.headers.get("Content-Type");
    if (!contentType.includes("svg")) {
      throw new Error(`[astro-icon] Unable to load "${name}" because it did not resolve to an SVG!

Recieved the following "Content-Type":
${contentType}`);
    }
    const svg = await res.text();
    fetchCache.set(url, svg);
    requests.delete(url);
    return svg;
  };
  let promise = request();
  requests.set(url, promise);
  return await promise;
}

const splitAttrsTokenizer = /([a-z0-9_\:\-]*)\s*?=\s*?(['"]?)(.*?)\2\s+/gim;
const domParserTokenizer = /(?:<(\/?)([a-zA-Z][a-zA-Z0-9\:]*)(?:\s([^>]*?))?((?:\s*\/)?)>|(<\!\-\-)([\s\S]*?)(\-\->)|(<\!\[CDATA\[)([\s\S]*?)(\]\]>))/gm;
const splitAttrs = (str) => {
  let res = {};
  let token;
  if (str) {
    splitAttrsTokenizer.lastIndex = 0;
    str = " " + (str || "") + " ";
    while (token = splitAttrsTokenizer.exec(str)) {
      res[token[1]] = token[3];
    }
  }
  return res;
};
function optimizeSvg(contents, name, options) {
  return optimize(contents, {
    plugins: [
      "removeDoctype",
      "removeXMLProcInst",
      "removeComments",
      "removeMetadata",
      "removeXMLNS",
      "removeEditorsNSData",
      "cleanupAttrs",
      "minifyStyles",
      "convertStyleToAttrs",
      {
        name: "cleanupIDs",
        params: { prefix: `${SPRITESHEET_NAMESPACE}:${name}` }
      },
      "removeRasterImages",
      "removeUselessDefs",
      "cleanupNumericValues",
      "cleanupListOfValues",
      "convertColors",
      "removeUnknownsAndDefaults",
      "removeNonInheritableGroupAttrs",
      "removeUselessStrokeAndFill",
      "removeViewBox",
      "cleanupEnableBackground",
      "removeHiddenElems",
      "removeEmptyText",
      "convertShapeToPath",
      "moveElemsAttrsToGroup",
      "moveGroupAttrsToElems",
      "collapseGroups",
      "convertPathData",
      "convertTransform",
      "removeEmptyAttrs",
      "removeEmptyContainers",
      "mergePaths",
      "removeUnusedNS",
      "sortAttrs",
      "removeTitle",
      "removeDesc",
      "removeDimensions",
      "removeStyleElement",
      "removeScriptElement"
    ]
  }).data;
}
const preprocessCache = /* @__PURE__ */ new Map();
function preprocess(contents, name, { optimize }) {
  if (preprocessCache.has(contents)) {
    return preprocessCache.get(contents);
  }
  if (optimize) {
    contents = optimizeSvg(contents, name);
  }
  domParserTokenizer.lastIndex = 0;
  let result = contents;
  let token;
  if (contents) {
    while (token = domParserTokenizer.exec(contents)) {
      const tag = token[2];
      if (tag === "svg") {
        const attrs = splitAttrs(token[3]);
        result = contents.slice(domParserTokenizer.lastIndex).replace(/<\/svg>/gim, "").trim();
        const value = { innerHTML: result, defaultProps: attrs };
        preprocessCache.set(contents, value);
        return value;
      }
    }
  }
}
function normalizeProps(inputProps) {
  const size = inputProps.size;
  delete inputProps.size;
  const w = inputProps.width ?? size;
  const h = inputProps.height ?? size;
  const width = w ? toAttributeSize(w) : void 0;
  const height = h ? toAttributeSize(h) : void 0;
  return { ...inputProps, width, height };
}
const toAttributeSize = (size) => String(size).replace(/(?<=[0-9])x$/, "em");
async function load(name, inputProps, optimize) {
  const key = name;
  if (!name) {
    throw new Error("<Icon> requires a name!");
  }
  let svg = "";
  let filepath = "";
  if (name.includes(":")) {
    const [pack, ..._name] = name.split(":");
    name = _name.join(":");
    filepath = `/src/icons/${pack}`;
    let get$1;
    try {
      const files = import.meta.globEager(
        "/src/icons/**/*.{js,ts,cjs,mjc,cts,mts}"
      );
      const keys = Object.fromEntries(
        Object.keys(files).map((key2) => [key2.replace(/\.[cm]?[jt]s$/, ""), key2])
      );
      if (!(filepath in keys)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const mod = files[keys[filepath]];
      if (typeof mod.default !== "function") {
        throw new Error(
          `[astro-icon] "${filepath}" did not export a default function!`
        );
      }
      get$1 = mod.default;
    } catch (e) {
    }
    if (typeof get$1 === "undefined") {
      get$1 = get.bind(null, pack);
    }
    const contents = await get$1(name, inputProps);
    if (!contents) {
      throw new Error(
        `<Icon pack="${pack}" name="${name}" /> did not return an icon!`
      );
    }
    if (!/<svg/gim.test(contents)) {
      throw new Error(
        `Unable to process "<Icon pack="${pack}" name="${name}" />" because an SVG string was not returned!

Recieved the following content:
${contents}`
      );
    }
    svg = contents;
  } else {
    filepath = `/src/icons/${name}.svg`;
    try {
      const files = import.meta.globEager("/src/icons/**/*.svg", { as: "raw" });
      if (!(filepath in files)) {
        throw new Error(`Could not find the file "${filepath}"`);
      }
      const contents = files[filepath];
      if (!/<svg/gim.test(contents)) {
        throw new Error(
          `Unable to process "${filepath}" because it is not an SVG!

Recieved the following content:
${contents}`
        );
      }
      svg = contents;
    } catch (e) {
      throw new Error(
        `[astro-icon] Unable to load "${filepath}". Does the file exist?`
      );
    }
  }
  const { innerHTML, defaultProps } = preprocess(svg, key, { optimize });
  if (!innerHTML.trim()) {
    throw new Error(`Unable to parse "${filepath}"!`);
  }
  return {
    innerHTML,
    props: { ...defaultProps, ...normalizeProps(inputProps) }
  };
}

const $$Astro$9 = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Icon;
  let { name, pack, title, optimize = true, class: className, ...inputProps } = Astro2.props;
  let props = {};
  if (pack) {
    name = `${pack}:${name}`;
  }
  let innerHTML = "";
  try {
    const svg = await load(name, { ...inputProps, class: className }, optimize);
    innerHTML = svg.innerHTML;
    props = svg.props;
  } catch (e) {
    {
      throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
    }
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(name, "astro-icon")}>${unescapeHTML((title ? `<title>${title}</title>` : "") + innerHTML)}</svg>`;
}, "/Users/lajennylove/code/projects/astro-theme/node_modules/astro-icon/lib/Icon.astro", void 0);

const sprites = /* @__PURE__ */ new WeakMap();
function trackSprite(request, name) {
  let currentSet = sprites.get(request);
  if (!currentSet) {
    currentSet = /* @__PURE__ */ new Set([name]);
  } else {
    currentSet.add(name);
  }
  sprites.set(request, currentSet);
}
const warned = /* @__PURE__ */ new Set();
async function getUsedSprites(request) {
  const currentSet = sprites.get(request);
  if (currentSet) {
    return Array.from(currentSet);
  }
  if (!warned.has(request)) {
    const { pathname } = new URL(request.url);
    console.log(`[astro-icon] No sprites found while rendering "${pathname}"`);
    warned.add(request);
  }
  return [];
}

const $$Astro$8 = createAstro();
const $$Spritesheet = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Spritesheet;
  const { optimize = true, style, ...props } = Astro2.props;
  const names = await getUsedSprites(Astro2.request);
  const icons = await Promise.all(names.map((name) => {
    return load(name, {}, optimize).then((res) => ({ ...res, name })).catch((e) => {
      {
        throw new Error(`[astro-icon] Unable to load icon "${name}"!
${e}`);
      }
    });
  }));
  return renderTemplate`${maybeRenderHead()}<svg${addAttribute(`position: absolute; width: 0; height: 0; overflow: hidden; ${style ?? ""}`.trim(), "style")}${spreadAttributes({ "aria-hidden": true, ...props })} astro-icon-spritesheet> ${icons.map((icon) => renderTemplate`<symbol${spreadAttributes(icon.props)}${addAttribute(`${SPRITESHEET_NAMESPACE}:${icon.name}`, "id")}>${unescapeHTML(icon.innerHTML)}</symbol>`)} </svg>`;
}, "/Users/lajennylove/code/projects/astro-theme/node_modules/astro-icon/lib/Spritesheet.astro", void 0);

const $$Astro$7 = createAstro();
const $$SpriteProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SpriteProvider;
  const content = await Astro2.slots.render("default");
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(content)}` })}${renderComponent($$result, "Spritesheet", $$Spritesheet, {})}`;
}, "/Users/lajennylove/code/projects/astro-theme/node_modules/astro-icon/lib/SpriteProvider.astro", void 0);

const $$Astro$6 = createAstro();
const $$Sprite = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Sprite;
  let { name, pack, title, class: className, x, y, ...inputProps } = Astro2.props;
  const props = normalizeProps(inputProps);
  if (pack) {
    name = `${pack}:${name}`;
  }
  const href = `#${SPRITESHEET_NAMESPACE}:${name}`;
  trackSprite(Astro2.request, name);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(className, "class")}${addAttribute(name, "astro-icon")}> ${title ? renderTemplate`<title>${title}</title>` : ""} <use${spreadAttributes({ "xlink:href": href, width: props.width, height: props.height, x, y })}></use> </svg>`;
}, "/Users/lajennylove/code/projects/astro-theme/node_modules/astro-icon/lib/Sprite.astro", void 0);

Object.assign($$Sprite, { Provider: $$SpriteProvider });

const $$Astro$5 = createAstro();
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center" data-astro-cid-pux6a34n> <div id="menu-toggle" class="mr-4 sm:mr-8" data-astro-cid-pux6a34n> <div class="burger-icon cursor-pointer" data-astro-cid-pux6a34n> <div class="" data-astro-cid-pux6a34n> <a id="hamburger-icon" href="#" class="open-close-btn" data-astro-cid-pux6a34n><span data-astro-cid-pux6a34n></span> <span data-astro-cid-pux6a34n></span> <span data-astro-cid-pux6a34n></span> <span data-astro-cid-pux6a34n></span></a> </div> <div id="myNav" class="overlay" data-astro-cid-pux6a34n> <div class="overlay-outer-content" data-astro-cid-pux6a34n> <div class="overlay-content" data-astro-cid-pux6a34n> <ul id="menu-main-menu" class="et-menu nav" data-astro-cid-pux6a34n> <li id="menu-item-1990" class="game-sub-menu dropdown-list" data-astro-cid-pux6a34n> <div class="drop w-full" data-astro-cid-pux6a34n> <div class="flex w-full justify-between items-center" data-astro-cid-pux6a34n> <div class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/all-games-ico-purple.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <span class="block games" data-astro-cid-pux6a34n>Games</span> </div> <div class="dropdown right" data-astro-cid-pux6a34n><span class="down-caret" data-astro-cid-pux6a34n>${renderComponent($$result, "Icon", $$Icon, { "name": "ep:arrow-right-bold", "data-astro-cid-pux6a34n": true })}</span> </div> </div></div> <ul class="sub-menu dropdown-menu" data-astro-cid-pux6a34n> <li id="menu-item-478" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/all-games-ico-purple.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/all-games" data-astro-cid-pux6a34n>ALL GAMES</a> </li> <li id="menu-item-480" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/new-game-ico.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/new-games" data-astro-cid-pux6a34n>NEW GAMES</a> </li> <li id="menu-item-1462" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/popular-ico-purple.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/popular-games" data-astro-cid-pux6a34n>POPULAR GAMES</a> </li> <li id="menu-item-481" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/slots-ico.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/slots" data-astro-cid-pux6a34n>SLOTS</a> </li> <li id="menu-item-486" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/jackpots-ico-purple.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/jackpot-games" data-astro-cid-pux6a34n>JACKPOT GAMES</a> </li> <li id="menu-item-483" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/table-games-ico.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/table-games" data-astro-cid-pux6a34n>TABLE GAMES</a> </li> <li id="menu-item-1463" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/live-dealer-ico-purple.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/live-dealer" data-astro-cid-pux6a34n>LIVE DEALER</a> </li> <li id="menu-item-1464" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/poker-ico-purple.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/video-games/" data-astro-cid-pux6a34n>VIDEO POKER</a> </li> <li id="menu-item-487" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/other-ico-purple.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/other-games" data-astro-cid-pux6a34n>OTHER GAMES</a> </li> </ul> </li> <li id="menu-item-1465" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/about-us-ico-purple.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/about-us" data-astro-cid-pux6a34n>ABOUT US</a> </li> <li id="menu-item-1466" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/wallet-ico-purple.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/banking" data-astro-cid-pux6a34n>BANKING</a> </li> <li id="menu-item-1467" class="flex items-center" data-astro-cid-pux6a34n> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/contact-us-ico-purple.svg" alt="games-icon" class="w-12 pr-4" data-astro-cid-pux6a34n> <a href="https://slotsparadise.com/contact-us" data-astro-cid-pux6a34n>CONTACT US</a> </li> </ul> </div> </div> </div> </div> </div> <div class="logo-img relative z-50" data-astro-cid-pux6a34n> <a href="http://slotsparadise.com" data-astro-cid-pux6a34n> <span class="et_pb_image_wrap" data-astro-cid-pux6a34n> <img width="240" height="82" alt="slot paradise logo" title="slot paradise logo" class="" src="https://slotsparadise.com/wp-content/uploads/2022/02/Group-2796.png" data-astro-cid-pux6a34n> </span> </a> </div> </div> <div class="login-join-container flex justify-end items-center w-1/2" data-astro-cid-pux6a34n> <div class="px-2 sm:px-4" data-astro-cid-pux6a34n> <a class="login-btn border-2 hover:border-[#FD106A] px-4 sm:px-10 py-2 sm:py-4 inline-block rounded-full hover:text-[#FD106A] text-[#1C8FDF] border-[#1C8FDF] text-sm sm:text-[22px]" href="https://slotsparadise.com/#login" data-astro-cid-pux6a34n>Login</a> </div> <div data-astro-cid-pux6a34n> <a class="join-btn border-2 hover:border-[#FD106A] px-4 sm:px-10 py-2 sm:py-4 inline-block rounded-full hover:bg-[#FD106A] text-[#ffffff] border-[#1C8FDF] bg-[#1C8FDF] text-sm sm:text-[22px]" href="https://slotsparadise.com/#register" data-astro-cid-pux6a34n>Join</a> </div> </div>  `;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/Navigation.astro", void 0);

const $$Astro$4 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="new-nav-header"> <div class="header-section"> <ul class="promos flex justify-center items-center space-x-3 py-4 border-b-[1px]"> <li class="flex space-x-1"> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/star-ico.svg" alt="star icon"> <a href="https://slotspressdev.wpengine.com/promotions" class="font-medium text-[#FD106A] text-xl">PROMOTIONS</a> </li> <li class="flex space-x-1"> <img src="https://slotsparadise.com/wp-content/themes/slotsparadise/images/star-ico.svg" alt="star icon"> <a class="font-medium text-[#FD106A] text-xl" href="/the-beach">THE BEACH</a> </li> </ul> <div class="header-row flex justify-between items-center py-8 px-2"> ${renderComponent($$result, "Navigation", $$Navigation, {})} </div> </div> </header>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="new-footer mt-16"> <div class="footer-palm bg-[#a64485]"> <div class="footer-lg"> <ul class="social_media_follow max-w-[300px] mx-auto grid grid-cols-4 grid-gap-5 py-8"> <li> <a href="https://www.facebook.com/Slots-Paradise-Online-Casino-102884869007853" class="icon" title="Follow on Facebook" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "width": 50, "height": 50, "src": "https://slotspressdev.wpengine.com/wp-content/themes/slotsparadise/images/facebook-f.ico", "alt": "Follow on Facebook", "title": "Follow on Facebook" })}</a> </li> <li> <a href="https://twitter.com/SlotsParadiseOC" class="icon" title="Follow on X" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "width": 50, "height": 50, "src": "https://slotspressdev.wpengine.com/wp-content/themes/slotsparadise/images/twitterx.png", "alt": "Follow on X", "title": "Follow on X" })}</a> </li> <li> <a href="https://www.instagram.com/slots_paradise/" class="icon" title="Follow on Instagram" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "width": 50, "height": 50, "src": "https://slotspressdev.wpengine.com/wp-content/themes/slotsparadise/images/instagram.png", "alt": "Follow on Instagram", "title": "Follow on Instagram" })}</a> </li> <li> <a href="https://www.youtube.com/channel/UC5dR09Mik0u19oz77cDZmsw/about" class="icon " title="Follow on Youtube" target="_blank"> ${renderComponent($$result, "Image", $$Image, { "width": 50, "height": 50, "src": "https://slotspressdev.wpengine.com/wp-content/themes/slotsparadise/images/youtube.png", "alt": "Follow on Youtube", "title": "Follow on Youtube" })}</a> </li> </ul> </div> </div> <!-- Slider main container --> <div class="carousel-container px-10 py-5 bg-[#7c2c70] swiper swiper3"> <!-- Additional required wrapper --> <div class="swiper-wrapper flex items-center"> <!-- Slides --> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "195", "height": "32", "alt": "zeusplay-icon", "title": "zeusplay-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/zeusplay-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "201", "height": "32", "alt": "allwayspin-icon", "title": "allwayspin-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/allwayspin-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "180", "height": "48", "alt": "apollo-icon", "title": "apollo-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/apollo-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "43", "height": "48", "alt": "bet2tech-icon", "title": "bet2tech-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/bet2tech-ico-1.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "107", "height": "32", "alt": "betsoft-icon", "title": "betsoft-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/betsoft-ico-1.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "130", "height": "24", "alt": "bgaming-icon", "title": "bgaming-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/bgaming-ico-1.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "215", "height": "32", "alt": "blue-whale-icon", "title": "blue-whale-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/blue-whale-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "163", "height": "32", "alt": "bolegaming-icon", "title": "bolegaming-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/bolegaming-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "81", "height": "56", "alt": "cool-games-icon", "title": "cool-games-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/cool-games-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "186", "height": "32", "alt": "cyberslot-icon", "title": "cyberslot-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/cyberslot-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "166", "height": "32", "alt": "dragon-gaming-icon", "title": "dragon-gaming-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/dragon-gaming-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "123", "height": "32", "alt": "felix-gaming-icon", "title": "felix-gaming-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/felix-gaming-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "185", "height": "40", "alt": "fresh-deck-ico", "title": "fresh-deck-ico", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/fresh-deck-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "122", "height": "40", "alt": "funky-games-icon", "title": "funky-games-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/funky-games-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "170", "height": "32", "alt": "funta-gaming-icon", "title": "funta-gaming-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/funta-gaming-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "145", "height": "32", "alt": "gamzix-icon", "title": "gamzix-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/gamzix-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "96", "height": "48", "alt": "inbet-icon", "title": "inbet-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/inbet-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "207", "height": "48", "alt": "ka-gaming-icon", "title": "ka-gaming-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/ka-gaming-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "168", "height": "32", "alt": "justplay-icon", "title": "justplay-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/justplay-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "97", "height": "32", "alt": "liw-icon", "title": "liw-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/zeusplay-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "86", "height": "48", "alt": "mg-games-icon", "title": "mg-games-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/mg-games-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "144", "height": "32", "alt": "mr-slotty-icon", "title": "mr-slotty-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/mr-slotty-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "180", "height": "48", "alt": "nucleus-icon", "title": "nucleus-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/nucleus-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "128", "height": "32", "alt": "orbital-icon", "title": "orbital-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/orbital-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "128", "height": "32", "alt": "playbro-icon", "title": "playbro-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/playbro-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "109", "height": "48", "alt": "rival-icon", "title": "rival-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/rival-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "134", "height": "48", "alt": "sa-gaming-icon", "title": "sa-gaming-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/sa-gaming-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "135", "height": "40", "alt": "simpleplay-icon", "title": "simpleplay-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/simpleplay-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "86", "height": "56", "alt": "slot-factory-icon", "title": "slot-factory-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/slot-factory-ico-1.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "179", "height": "32", "alt": "spadegaming-icon", "title": "spadegaming-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/spadegaming-ico-1.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "166", "height": "32", "alt": "superlotto-icon", "title": "superlotto-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/superlotto-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "92", "height": "32", "alt": "spinthon-icon", "title": "spinthon-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/spinthon-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "139", "height": "32", "alt": "super-spade-icon", "title": "super-spade-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/super-spade-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "228", "height": "40", "alt": "thunderspin-icon", "title": "thunderspin-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/thunderspin-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "122", "height": "40", "alt": "triple-profit-games-icon", "title": "triple-profit-games-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/triple-profit-games-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "164", "height": "48", "alt": "turbo-games-icon", "title": "turbo-games-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/turbo-games-ico.png" })}</div> <div class="swiper-slide"> ${renderComponent($$result, "Image", $$Image, { "width": "128", "height": "40", "alt": "tvbet-icon", "title": "tvbet-icon", "src": "https://slotsstg.wpengine.com//wp-content/uploads/2022/07/tvbet-ico.png" })}</div> </div> <!-- If we need navigation buttons --> <div class="swiper-button-prev"></div> <div class="swiper-button-next"></div> </div> <!--Menu Blocks --> <div class="footer-div bg-[#51135a] py-20"> <div class="max-w-[1140px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-5 px-4"> <div class="footer_col_1"> <div class="footer_menu_title"> <h4 class="text-[#a64485] md:text-2xl lg:text-3xl font-giloryExtrabold mb-4">Casino Games</h4> </div> <div class="footer-col-menu"> <ul id="menu-casino-games" class="list-none text-white"> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/slots">Slots</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/progressive-slots">Progressive Slots</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/table-games">Table Games</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/live-dealer">Live Dealer</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/video-games">Video Poker</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/blackjack">Blackjack</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/jackpot-games">Jackpot Games</a></li> </ul> </div> </div> <div class="footer_col_2"> <div class="footer_menu_title"> <h4 class="text-[#a64485] md:text-2xl lg:text-3xl font-giloryExtrabold mb-4">Information</h4> </div> <div class="footer-col-menu"> <ul id="menu-footer-information" class="list-none text-white"> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/banking">Banking</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/faq">FAQ’s</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/privacy-policy">Privacy Policy</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/terms-conditions">Terms and Conditions</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/responsible-gaming">Responsible Gaming</a></li> </ul> </div> </div> <div class="footer_col_3"> <div class="footer_menu_title"> <h4 class="text-[#a64485] md:text-2xl lg:text-3xl font-giloryExtrabold mb-4">In Paradise</h4> </div> <div class="footer-col-menu"> <ul id="menu-footer-the-paradise" class="list-none text-white"> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/promotions">Promotions</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/promotions">Welcome Bonus</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/about-us">About Us</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/contact-us">Contact Us</a></li> </ul> </div> </div> <div class="footer_col_4"> <div class="footer_menu_title"> <h4 class="text-[#a64485] md:text-2xl lg:text-3xl font-giloryExtrabold mb-4">The Beach</h4> </div> <div class="footer-col-menu"> <ul id="menu-footer-the-beach" class="list-none text-white"> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/the-beach/guides/">Casino Guides</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/the-beach/news/">Casino News</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/the-beach/casino-school/">Casino School</a></li> <li><a class="transition-all hover:opacity-[0.7] font-giloryRegular font-semibold pb-2 inline-block" href="https://slotsstg.wpengine.com/the-beach/games/">Game Reviews</a></li> </ul> </div> </div> </div> </div> <!--Slots Paradise Online Casino Block --> <div class="bg-[#2f0536] text-[#a64485] py-16 font-giloryRegular font-semibold leading-6 text-sm border-b-[10px] border-b-[#51135a] px-4"> <div class="max-w-[1440px] mx-auto text-center"> <div> <h3 class="md:text-xl lg:text-2xl font-giloryExtrabold mb-6">Slots Paradise Online Casino</h3> <p class="mb-5"><strong>Online casino games:</strong> Slots Paradise casino is committed to offering you a vast selection of games including slots, table games, roulette, craps, dice games, scratch cards and unparalleled live dealer games, so you can follow every move and action of the dealers. Here, you’ll also find dozens of fun and fast-paced TV games like no others. We’ve added over 30 game providers to ensure you a groundbreaking game variety, so you’ll never run out of options. Stick around, because every month we keep adding new exciting titles you won’t want to miss.</p> <p class="mb-5"><strong>Join, Play, Win:</strong> Casino is about relaxing. To make things easy, no download is required to access our games. It only takes a few simple steps to create an account and start playing lots of high-paying games wherever you are, whenever you want. Be a part of the thousands of players.</p> <p class="mb-5"><strong>Casino bonuses:</strong> Slots Paradise gives you a head start with its juicy welcome bonuses. Plus, you can also benefit from top-up bonuses for every single deposit. Give your bankroll a boost and enjoy the games longer while taking a chance at taking home large winnings.</p> <p class="mb-5"><strong>Player rewards:</strong> We value the time you dedicate to our games and believe that it must be rewarded accordingly. At Slots Paradise, players receive freebies and other surprises that put them one step ahead.<br><strong>24/7 customer care:</strong> We aim to give a hassle-free experience to all our players. But if something occurs, our support team is ready to help, day and night.</p> <p class="mb-5"><strong>Tips:</strong> Looking to learn some online casino game strategies? Check out “The Beach” where you’ll find casino news, tips, strategies and details of the casino games you can play for real money.</p> </div> </div> </div> <!--Cards Block --> <div class="sp-footer-logos bg-[#2f0536] text-center text-white py-16 px-4"> <div class="footer-logo mx-auto"> <div class="text-center mb-6"> ${renderComponent($$result, "Image", $$Image, { "width": 650, "height": 56, "class": "inline", "alt": "cards image", "title": "cars image", "src": "https://slotsstg.wpengine.com/wp-content/uploads/2022/02/cards.png" })}</div> <p class="text-sm">With our trusted platform, you can rest easy that your account is safe and secure.</p> </div> </div> <!--Copyright block --> <div class="bg-black text-[#a64485] font-giloryRegular text-center pt-8 pb-40 px-4"> <div class="footer-last-block"> <div class="et_pb_text_inner"> <p>We invite you to review the Rules &amp; Terms – Privacy Policy – Copyright 2023 – All Rights Reserved.</p> </div> </div> </div> <div id="promo-ft-link" class="fixed bottom-[-100px] flex justify-center text-center z-10 w-full"> <a href="/promotions" aria-label="Promotions link" class="block"> <span class="et_pb_image_wrap "> <img decoding="async" alt="promotions" title="Promotions" src="https://slotsstg.wpengine.com//wp-content/themes/slotsparadise/images/promotions-banner.svg" width="200" height="200"> </span> </a> </div> </footer> `;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><link rel="stylesheet" href="https://slotsparadise.com/wp-content/plugins/wp-customer-reviews/css/wp-customer-reviews.css?ver=3.6.8"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"><!-- <link rel="stylesheet" href="https://slotsstg.wpengine.com/wp-content/themes/slotsparadise/style.css?ver=1701287831"> -->', "</head> <body data-astro-cid-sckkx6r4> ", " ", " ", ' <script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"><\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }));
}, "/Users/lajennylove/code/projects/astro-theme/src/layouts/Layout.astro", void 0);

async function wpquery({ query, variables = {} }) {
  const res = await fetch("https://slotsstg.wpengine.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  if (!res.ok) {
    console.log(res);
    return {};
  }
  const { data } = await res.json();
  return data;
}

const $$Astro$1 = createAstro();
const $$NewsPostCategory = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NewsPostCategory;
  const { href, title, body, src, alt, excerpt, slug, uri } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="news_post_article flex flex-col md:flex-row gap-8 mb-16"> <a${addAttribute(uri, "href")} class="block w-full md:w-1/4 rounded-lg overflow-hidden shadow-casinoBlock"> ${renderComponent($$result, "Image", $$Image, { "src": src, "alt": alt, "width": 300, "height": 200, "format": "webp", "style": "width: 100%; object-fit: cover;" })}</a> <div class="post-content w-full md:w-3/4"> <div class="post-content-inner"> <h2 class="text-[#ff688b] pb-3 font-medium font-giloryExtrabold text-xl sm:text-2xl"> <a${addAttribute(uri, "href")}> ${title}</a> </h2> <p class="text-[15px]">${unescapeHTML(excerpt)}</p> <a${addAttribute(uri, "href")} class="bg-[#a64485] inline-block text-white text-lg px-8 py-2 rounded-[25px] font-giloryExtrabold font-semibold uppercase hover:bg-[#ff93aa] cursor-pointer transition-all mt-5">Read More</a> </div> </div> </article>`;
}, "/Users/lajennylove/code/projects/astro-theme/src/components/NewsPostCategory.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths({ paginate }) {
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
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { page } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "News" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="news_page_container max-w-[1440px] mx-auto w-[80%] font-giloryRegular font-semibold text-base text-[#666]"> <div> <div><h1 class="text-3xl sm:text-4xl text-[#ff688b] pb-3 font-medium font-giloryExtrabold">Casino News</h1> <p><span>Our Casino News section is your source for the latest happenings in the world of gambling and casinos. Stay informed on new casino openings, industry developments, and changes in laws and regulations. Discover the latest trends and innovations in the casino industry and get insights into winning strategies and tactics. From major tournament events to tips for success, Casino News has everything you need to stay ahead in the world of online gambling. </span></p> <p><span>Whether you are a seasoned gambler or just starting out, this section is your go-to resource for all things related to the casino world. Stay informed, and stay ahead of the game, with Casino News.</span></p> </div> </div> <section class="news_page max-w-[1440px] mx-auto px-4 my-16"> ${page.data.map(
    (post) => renderTemplate`${renderComponent($$result2, "NewsPostCategory", $$NewsPostCategory, { "href": post.node.uri, "title": post.node.title, "body": post.node.excerpt, "src": post.node.featuredImage.node.sourceUrl, "alt": post.node.featuredImage.node.altText, "excerpt": post.node.excerpt, "slug": post.node.slug, "uri": post.node.uri })}`
  )} ${page.url.prev ? renderTemplate`<a${addAttribute(page.url.prev, "href")}>Previous</a>` : null} ${page.url.next ? renderTemplate`<a${addAttribute(page.url.next, "href")}>Next</a>` : null} </section> </div>` })}`;
}, "/Users/lajennylove/code/projects/astro-theme/src/pages/news/[...page].astro", void 0);

const $$file = "/Users/lajennylove/code/projects/astro-theme/src/pages/news/[...page].astro";
const $$url = "/news/[...page]";

const ____page_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, ____page_ as _, $$Image as a, $$NewsPostCategory as b, imageConfig as i, wpquery as w };
