import { createApp } from "vue";
import "vant/lib/index.css"
import "@/assets/css/style.css"
import "@/assets/css/theme.less"
import App from "@/App.vue";
import store from "./store";
import router from "./router";
import { Button,NavBar,Tabbar,TabbarItem,Checkbox,Toast,Icon } from "vant";
import "@/utils/rem"

const app = createApp(App);
app.use(store);
app.use(router);
app.use(Button);
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Checkbox);
app.use(Toast);
app.use(Icon);

app.mount("#app");
// const oneLinkURL = "https://engmntqa.onelink.me/LtRd/";
// let mediaSource = {keys: ["inmedia"], defaultValue: "my_media_default_source"};
// let campaign = {keys: ["incmp"]};
// let result_url = "No output from script"
// let result = window.AF_SMART_SCRIPT.generateOneLinkURL({
//   oneLinkURL,
//   afParameters: {
//     mediaSource: mediaSource,
//     campaign: campaign,
//   },
// });
// if (result) {
//     result_url = result.clickURL;   
//     console.log('result_url', result_url);
// } 
