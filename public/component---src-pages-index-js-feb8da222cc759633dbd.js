webpackJsonp([35783957827783],{97:function(e,t,a){"use strict";function n(e){return e}function l(e,t,a){function l(e,t){var a=N.hasOwnProperty(t)?N[t]:null;w.hasOwnProperty(t)&&s("OVERRIDE_BASE"===a,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&s("DEFINE_MANY"===a||"DEFINE_MANY_MERGED"===a,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function r(e,a){if(a){s("function"!=typeof a,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!t(a),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype,r=n.__reactAutoBindPairs;a.hasOwnProperty(c)&&v.mixins(e,a.mixins);for(var o in a)if(a.hasOwnProperty(o)&&o!==c){var i=a[o],u=n.hasOwnProperty(o);if(l(u,o),v.hasOwnProperty(o))v[o](e,i);else{var d=N.hasOwnProperty(o),p="function"==typeof i,h=p&&!d&&!u&&a.autobind!==!1;if(h)r.push(o,i),n[o]=i;else if(u){var E=N[o];s(d&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,o),"DEFINE_MANY_MERGED"===E?n[o]=f(n[o],i):"DEFINE_MANY"===E&&(n[o]=m(n[o],i))}else n[o]=i}}}else;}function u(e,t){if(t)for(var a in t){var n=t[a];if(t.hasOwnProperty(a)){var l=a in v;s(!l,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',a);var r=a in e;if(r){var o=b.hasOwnProperty(a)?b[a]:null;return s("DEFINE_MANY_MERGED"===o,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",a),void(e[a]=f(e[a],n))}e[a]=n}}}function d(e,t){s(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var a in t)t.hasOwnProperty(a)&&(s(void 0===e[a],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",a),e[a]=t[a]);return e}function f(e,t){return function(){var a=e.apply(this,arguments),n=t.apply(this,arguments);if(null==a)return n;if(null==n)return a;var l={};return d(l,a),d(l,n),l}}function m(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function p(e,t){var a=t.bind(e);return a}function h(e){for(var t=e.__reactAutoBindPairs,a=0;a<t.length;a+=2){var n=t[a],l=t[a+1];e[n]=p(e,l)}}function E(e){var t=n(function(e,n,l){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=n,this.refs=i,this.updater=l||a,this.state=null;var r=this.getInitialState?this.getInitialState():null;s("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r});t.prototype=new M,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],y.forEach(r.bind(null,t)),r(t,g),r(t,e),r(t,_),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),s(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var l in N)t.prototype[l]||(t.prototype[l]=null);return t}var y=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},b={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var a=0;a<t.length;a++)r(e,t[a])},childContextTypes:function(e,t){e.childContextTypes=o({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=o({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=o({},e.propTypes,t)},statics:function(e,t){u(e,t)},autobind:function(){}},g={componentDidMount:function(){this.__isMounted=!0}},_={componentWillUnmount:function(){this.__isMounted=!1}},w={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},M=function(){};return o(M.prototype,e.prototype,w),E}var r,o=a(5),i=a(34),s=a(1),c="mixins";r={},e.exports=l},5:function(e,t){"use strict";function a(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function n(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;var n=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==n.join(""))return!1;var l={};return"abcdefghijklmnopqrst".split("").forEach(function(e){l[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},l)).join("")}catch(e){return!1}}var l=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;e.exports=n()?Object.assign:function(e,t){for(var n,i,s=a(e),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var u in n)r.call(n,u)&&(s[u]=n[u]);if(l){i=l(n);for(var d=0;d<i.length;d++)o.call(n,i[d])&&(s[i[d]]=n[i[d]])}}return s}},327:function(e,t){},197:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l);a(327);var o=a(189),i=n(o),s=function(){return r.default.createElement("section",{className:"section aboutUs",id:"aboutUs"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"columns"},r.default.createElement("div",{className:"column is-hidden-touch"},r.default.createElement("figure",{className:"image"},r.default.createElement("img",{src:i.default}),r.default.createElement("p",{className:"subtitle"},"Mikey Mullen, 2004"))),r.default.createElement("div",{className:"column is-three-quarters"},r.default.createElement("h1",{className:"title"},"About us"),r.default.createElement("h2",{className:"subtitle"},"Fundraising for the RNLI and the Clifden Lifeboat"),r.default.createElement("div",{className:"content"},r.default.createElement("p",null,"The inaugural Clifden Lifeboat 10k Race took place on the 14th September 2008, in a bid to raise funds for the RNLI and the Clifden Lifeboat."),r.default.createElement("p",null," The event was held close to the anniversary of a tragic event which shocked the West Galway community. The MVF St Oliver sank in bad weather on the 17th September 2004, claiming the lives of 4 local fishermen, including 18 year old Mikey Mullen, who had only been at sea for 6 months.",r.default.createElement("br",null),"This race was organised as a tribute to Mikey and the other three fishermen who lost their lives. "),r.default.createElement("p",null," Due to the overwhelming positive response we have received following the first race, it was decided to make this into a yearly fixture. The race is open to all athlethes, as well as leisure runners and walkers, and can be entered into individually or as teams of 3 or 4 people."))),r.default.createElement("div",{className:"column is-hidden-desktop"},r.default.createElement("figure",{className:"image"},r.default.createElement("img",{src:i.default}),r.default.createElement("p",{className:"subtitle"},"Mikey Mullen, 2004"))))))};t.default=s,e.exports=t.default},328:function(e,t){},198:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l);a(328);var o=a(438),i=(n(o),function(){return r.default.createElement("section",{className:"section categories",id:"categories"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"columns"},r.default.createElement("div",{className:"column is-hidden-touch"},r.default.createElement("figure",{className:"image"})),r.default.createElement("div",{className:"column is-three-quarters"},r.default.createElement("h1",{className:"title"},"Race categories"),r.default.createElement("h2",{className:"subtitle"},"Trophies for 1st, 2nd and 3rd overall male/female"),r.default.createElement("div",{className:"content"},r.default.createElement("h3",{className:"title"}," Runners "),r.default.createElement("p",{className:"subtitle is-spaced"},"Trophies for 1st male and female Under 40, Under 50, Under 60 and 60+ "),r.default.createElement("h3",{className:"title"},"Walkers and Run/Walkers "),r.default.createElement("p",{className:"subtitle is-spaced"},"Trophies for 1st"),r.default.createElement("h3",{className:"title"}," Teams "),r.default.createElement("p",{className:"subtitle is-spaced"},"Perpetual shield for 1st team, and smaller individual trophy for each winning team member to keep. Smaller individual trophies for each member of 2nd and 3rd team"),r.default.createElement("h3",{className:"title"}," Trophy for anyone who can beat the best finishing times "),r.default.createElement("p",{className:"subtitle men"},r.default.createElement("span",{className:"best"}," Men ")," 35.34 minutes (Martin Lyons, 2010)"),r.default.createElement("p",{className:"subtitle woman is-spaced"},r.default.createElement("span",{className:"best"},"Women ")," 45.07 minutes (Rachel Mannion, 2010)"),r.default.createElement("p",null,"Entry fee is ",r.default.createElement("span",{className:"mdi mdi-currency-eur"})," 20 individuals or ",r.default.createElement("span",{className:"mdi mdi-currency-eur"})," 50/teams"))),r.default.createElement("div",{className:"column is-hidden-desktop"},r.default.createElement("figure",{className:"image"})),r.default.createElement("div",{className:"column is-hidden-desktop"},r.default.createElement("a",{href:"https://www.runireland.com/events/clifden-lifeboat-10k-run/",className:"enter"},"Enter online")))))});t.default=i,e.exports=t.default},329:function(e,t){},199:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l);a(329);var o=function(){return r.default.createElement("section",{className:"section footer"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"columns"},r.default.createElement("div",{className:"column is-10 contactUs"},r.default.createElement("p",null," Contact us "),r.default.createElement("div",{className:"options"},r.default.createElement("span",null,r.default.createElement("span",{className:"mdi mdi-phone"})," ",r.default.createElement("a",{href:"tel:+353876271288"},"+353 876 271 288")),r.default.createElement("span",null,r.default.createElement("span",{className:"mdi mdi-email"})," ",r.default.createElement("a",{href:"mailto:info@clifden10.com"},"info@clifden10.com")))),r.default.createElement("div",{className:"column right"},r.default.createElement("a",{href:"https://www.runireland.com/events/clifden-lifeboat-10k-run/",className:"enter"},"Enter online")))))};t.default=o,e.exports=t.default},201:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l);a(331);var o=function(){return r.default.createElement("section",{className:"hero is-fullheight"},r.default.createElement("div",{className:"hero-body"},r.default.createElement("div",{className:"container"},r.default.createElement("h1",{className:"title"}," Clifden Lifeboat 10k race"),r.default.createElement("h2",{className:"subtitle"},"Do you have what it takes?"))))};t.default=o,e.exports=t.default},331:function(e,t){},202:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,a(332);var i=a(2),s=n(i),c=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.componentDidMount=function(){mapboxgl.accessToken="pk.eyJ1IjoiYm9vbmFnZW5jeWlybCIsImEiOiJjamE3emdlZ3YwMXIxMnhxbWRqNGRxY3huIn0.RnmocFzP2hqvfi9nnTgi0A";var e=new mapboxgl.Map({container:"map",style:"mapbox://styles/boonagencyirl/cjjflfse09xcc2soclrej9ums",center:[-10.055924,53.489535],zoom:12,attributionControl:!1}),t=new mapboxgl.NavigationControl;e.addControl(t,"bottom-right"),e.on("load",function(){e.addSource("route",{type:"geojson",data:{type:"Feature",properties:{},geometry:{type:"LineString",coordinates:[[-10.022951,53.488397],[-10.022927,53.488405],[-10.023029,53.488514],[-10.023366,53.488876],[-10.023435,53.488958],[-10.02351,53.489049],[-10.023718,53.489322],[-10.023737,53.489347],[-10.024339,53.489283],[-10.024503,53.489267],[-10.02477,53.489233],[-10.025119,53.489188],[-10.02568,53.489102],[-10.025956,53.48906],[-10.026131,53.489033],[-10.026268,53.489012],[-10.026406,53.488991],[-10.026438,53.488986],[-10.02649,53.488978],[-10.026813,53.488931],[-10.026924,53.488922],[-10.027025,53.488938],[-10.027097,53.488964],[-10.027206,53.488991],[-10.027358,53.48901],[-10.027559,53.489026],[-10.027977,53.489046],[-10.028659,53.489096],[-10.02896,53.489122],[-10.029164,53.489135],[-10.029302,53.489138],[-10.029465,53.489121],[-10.029578,53.489072],[-10.029705,53.489014],[-10.029842,53.488964],[-10.029976,53.48895],[-10.030005,53.488948],[-10.030207,53.488925],[-10.030429,53.488914],[-10.030576,53.488919],[-10.03073,53.488923],[-10.030879,53.488911],[-10.031009,53.488902],[-10.031161,53.48888],[-10.031308,53.488865],[-10.031456,53.488855],[-10.031665,53.48885],[-10.031913,53.488845],[-10.032173,53.488827],[-10.032289,53.48881],[-10.032339,53.488793],[-10.032387,53.488768],[-10.032533,53.488668],[-10.032556,53.488651],[-10.03264,53.488586],[-10.032689,53.488536],[-10.032779,53.488454],[-10.032945,53.488293],[-10.033134,53.488156],[-10.033305,53.488066],[-10.033423,53.488021],[-10.033603,53.487983],[-10.033749,53.487957],[-10.034023,53.487929],[-10.034362,53.487927],[-10.034702,53.487936],[-10.03503,53.487957],[-10.035588,53.487993],[-10.036037,53.488018],[-10.036294,53.488008],[-10.036471,53.487992],[-10.036646,53.487969],[-10.036797,53.487945],[-10.036936,53.48793],[-10.036977,53.48793],[-10.037277,53.487925],[-10.037662,53.487931],[-10.038022,53.487947],[-10.038158,53.487954],[-10.038606,53.487984],[-10.038643,53.487986],[-10.039216,53.488041],[-10.039693,53.488114],[-10.040071,53.488179],[-10.040098,53.488184],[-10.040372,53.488246],[-10.04062,53.488331],[-10.040674,53.488355],[-10.041101,53.488542],[-10.041897,53.488952],[-10.041922,53.488965],[-10.042479,53.489283],[-10.042905,53.489524],[-10.043401,53.489805],[-10.043437,53.489825],[-10.043661,53.489948],[-10.04378,53.490002],[-10.043938,53.490074],[-10.043967,53.490087],[-10.044358,53.490259],[-10.044591,53.490361],[-10.045324,53.490699],[-10.045686,53.490879],[-10.046043,53.49106],[-10.046141,53.491111],[-10.04637,53.491231],[-10.046768,53.491457],[-10.046988,53.491582],[-10.047195,53.491708],[-10.047326,53.491788],[-10.047399,53.491826],[-10.047449,53.491852],[-10.047561,53.491899],[-10.047667,53.491943],[-10.047709,53.49196],[-10.047767,53.491983],[-10.047838,53.492011],[-10.047901,53.492039],[-10.048169,53.49215],[-10.04833,53.492217],[-10.049019,53.49247],[-10.049992,53.492827],[-10.050621,53.493036],[-10.051082,53.493162],[-10.051961,53.49337],[-10.051981,53.493374],[-10.052467,53.49349],[-10.052624,53.493527],[-10.052752,53.493557],[-10.053131,53.493613],[-10.053517,53.493655],[-10.05377,53.493676],[-10.054031,53.493687],[-10.054199,53.493686],[-10.05441,53.493692],[-10.05457,53.493703],[-10.05477,53.493724],[-10.054907,53.493746],[-10.054977,53.493757],[-10.055646,53.493868],[-10.055998,53.493927],[-10.056131,53.493949],[-10.056272,53.493957],[-10.05649,53.493957],[-10.056715,53.49395],[-10.056913,53.493938],[-10.05721,53.493908],[-10.057405,53.493876],[-10.057821,53.493802],[-10.057984,53.493773],[-10.058082,53.493764],[-10.058191,53.493755],[-10.058514,53.493771],[-10.059224,53.493835],[-10.059388,53.49385],[-10.059818,53.493883],[-10.06011,53.493899],[-10.060368,53.493903],[-10.060634,53.493903],[-10.060877,53.493917],[-10.061001,53.493924],[-10.061384,53.49395],[-10.061625,53.493959],[-10.061797,53.493952],[-10.061944,53.49395],[-10.062059,53.493942],[-10.062647,53.493855],[-10.062866,53.493824],[-10.06324,53.493787],[-10.063574,53.493753],[-10.063748,53.493735],[-10.063901,53.493729],[-10.063995,53.493731],[-10.064112,53.493738],[-10.064311,53.493766],[-10.065001,53.493891],[-10.065355,53.493969],[-10.065694,53.494035],[-10.065999,53.494086],[-10.066374,53.494133],[-10.066724,53.49419],[-10.067045,53.494245],[-10.067316,53.494288],[-10.067733,53.494343],[-10.067981,53.494363],[-10.068382,53.494397],[-10.068878,53.494447],[-10.069305,53.494483],[-10.069815,53.494544],[-10.070349,53.494613],[-10.070749,53.494654],[-10.071501,53.494722],[-10.072212,53.4948],[-10.072683,53.49487],[-10.073008,53.494927],[-10.073334,53.494972],[-10.073766,53.49505],[-10.074151,53.495128],[-10.074441,53.495175],[-10.074617,53.495198],[-10.074931,53.495218],[-10.075188,53.495232],[-10.075545,53.495258],[-10.075917,53.495299],[-10.076295,53.495345],[-10.076914,53.495436],[-10.077467,53.495522],[-10.077816,53.495584],[-10.0782,53.495679],[-10.07865,53.495797],[-10.07899,53.495893],[-10.079223,53.495973],[-10.07932,53.496004],[-10.079677,53.496121],[-10.080146,53.496289],[-10.080357,53.496388],[-10.080527,53.496471],[-10.080973,53.496678],[-10.081282,53.496797],[-10.081597,53.496921],[-10.081845,53.496999],[-10.082437,53.497177],[-10.082795,53.497277],[-10.083088,53.497344],[-10.083423,53.49742],[-10.083939,53.497532],[-10.084613,53.497667],[-10.084834,53.497708],[-10.085284,53.497772],[-10.085421,53.497793],[-10.085688,53.497859],[-10.086216,53.498007],[-10.086426,53.498065],[-10.086574,53.498094],[-10.086838,53.498117],[-10.08718,53.498135],[-10.087301,53.498142],[-10.087415,53.498159],[-10.087569,53.498192],[-10.087913,53.498289],[-10.088275,53.498386],[-10.088459,53.49843],[-10.088587,53.498469],[-10.088995,53.498621],[-10.089139,53.498672],[-10.089284,53.498708],[-10.089492,53.498757],[-10.089806,53.49881],[-10.089986,53.498847],[-10.090242,53.49891],[-10.090568,53.498984],[-10.090753,53.49902],[-10.090899,53.499046],[-10.091153,53.499068],[-10.091378,53.499083],[-10.091507,53.499101],[-10.091654,53.499134],[-10.091507,53.499101],[-10.091378,53.499083],[-10.091153,53.499068],[-10.090899,53.499046],[-10.090753,53.49902],[-10.090568,53.498984],[-10.090242,53.49891],[-10.089986,53.498847],[-10.089806,53.49881],[-10.089492,53.498757],[-10.089284,53.498708],[-10.089139,53.498672],[-10.088995,53.498621],[-10.088587,53.498469],[-10.088459,53.49843],[-10.088275,53.498386],[-10.087913,53.498289],[-10.087569,53.498192],[-10.087415,53.498159],[-10.087301,53.498142],[-10.08718,53.498135],[-10.086838,53.498117],[-10.086574,53.498094],[-10.086426,53.498065],[-10.086216,53.498007],[-10.085688,53.497859],[-10.085421,53.497793],[-10.085284,53.497772],[-10.084834,53.497708],[-10.084613,53.497667],[-10.083939,53.497532],[-10.083423,53.49742],[-10.083088,53.497344],[-10.082795,53.497277],[-10.082437,53.497177],[-10.081845,53.496999],[-10.081597,53.496921],[-10.081282,53.496797],[-10.080973,53.496678],[-10.080527,53.496471],[-10.080357,53.496388],[-10.080146,53.496289],[-10.079677,53.496121],[-10.07932,53.496004],[-10.079223,53.495973],[-10.07899,53.495893],[-10.07865,53.495797],[-10.0782,53.495679],[-10.077816,53.495584],[-10.077467,53.495522],[-10.076914,53.495436],[-10.076295,53.495345],[-10.075917,53.495299],[-10.075545,53.495258],[-10.075188,53.495232],[-10.074931,53.495218],[-10.074617,53.495198],[-10.074441,53.495175],[-10.074151,53.495128],[-10.073766,53.49505],[-10.073334,53.494972],[-10.073008,53.494927],[-10.072683,53.49487],[-10.072212,53.4948],[-10.071501,53.494722],[-10.070749,53.494654],[-10.070349,53.494613],[-10.069815,53.494544],[-10.069305,53.494483],[-10.068878,53.494447],[-10.068382,53.494397],[-10.067981,53.494363],[-10.067733,53.494343],[-10.067316,53.494288],[-10.067045,53.494245],[-10.066724,53.49419],[-10.066374,53.494133],[-10.065999,53.494086],[-10.065694,53.494035],[-10.065355,53.493969],[-10.065001,53.493891],[-10.064311,53.493766],[-10.064112,53.493738],[-10.063995,53.493731],[-10.063901,53.493729],[-10.063748,53.493735],[-10.063574,53.493753],[-10.06324,53.493787],[-10.062866,53.493824],[-10.062647,53.493855],[-10.062059,53.493942],[-10.061944,53.49395],[-10.061797,53.493952],[-10.061625,53.493959],[-10.061384,53.49395],[-10.061001,53.493924],[-10.060877,53.493917],[-10.060634,53.493903],[-10.060368,53.493903],[-10.06011,53.493899],[-10.059818,53.493883],[-10.059388,53.49385],[-10.059224,53.493835],[-10.058514,53.493771],[-10.058191,53.493755],[-10.058082,53.493764],[-10.057984,53.493773],[-10.057821,53.493802],[-10.057405,53.493876],[-10.05721,53.493908],[-10.056913,53.493938],[-10.056715,53.49395],[-10.05649,53.493957],[-10.056272,53.493957],[-10.056131,53.493949],[-10.055998,53.493927],[-10.055646,53.493868],[-10.054977,53.493757],[-10.054907,53.493746],[-10.05477,53.493724],[-10.05457,53.493703],[-10.05441,53.493692],[-10.054199,53.493686],[-10.054031,53.493687],[-10.05377,53.493676],[-10.053517,53.493655],[-10.053131,53.493613],[-10.052752,53.493557],[-10.052624,53.493527],[-10.052467,53.49349],[-10.051981,53.493374],[-10.051961,53.49337],[-10.051082,53.493162],[-10.050621,53.493036],[-10.049992,53.492827],[-10.049019,53.49247],[-10.04833,53.492217],[-10.048169,53.49215],[-10.047901,53.492039],[-10.047838,53.492011],[-10.047767,53.491983],[-10.047709,53.49196],[-10.047667,53.491943],[-10.047561,53.491899],[-10.047449,53.491852],[-10.047399,53.491826],[-10.047326,53.491788],[-10.047195,53.491708],[-10.046988,53.491582],[-10.046768,53.491457],[-10.04637,53.491231],[-10.046141,53.491111],[-10.046043,53.49106],[-10.045686,53.490879],[-10.045324,53.490699],[-10.044591,53.490361],[-10.044358,53.490259],[-10.043967,53.490087],[-10.043938,53.490074],[-10.04378,53.490002],[-10.043661,53.489948],[-10.043437,53.489825],[-10.043401,53.489805],[-10.042905,53.489524],[-10.042479,53.489283],[-10.041922,53.488965],[-10.041897,53.488952],[-10.041101,53.488542],[-10.040674,53.488355],[-10.04062,53.488331],[-10.040372,53.488246],[-10.040098,53.488184],[-10.040071,53.488179],[-10.039693,53.488114],[-10.039216,53.488041],[-10.038643,53.487986],[-10.038606,53.487984],[-10.038158,53.487954],[-10.038022,53.487947],[-10.037662,53.487931],[-10.037277,53.487925],[-10.036977,53.48793],[-10.036936,53.48793],[-10.036797,53.487945],[-10.036646,53.487969],[-10.036471,53.487992],[-10.036294,53.488008],[-10.036037,53.488018],[-10.035588,53.487993],[-10.03503,53.487957],[-10.034702,53.487936],[-10.034362,53.487927],[-10.034023,53.487929],[-10.033749,53.487957],[-10.033603,53.487983],[-10.033423,53.488021],[-10.033305,53.488066],[-10.033134,53.488156],[-10.032945,53.488293],[-10.032779,53.488454],[-10.032689,53.488536],[-10.03264,53.488586],[-10.032556,53.488651],[-10.032533,53.488668],[-10.032387,53.488768],[-10.032339,53.488793],[-10.032289,53.48881],[-10.032173,53.488827],[-10.031913,53.488845],[-10.031665,53.48885],[-10.031456,53.488855],[-10.031308,53.488865],[-10.031161,53.48888],[-10.031009,53.488902],[-10.030879,53.488911],[-10.03073,53.488923],[-10.030576,53.488919],[-10.030429,53.488914],[-10.030207,53.488925],[-10.030005,53.488948],[-10.029976,53.48895],[-10.029842,53.488964],[-10.029705,53.489014],[-10.029578,53.489072],[-10.029465,53.489121],[-10.029302,53.489138],[-10.029164,53.489135],[-10.02896,53.489122],[-10.028659,53.489096],[-10.027977,53.489046],[-10.027559,53.489026],[-10.027358,53.48901],[-10.027206,53.488991],[-10.027097,53.488964],[-10.027025,53.488938],[-10.026924,53.488922],[-10.026935,53.488842],[-10.026987,53.488445],[-10.026943,53.48835],[-10.026873,53.488281],[-10.026743,53.488253],[-10.026646,53.488232],[-10.026184,53.488188],[-10.025401,53.488116],[-10.025352,53.488111],[-10.024728,53.488111],[-10.024605,53.488107],[-10.02456,53.488106],[-10.024395,53.488096],[-10.024251,53.488103],[-10.02416,53.488114],[-10.023876,53.488151],[-10.023784,53.488164],[-10.023686,53.488176],[-10.023784,53.488164],[-10.023417,53.488261],[-10.02314,53.488342]]}}}),e.addLayer({id:"routeLayer",source:"route",type:"line",paint:{"line-width":3,"line-color":"#0099cc"}})})},t.prototype.render=function(){return s.default.createElement("section",{id:"map"})},t}(i.Component);t.default=c,e.exports=t.default},332:function(e,t){},203:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l);a(333);var o=a(189),i=(n(o),a(202)),s=n(i),c=function(){return r.default.createElement("section",{className:"section theRace",id:"theRace"},r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"columns"},r.default.createElement("div",{className:"column is-8"},r.default.createElement("h1",{className:"title"},"The race"),r.default.createElement("div",{className:"content"},r.default.createElement("p",null," Race start at the Court House, across from the Topaz petrol station. It is an out and back route, which goes up the scenic Sky road and while walkers will be able to enjoy the beautiful scenery and views of Clifden Bay, it is challenging enough for any serious runners."),r.default.createElement("p",null,"It returns by the Thomas Whelan Memorial, to finish outside the Alcock and Brown Hotel in the town centre. A water station and race marshalls will be in attendance at the turn back point. "),r.default.createElement("p",null," You must give your race number to marshalls at this point before turning back."),r.default.createElement("p",null," The route is accuratly measured by an AAI official, and will be well marked out with markers at every kms (on the road). Marshalls will be in attendance at every junction "))),r.default.createElement("div",{className:"column mapColumn"},r.default.createElement(s.default,null)))))};t.default=c,e.exports=t.default},333:function(e,t){},189:function(e,t,a){e.exports=a.p+"static/mikey.7e77cba6.jpg"},438:function(e,t,a){e.exports=a.p+"static/prices.48de429b.jpg"},206:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(2),r=n(l),o=a(201),i=n(o),s=a(197),c=n(s),u=a(203),d=n(u),f=a(198),m=n(f),p=a(199),h=n(p),E=function(){return r.default.createElement("div",null,r.default.createElement(i.default,null),r.default.createElement(c.default,null),r.default.createElement(d.default,null),r.default.createElement(m.default,null),r.default.createElement(h.default,null))};t.default=E,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-feb8da222cc759633dbd.js.map