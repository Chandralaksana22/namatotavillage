export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-icon-144x144.png","android-icon-192x192.png","android-icon-36x36.png","android-icon-48x48.png","android-icon-72x72.png","android-icon-96x96.png","apple-icon-114x114.png","apple-icon-120x120.png","apple-icon-144x144.png","apple-icon-152x152.png","apple-icon-180x180.png","apple-icon-57x57.png","apple-icon-60x60.png","apple-icon-72x72.png","apple-icon-76x76.png","apple-icon-precomposed.png","apple-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon-96x96.png","favicon.ico","favicon.png","fonts/Flaticon.woff","fonts/themify.woff","google206f204da405d817.html","img/about.jpeg","img/destination/aosta1.jpg","img/destination/canada1.jpg","img/destination/dubai1.jpg","img/destination/france1.jpg","img/destination/greece1.jpg","img/destination/italy1.jpg","img/destination/maldives1.jpg","img/destination/milano.jpg","img/destination/parma1.jpg","img/destination/perugia1.jpg","img/destination/rome1.jpg","img/destination/venice1.jpg","img/dots.png","img/hero.jpg","img/logo-dark.png","img/logo-light.png","img/map1.png","img/map2.png","img/slider/1.jpg","img/slider/15.jpg","img/slider/2.jpg","img/slider/3.jpg","img/team/05.png","img/tours/canada1.jpg","img/tours/france1.jpg","img/tours/greece1.jpg","img/tours/italy1.jpg","img/tours/maldives1.jpg","js/bootstrap.min.js","js/custom.js","js/datepicker.js","js/imagesloaded.pkgd.min.js","js/jquery-3.6.3.min.js","js/jquery-migrate-3.0.0.min.js","js/jquery.counterup.min.js","js/jquery.isotope.v3.0.2.js","js/jquery.magnific-popup.js","js/jquery.stellar.min.js","js/jquery.waypoints.min.js","js/modernizr-2.6.2.min.js","js/owl.carousel.min.js","js/pace.js","js/popper.min.js","js/scrollIt.min.js","js/select2.js","js/smooth-scroll.min.js","js/vegas.slider.min.js","js/YouTubePopUp.js","manifest.json","ms-icon-144x144.png","ms-icon-150x150.png","ms-icon-310x310.png","ms-icon-70x70.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".xml":"text/xml",".woff":"font/woff",".html":"text/html",".jpeg":"image/jpeg",".jpg":"image/jpeg",".js":"text/javascript",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.BIpyS_V_.js","app":"_app/immutable/entry/app.C71bSvxz.js","imports":["_app/immutable/entry/start.BIpyS_V_.js","_app/immutable/chunks/entry.DACBHv48.js","_app/immutable/chunks/scheduler.DkJsFCvd.js","_app/immutable/entry/app.C71bSvxz.js","_app/immutable/chunks/scheduler.DkJsFCvd.js","_app/immutable/chunks/index.yZEH951e.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
