//! elements
const wd = document.querySelector("#web_design");
const pr = document.querySelector("#public_relations");
const r = document.querySelector("#ranking");
const gd = document.querySelector("#graphic_design");
const wdev = document.querySelector("#web_development");
const mad = document.querySelector("#mobile_app_development");
const seo = document.querySelector("#seo");
const smm = document.querySelector("#smm");

//! buttons
const wd_btn = document.querySelector("#web_design_btn");
const public_btn = document.querySelector("#public_btn");
const ranking_btn = document.querySelector("#ranking_btn");
const graphic_design_btn = document.querySelector("#graphic_design_btn");
const web_dev_btn = document.querySelector("#web_dev_btn");
const mobile_btn = document.querySelector("#mobile_btn");
const seo_btn = document.querySelector("#seo_btn");
const smm_btn = document.querySelector("#smm_btn");

//! element click
const wd_click = document.querySelector("#wd_click");
const gd_click = document.querySelector("#gd_click");
const wdev_click = document.querySelector("#wdev_click");
const mad_click = document.querySelector("#mad_click");
const r_click = document.querySelector("#r_click");
const pr_click = document.querySelector("#pr_click");
const seo_click = document.querySelector("#seo_click");
const smm_click = document.querySelector("#smm_click");

//! pop-up functions
wd_click.addEventListener("click", ()=> {
    wd.classList.remove("pop_hide");
})
wd_btn.addEventListener("click", () => {
    wd.classList.add("pop_hide");
})

gd_click.addEventListener("click", ()=> {
    gd.classList.remove("pop_hide");
})
graphic_design_btn.addEventListener("click", () => {
    gd.classList.add("pop_hide");
})

wdev_click.addEventListener("click", ()=> {
    wdev.classList.remove("pop_hide");
})
web_dev_btn.addEventListener("click", () => {
    wdev.classList.add("pop_hide");
})

mad_click.addEventListener("click", ()=> {
    mad.classList.remove("pop_hide");
})
mobile_btn.addEventListener("click", () => {
    mad.classList.add("pop_hide");
})

r_click.addEventListener("click", ()=> {
    r.classList.remove("pop_hide");
})
ranking_btn.addEventListener("click", () => {
    r.classList.add("pop_hide");
})

pr_click.addEventListener("click", ()=> {
    pr.classList.remove("pop_hide");
})
public_btn.addEventListener("click", () => {
    pr.classList.add("pop_hide");
})

seo_click.addEventListener("click", ()=> {
    seo.classList.remove("pop_hide");
})
seo_btn.addEventListener("click", () => {
    seo.classList.add("pop_hide");
})

smm_click.addEventListener("click", ()=> {
    smm.classList.remove("pop_hide");
})
smm_btn.addEventListener("click", () => {
    smm.classList.add("pop_hide");
})


