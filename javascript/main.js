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
wd_click.addEventListener("click", () => {
  wd.classList.remove("pop_hide");
});
wd_btn.addEventListener("click", () => {
  wd.classList.add("pop_hide");
});

gd_click.addEventListener("click", () => {
  gd.classList.remove("pop_hide");
});
graphic_design_btn.addEventListener("click", () => {
  gd.classList.add("pop_hide");
});

wdev_click.addEventListener("click", () => {
  wdev.classList.remove("pop_hide");
});
web_dev_btn.addEventListener("click", () => {
  wdev.classList.add("pop_hide");
});

mad_click.addEventListener("click", () => {
  mad.classList.remove("pop_hide");
});
mobile_btn.addEventListener("click", () => {
  mad.classList.add("pop_hide");
});

r_click.addEventListener("click", () => {
  r.classList.remove("pop_hide");
});
ranking_btn.addEventListener("click", () => {
  r.classList.add("pop_hide");
});

pr_click.addEventListener("click", () => {
  pr.classList.remove("pop_hide");
});
public_btn.addEventListener("click", () => {
  pr.classList.add("pop_hide");
});

seo_click.addEventListener("click", () => {
  seo.classList.remove("pop_hide");
});
seo_btn.addEventListener("click", () => {
  seo.classList.add("pop_hide");
});

smm_click.addEventListener("click", () => {
  smm.classList.remove("pop_hide");
});
smm_btn.addEventListener("click", () => {
  smm.classList.add("pop_hide");
});

//! Hover boxes
const box_1 = document.querySelector("#box-1");
const box_2 = document.querySelector("#box-2");
const box_3 = document.querySelector("#box-3");
const box_4 = document.querySelector("#box-4");
const box_5 = document.querySelector("#box-5");
const box_6 = document.querySelector("#box-6");
const box_7 = document.querySelector("#box-7");
const box_8 = document.querySelector("#box-8");

wd_click.addEventListener("mouseover", ()=> {
  box_1.classList.add("hovered_box");
});
wd_click.addEventListener("mouseout", ()=> {
  box_1.classList.remove("hovered_box");
});
box_1.addEventListener("mouseover", ()=> {
  wd_click.classList.add("hovered_caption");
});
box_1.addEventListener("mouseout", ()=> {
  wd_click.classList.remove("hovered_caption");
});

gd_click.addEventListener("mouseover", () => {
  box_2.classList.add("hovered_box");
})
gd_click.addEventListener("mouseout", () => {
  box_2.classList.remove("hovered_box");
})

wdev_click.addEventListener("mouseover", () => {
  box_3.classList.add("hovered_box");
})
wdev_click.addEventListener("mouseout", () => {
  box_3.classList.remove("hovered_box");
})

mad_click.addEventListener("mouseover", () => {
  box_4.classList.add("hovered_box");
})
mad_click.addEventListener("mouseout", () => {
  box_4.classList.remove("hovered_box");
})

r_click.addEventListener("mouseover", () => {
  box_5.classList.add("hovered_box");
})
r_click.addEventListener("mouseout", () => {
  box_5.classList.remove("hovered_box");
})

pr_click.addEventListener("mouseover", () => {
  box_6.classList.add("hovered_box");
})
pr_click.addEventListener("mouseout", () => {
  box_6.classList.remove("hovered_box");
})

seo_click.addEventListener("mouseover", () => {
  box_7.classList.add("hovered_box");
})
seo_click.addEventListener("mouseout", () => {
  box_7.classList.remove("hovered_box");
})

smm_click.addEventListener("mouseover", () => {
  box_8.classList.add("hovered_box");
})
smm_click.addEventListener("mouseout", () => {
  box_8.classList.remove("hovered_box");
})
