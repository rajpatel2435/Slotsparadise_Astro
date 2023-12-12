import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_-HRYmlRv.mjs';

const _page0  = () => import('./chunks/generic_1bIqx6lb.mjs');
const _page1  = () => import('./chunks/index_A803tmcO.mjs');
const _page2  = () => import('./chunks/casino-school_FenHDaMo.mjs');
const _page3  = () => import('./chunks/guides_S3b5mFnZ.mjs');
const _page4  = () => import('./chunks/online-video-poker_h3L15bTM.mjs');
const _page5  = () => import('./chunks/blackjack-online_lWx-pjK2.mjs');
const _page6  = () => import('./chunks/roulette-online_-RmpTcKk.mjs');
const _page7  = () => import('./chunks/slots-online_2YIqWWU2.mjs');
const _page8  = () => import('./chunks/live-dealer_5fO8SNhu.mjs');
const _page9  = () => import('./chunks/_.._5Cfzi0K-.mjs');
const _page10  = () => import('./chunks/_.._wQXggBVG.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/casino-school.astro", _page2],["src/pages/guides.astro", _page3],["src/pages/offers/online-video-poker.astro", _page4],["src/pages/offers/blackjack-online.astro", _page5],["src/pages/offers/roulette-online.astro", _page6],["src/pages/offers/slots-online.astro", _page7],["src/pages/offers/live-dealer.astro", _page8],["src/pages/news/[...page].astro", _page9],["src/pages/[...uri].astro", _page10]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
