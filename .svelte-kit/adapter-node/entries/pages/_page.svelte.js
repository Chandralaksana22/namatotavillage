import { c as create_ssr_component, e as escape, d as add_attribute, f as compute_rest_props, h as createEventDispatcher, i as spread, j as escape_attribute_value, k as escape_object, v as validate_component } from "../../chunks/ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const currentYear = /* @__PURE__ */ (/* @__PURE__ */ new Date()).getFullYear();
  return `<footer class="footer clearfix"><div class="container"> <div class="first-footer" data-svelte-h="svelte-nywfmn"><div class="row"><div class="col-md-12"><div class="links dark footer-contact-links"><div class="footer-contact-links-wrapper"><div class="footer-contact-link-wrapper"><div class="image-wrapper footer-contact-link-icon"><div class="icon-footer"><i class="flaticon-phone-call"></i></div></div> <div class="footer-contact-link-content"><h6>Hubungi Kami</h6> <p>+1 123-456-0606</p></div></div> <div class="footer-contact-links-divider"></div> <div class="footer-contact-link-wrapper"><div class="image-wrapper footer-contact-link-icon"><div class="icon-footer"><i class="flaticon-message"></i></div></div> <div class="footer-contact-link-content"><h6>Hubungi kami melalui email</h6> <p>info@travolagency.com</p></div></div> <div class="footer-contact-links-divider"></div> <div class="footer-contact-link-wrapper"><div class="image-wrapper footer-contact-link-icon"><div class="icon-footer"><i class="flaticon-placeholder"></i></div></div> <div class="footer-contact-link-content"><h6>Alamat</h6> <p>24 King St, SC 29401 USA</p></div></div></div></div></div></div></div>  <div class="second-footer" data-svelte-h="svelte-vtd3pf"><div class="row"> <div class="col-md-4 widget-area"><div class="widget clearfix"><div class="footer-logo"><img class="img-fluid" src="img/logo-light.png" alt=""></div> <div class="widget-text"><p>Temukan pengalaman wisata unik di desa yang kaya tradisi dan keindahan eksotis Papua
								Barat.</p> <div class="social-icons"><ul class="list-inline"><li><a href="#"><i class="ti-instagram"></i></a></li> <li><a href="#"><i class="ti-twitter"></i></a></li> <li><a href="#"><i class="ti-facebook"></i></a></li> <li><a href="#"><i class="ti-youtube"></i></a></li></ul></div></div></div></div>  <div class="col-md-3 offset-md-1 widget-area"><div class="widget clearfix usful-links"><h3 class="widget-title">Navigasi</h3> <ul><li><a href="/">Home</a></li> <li><a href="/">Paket Wisata</a></li> <li><a href="/">Destinasi</a></li> <li><a href="/">Homestay</a></li> <li><a href="/">Souvenir</a></li> <li><a href="/">Blog</a></li></ul></div></div>  <div class="col-md-4 widget-area"><div class="widget clearfix"><h3 class="widget-title">Langganan</h3> <p>Daftar blog bulanan kami untuk info terbaru perjalanan dan tur</p> <div class="widget-newsletter"><form action="#"><input type="email" placeholder="Email Address" required=""> <button type="submit">Send</button></form></div></div></div></div></div>  <div class="bottom-footer-text"><div class="row copyright"><div class="col-md-12"><p class="mb-0">©${escape(currentYear)} <a href="/" data-svelte-h="svelte-1uqbids">Desa Wisata Namatota</a>. All rights reserved.</p></div></div></div></div></footer>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<nav class="navbar navbar-expand-lg" data-svelte-h="svelte-8x96lc"><div class="container"> <div class="logo-wrapper"><a class="logo" href="/"><img src="/img/logo-light.png" class="logo-img" alt="logo"></a> </div>  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"><i class="ti-menu"></i></span></button>  <div class="collapse navbar-collapse" id="navbar"><ul class="navbar-nav ms-auto"><li class="nav-item dropdown"><a class="nav-link active" href="/">Home</a></li> <li class="nav-item"><a class="nav-link" href="/destinasi">Destinasi</a></li> <li class="nav-item"><a class="nav-link" href="/">Paket Wisata</a></li> <li class="nav-item"><a class="nav-link" href="/">Souvenir</a></li> <li class="nav-item"><a class="nav-link" href="/">Blog</a></li> <li class="nav-item"><a class="nav-link" href="/">Gallery</a></li> <li class="nav-item"><a class="nav-link" href="/">Contact</a></li></ul></div></div></nav>`;
});
const Section_about = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="about cover section-padding"><div class="container"><div class="row"><div class="col-md-6 mb-30 animate-box" data-animate-effect="fadeInUp"><div class="section-subtitle" data-svelte-h="svelte-1jze8an">Permata Tersembunyi Papua</div> <div class="section-title" data-svelte-h="svelte-1yob2wi">Eksplorasi <span>Desa Wisata Namatota</span></div> <p data-svelte-h="svelte-yejjkr">Terletak di Pulau Namatota, Kabupaten Kaimana, Papua Barat, Desa Namatota dikenal sebagai
					“Permata Tersembunyi” yang menawarkan keindahan Teluk Triton, budaya lokal yang autentik,
					dan pesona alam yang memukau.</p> <p data-svelte-h="svelte-lanr4n">Temukan pengalaman wisata unik di desa yang kaya tradisi dan keindahan eksotis Papua
					Barat.</p> <ul class="list-unstyled about-list mb-30" data-svelte-h="svelte-1hhkhwr"><li><div class="about-list-icon"><span class="ti-check"></span></div> <div class="about-list-text"><p>Pilihan Tepat untuk Liburan Tanpa Batas</p></div></li> <li><div class="about-list-icon"><span class="ti-check"></span></div> <div class="about-list-text"><p>Destinasi Memukau, Pengalaman Tiada Duanya</p></div></li></ul>  <div class="phone-call mb-30"><div class="icon" data-svelte-h="svelte-as1p0o"><span class="flaticon-phone-call"></span></div> <div class="text"><p data-svelte-h="svelte-1gjzyp4">Informasi Lebih Lanjut</p> <a href="${"https://wa.me/" + escape(data[0]?.phone_number, true)}">${escape(data[0]?.phone_number)}</a></div></div></div> <div class="col-md-5 offset-md-1 animate-box" data-animate-effect="fadeInUp"><div class="img-exp"><div class="about-img"><div class="img"><img${add_attribute("src", data[0]?.images[1]?.path, 0)} class="img-fluid" alt="images"></div></div> <div id="circle" data-svelte-h="svelte-bxncxp"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xml:space="preserve"><defs><path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "></path></defs><circle cx="150" cy="100" r="75" fill="none"></circle><g><use xlink:href="#circlePath" fill="none"></use><text fill="/f2454"><textPath xlink:href="#circlePath">. desa namatota . desa namatota</textPath></text></g></svg></div></div></div></div></div></section>`;
});
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0) $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0) $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0) $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0) $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0) $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return ` <div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="splide__list">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const Section_tour = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="tours1 section-padding bg-lightnav" data-scroll-index="1"><div class="container"><div class="row" data-svelte-h="svelte-1ylbz2e"><div class="col-md-12"><div class="section-subtitle"><span>Temukan Destinasi Anda</span></div> <div class="section-title">Paket <span>Wisata</span></div></div></div> <div class="row"><div class="col-md-8"><div class="item" style="height: 95%;"><div class="position-re o-hidden" style="height: 100%;"><img style="height: 100%;"${add_attribute("src", data[0]?.images[0]?.path, 0)} alt="images"></div> <span class="category"><a href="/">${escape(data[0]?.rate)}</a></span> <div class="con"><h5><a href="/">${escape(data[0]?.name)}</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-12"><ul><li><i class="ti-time"></i> ${escape(data[0]?.duration)}</li> <li><i class="ti-user"></i> ${escape(data[0]?.occupancy)}</li> <li><i class="ti-location-pin"></i> ${escape(data[0]?.location)}</li></ul></div></div></div></div></div> <div class="col-md-4"><div class="item" style="height: 95%;"><div class="position-re o-hidden" style="height: 100%;"><img style="height: 100%; object-fit:cover"${add_attribute("src", data[0]?.images[0]?.path, 0)} alt="images"></div> <span class="category"><a href="/">${escape(data[0]?.rate)}</a></span> <div class="con"><h5><a href="/">${escape(data[0]?.name)}</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-12"><ul><li><i class="ti-time"></i> ${escape(data[0]?.duration)}</li> <li><i class="ti-user"></i> ${escape(data[0]?.occupancy)}</li> <li><i class="ti-location-pin"></i> ${escape(data[0]?.location)}</li></ul></div></div></div></div></div> <div class="col-md-4"><div class="item" style="height: 95%;"><div class="position-re o-hidden" style="height: 100%;"><img style="height: 100%;"${add_attribute("src", data[2]?.images[0]?.path, 0)} alt="images"></div> <span class="category"><a href="/">${escape(data[2]?.rate)}</a></span> <div class="con"><h5><a href="/">${escape(data[2]?.name)}</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-12"><ul><li><i class="ti-time"></i> ${escape(data[2]?.duration)}</li> <li><i class="ti-user"></i> ${escape(data[2]?.occupancy)}</li> <li><i class="ti-location-pin"></i> ${escape(data[2]?.location)}</li></ul></div></div></div></div></div> <div class="col-md-4"><div class="item" style="height: 95%;"><div class="position-re o-hidden" style="height: 100%;"><img style="height: 100%;"${add_attribute("src", data[3]?.images[0]?.path, 0)} alt="images"></div> <span class="category"><a href="/">${escape(data[3]?.rate)}</a></span> <div class="con"><h5><a href="/">${escape(data[3]?.name)}</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-12"><ul><li><i class="ti-time"></i> ${escape(data[3]?.duration)}</li> <li><i class="ti-user"></i> ${escape(data[3]?.occupancy)}</li> <li><i class="ti-location-pin"></i> ${escape(data[3]?.location)}</li></ul></div></div></div></div></div> <div class="col-md-4"><div class="item" style="height: 95%;"><div class="position-re o-hidden" style="height: 100%;"><img style="height: 100%;"${add_attribute("src", data[4]?.images[0]?.path, 0)} alt="images"></div> <span class="category"><a href="/">${escape(data[4]?.rate)}</a></span> <div class="con"><h5><a href="/">${escape(data[4]?.name)}</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-12"><ul><li><i class="ti-time"></i> ${escape(data[4]?.duration)}</li> <li><i class="ti-user"></i> ${escape(data[4]?.occupancy)}</li> <li><i class="ti-location-pin"></i> ${escape(data[4]?.location)}</li></ul></div></div></div></div></div></div></div></section>`;
});
const Testimonials = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = [] } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<section class="testimonials"><div class="background bg-img bg-fixed section-padding pb-0"${add_attribute("data-background", data[0]?.images[1]?.path, 0)} data-overlay-dark="5" style="${"background-image: url(" + escape(data[0]?.images[3]?.path, true) + ");"}"><div class="container"><div class="row"> <div class="col-md-5 mb-30 mt-30"><p data-svelte-h="svelte-1t2equg"><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i><i class="star-rating"></i></p> <h5 data-svelte-h="svelte-t8dx38">Kami Menyediakan Destinasi Terbaik Khusus untuk Anda. Pesan Sekarang dan Nikmati!</h5> <div class="phone-call mb-10"><div class="icon color-1" data-svelte-h="svelte-145mfvp"><span class="flaticon-phone-call"></span></div> <div class="text"><p class="color-1" data-svelte-h="svelte-1wu35w4">Hubungi Kami</p> <a class="color-1" href="${"tel:" + escape(data[0]?.phone_number, true)}">${escape(data[0]?.phone_number)}</a></div></div></div>  <div class="col-md-5 offset-md-2"><div class="testimonials-box"><div class="head-box" data-svelte-h="svelte-unu4sb"><h6>Testimoni</h6> <h4>Kata Mereka</h4></div> <div>${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options: {
        rewind: false,
        gap: 5,
        perPage: 1,
        type: "slide",
        arrows: false,
        pagination: false
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item" data-svelte-h="svelte-1d3tfwp"><p>Travel dapibus asue metus the nec feusiate era the miss hendreri the vemante
											the lemon insan toleon nectan feugiat erat hendrerit necuis vesaire tours
											inilla neca ine the sene miss habitan.</p> <div class="info"><div class="author-img"><img src="img/team/05.png" alt=""></div> <div class="cont"><div class="rating"><i class="star active"></i> <i class="star active"></i> <i class="star active"></i> <i class="star active"></i> <i class="star active"></i></div> <h6>Emily Brown</h6> <span>Guest review</span></div></div></div>`;
          }
        })}`;
      }
    }
  )}</div></div></div></div></div></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let information = data?.information;
  let packages = data?.packages;
  console.log(packages);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-p0ba6b_START -->${$$result.title = `<title>Desa Wisata Namatota</title>`, ""}<!-- HEAD_svelte-p0ba6b_END -->`, ""} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} <section style="${"background-image:url('" + escape(information[0]?.images[0]?.path, true) + "'); height:100vh; background-size:cover; background-repeat:no-repeat; position:relative;"}"><div style="background: rgba(0, 0, 0, 0.3); position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></div>  <div class="kenburns-inner" style="position:relative; z-index:2; display: flex; justify-content: center; align-items: center; height: 65%;" data-svelte-h="svelte-1n9sqwl"><div class="v-middle caption text-center"><div class="container"><div class="row h-100 justify-content-center"><div class="col-md-12 text-center"><h4>Ayo eksplorasi keindahan bersama kami</h4> <h1>Jelajahi Desa Wisata <span>Namatota</span></h1></div></div></div></div></div></section> ${validate_component(Section_about, "SectionAbout").$$render($$result, { data: information }, {}, {})} ${validate_component(Section_tour, "SectionTour").$$render($$result, { data: packages }, {}, {})} <section class="numbers"><div class="section-padding bg-img bg-fixed back-position-center"${add_attribute("data-background", information[0]?.images[2]?.path, 0)} data-overlay-dark="6" style="${"background-image: url(" + escape(information[0]?.images[2]?.path, true) + ");"}"><div class="container" data-svelte-h="svelte-16b2iqz"><div class="row"><div class="col-md-4"><div class="item text-center"><span class="icon"><i class="front flaticon-air-freight"></i> <i class="back flaticon-air-freight"></i></span> <h3 class="count">35 km</h3> <h6>Dari Bandara</h6></div></div> <div class="col-md-4"><div class="item text-center"><span class="icon"><i class="font flaticon-house"></i> <i class="back flaticon-house"></i></span> <h3 class="count">28 km</h3> <h6>Dari Pusat Kota</h6></div></div> <div class="col-md-4"><div class="item text-center"><span class="icon"><i class="front flaticon-ship"></i> <i class="back flaticon-ship"></i></span> <h3 class="count">28 km</h3> <h6>Dari Pelabuhan</h6></div></div> </div></div></div></section> <section class="destination1 section-padding bg-lightnav" data-svelte-h="svelte-af9x4y"><div class="container"><div class="row"><div class="col-md-12"><div class="section-subtitle">Kamar Homestay Terbaik</div> <div class="section-title">Pilihan <span>Kamar Homestay</span></div></div></div> <div class="row"><div class="col-md-12"><div class="owl-carousel owl-theme owl-loaded owl-drag"><div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-966px, 0px, 0px); transition: all; width: 3864px;"><div class="owl-item active" style="width: 292px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/greece1.jpg" alt="images" style="height: 500px; object-fit:cover"></div> <span class="category"><a>New</a></span> <div class="con"><h5><a><i class="ti-location-pin"></i> Greece</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-8"><p>6 Tour Packages</p></div> <div class="col col-md-4 text-right"><div class="permalink"><a href="/">Explore <i class="ti-arrow-right"></i></a></div></div></div></div></div></div> <div class="owl-item" style="width: 292px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/france1.jpg" style="height: 500px; object-fit:cover" alt="images"></div> <span class="category"><a>15% OFF</a></span> <div class="con"><h5><a><i class="ti-location-pin"></i> France</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-8"><p>10 Tour Packages</p></div> <div class="col col-md-4 text-right"><div class="permalink"><a href="/">Explore <i class="ti-arrow-right"></i></a></div></div></div></div></div></div> <div class="owl-item" style="width: 292px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/dubai1.jpg" style="height: 500px; object-fit:cover" alt="images"></div> <span class="category"><a href="/">7 Tours</a></span> <div class="con"><h5><a href="/"><i class="ti-location-pin"></i> Dubai</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-8"><p>7 Tour Packages</p></div> <div class="col col-md-4 text-right"><div class="permalink"><a href="/">Explore <i class="ti-arrow-right"></i></a></div></div></div></div></div></div> <div class="owl-item" style="width: 292px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/maldives1.jpg" style="height: 500px; object-fit:cover" alt="images"></div> <span class="category"><a>New</a></span> <div class="con"><h5><a href="/"><i class="ti-location-pin"></i> Maldives</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-8"><p>4 Tour Packages</p></div> <div class="col col-md-4 text-right"><div class="permalink"><a href="/">Explore <i class="ti-arrow-right"></i></a></div></div></div></div></div></div> <div class="owl-item" style="width: 292px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/greece1.jpg" style="height: 500px; object-fit:cover" alt="images"></div> <span class="category"><a>New</a></span> <div class="con"><h5><a><i class="ti-location-pin"></i> Greece</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-8"><p>6 Tour Packages</p></div> <div class="col col-md-4 text-right"><div class="permalink"><a href="/">Explore <i class="ti-arrow-right"></i></a></div></div></div></div></div></div> <div class="owl-item" style="width: 292px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/france1.jpg" style="height: 500px; object-fit:cover" alt="images"></div> <span class="category"><a>15% OFF</a></span> <div class="con"><h5><a><i class="ti-location-pin"></i> France</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-8"><p>10 Tour Packages</p></div> <div class="col col-md-4 text-right"><div class="permalink"><a href="/">Explore <i class="ti-arrow-right"></i></a></div></div></div></div></div></div> <div class="owl-item" style="width: 292px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/dubai1.jpg" style="height: 500px; object-fit:cover" alt="images"></div> <span class="category"><a href="/">7 Tours</a></span> <div class="con"><h5><a href="/"><i class="ti-location-pin"></i> Dubai</a></h5> <div class="line"></div> <div class="row facilities"><div class="col col-md-8"><p>7 Tour Packages</p></div> <div class="col col-md-4 text-right"><div class="permalink"><a href="/">Explore <i class="ti-arrow-right"></i></a></div></div></div></div></div></div></div></div></div></div></div></div></section> <section class="tours1 section-padding" data-svelte-h="svelte-50wlvk"><div class="container"><div class="row mb-30"><div class="col-md-12"><div class="section-subtitle">Suvenir Eksklusif</div> <div class="section-title"><span>Suvenir</span> Namatota</div></div></div>  <div class="row mb-90"><div class="col-md-5"><div class="country country1 mt-30"><p>Kami menyediakan berbagai macam suvenir unik dan menarik yang mencerminkan keindahan dan
						kekayaan budaya Namatota. Temukan koleksi eksklusif yang akan menjadi kenangan indah
						dari perjalanan Anda ke Namatota, dari kerajinan tangan lokal hingga barang-barang khas
						yang hanya dapat Anda temui di sini.</p> <div class="butn-dark mt-30 mb-30"><a href="/" data-scroll-nav="1" class=""><span>Explore <i class="ti-arrow-right"></i></span></a></div></div></div> <div class="col-md-7"><div class="owl-carousel owl-theme owl-loaded owl-drag"><div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-849px, 0px, 0px); transition: all; width: 3396px;"><div class="owl-item active" style="width: 253px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/venice1.jpg" alt="images"></div> <div class="con"><h5><a href="/">Namatota</a></h5> <div class="line"></div></div></div></div> <div class="owl-item" style="width: 253px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/milano.jpg" alt="images"></div> <div class="con"><h5><a href="/">Namatota</a></h5> <div class="line"></div></div></div></div> <div class="owl-item" style="width: 253px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/perugia1.jpg" alt="images"></div> <div class="con"><h5><a href="/">Namatota</a></h5> <div class="line"></div></div></div></div> <div class="owl-item" style="width: 253px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/parma1.jpg" alt="images"></div> <div class="con"><h5><a href="/">Namatota</a></h5> <div class="line"></div></div></div></div> <div class="owl-item" style="width: 253px; margin-right: 30px;"><div class="item"><div class="position-re o-hidden"><img src="/img/destination/aosta1.jpg" alt="images"></div> <div class="con"><h5><a href="/">Namatota</a></h5> <div class="line"></div></div></div></div></div></div> </div></div></div></div></section> <section class="blog section-padding bg-navy"><div class="container"><div class="row" data-svelte-h="svelte-1tx6kkr"><div class="col-md-12"><div class="section-subtitle"><span>Travel Blog</span></div> <div class="section-title"><span>Pengalaman</span>perjalanan</div></div></div> <div class="row"><div class="col-md-12">${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      options: {
        rewind: false,
        gap: 5,
        perPage: 3,
        type: "slide",
        arrows: true,
        pagination: false,
        breakpoints: {
          1024: {
            perPage: 3,
            gap: 10,
            padding: { right: "10%", left: "7%" }
          },
          768: {
            perPage: 1,
            gap: 10,
            padding: { right: "10%", left: "7%" }
          },
          480: {
            perPage: 1,
            gap: 10,
            padding: { right: "10%", left: "7%" }
          }
        }
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `<div class="item" data-svelte-h="svelte-lmqc2h"><div class="position-re o-hidden"><img src="img/destination/aosta1.jpg" alt=""> <div class="date"><a href="post.html"><span>Dec</span> <i>04</i></a></div></div> <div class="con"><span class="category"><a href="blog.html">Tours</a></span> <h5><a href="post.html">Most Popular Yacht Charter Routes</a></h5></div></div>`;
          }
        })}`;
      }
    }
  )}</div></div></div></section> ${validate_component(Testimonials, "Testimonials").$$render($$result, { data: information }, {}, {})} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
