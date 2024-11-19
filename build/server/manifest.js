const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/Flaticon.woff","fonts/themify.woff","img/about.jpeg","img/destination/aosta1.jpg","img/destination/canada1.jpg","img/destination/dubai1.jpg","img/destination/france1.jpg","img/destination/greece1.jpg","img/destination/italy1.jpg","img/destination/maldives1.jpg","img/destination/milano.jpg","img/destination/parma1.jpg","img/destination/perugia1.jpg","img/destination/rome1.jpg","img/destination/venice1.jpg","img/dots.png","img/hero.jpg","img/logo-dark.png","img/logo-light.png","img/map1.png","img/map2.png","img/slider/1.jpg","img/slider/15.jpg","img/slider/2.jpg","img/slider/3.jpg","img/tours/canada1.jpg","img/tours/france1.jpg","img/tours/greece1.jpg","img/tours/italy1.jpg","img/tours/maldives1.jpg","js/bootstrap.min.js","js/custom.js","js/datepicker.js","js/imagesloaded.pkgd.min.js","js/jquery-3.6.3.min.js","js/jquery-migrate-3.0.0.min.js","js/jquery.counterup.min.js","js/jquery.isotope.v3.0.2.js","js/jquery.magnific-popup.js","js/jquery.stellar.min.js","js/jquery.waypoints.min.js","js/modernizr-2.6.2.min.js","js/owl.carousel.min.js","js/pace.js","js/popper.min.js","js/scrollIt.min.js","js/select2.js","js/smooth-scroll.min.js","js/vegas.slider.min.js","js/YouTubePopUp.js","robots.txt"]),
	mimeTypes: {".png":"image/png",".woff":"font/woff",".jpeg":"image/jpeg",".jpg":"image/jpeg",".js":"text/javascript",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BxCOzmDu.js","app":"_app/immutable/entry/app.CquimYac.js","imports":["_app/immutable/entry/start.BxCOzmDu.js","_app/immutable/chunks/entry.76K7a0Dp.js","_app/immutable/chunks/runtime.4cnYjytP.js","_app/immutable/entry/app.CquimYac.js","_app/immutable/chunks/runtime.4cnYjytP.js","_app/immutable/chunks/store.BFxY5Mkn.js","_app/immutable/chunks/disclose-version.Cho4bfoX.js","_app/immutable/chunks/index-client.Cwab6Dlt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-CM8lGsAo.js')),
			__memo(() => import('./chunks/1-B5Dr9Irw.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
