import { renderTop } from "./modules/renderTop";
import { fetchShopInfo } from "./modules/fetchShopInfo";

console.log("reading app.js")
const app = document.querySelector('.app');

// renderTop(app);
fetchShopInfo(app);
