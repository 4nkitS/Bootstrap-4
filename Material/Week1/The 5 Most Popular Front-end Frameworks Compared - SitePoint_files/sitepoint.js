try {

	//global variable for async
	var propertag = propertag || {};
	propertag.cmd = propertag.cmd || [];

	//Set Options
	(function(win, document) {

		var session_persistent = 0; // User keeps same version id throughout session
		var last_release_ts = "2021-03-01 11:01:46";  // Last time a file was released from split test
		var publisher = "sitepoint";
		var proper_ad_block_message = 0; // Flag if proper ad block message should be enabled

		var cookie_name = "proper_rtp_split_test";
		var cookieData  = {
			"version_id": null, // Session version id
			"release_ts": null  // Time this cookie was set
		}

		/**
		 * Rtp Files.
		 *
		 * If One Version:
		 *
		 * { version_id: config }
		 *
		 * If Split version:
		 *
		 * { version_id: rtp_version_id }
		 */

		// List of rtp files
		var rtp_files = {"4093":{"domain":"sitepoint.com","floors":{"mobile":{"backup":0.1},"desktop":{"backup":0.1}},"schain":{"ver":"1.0","nodes":[{"hp":1,"asi":"proper.io","sid":"e5961d07-eb92-11e9-a488-69e3386c7506"}],"complete":1},"bidders":{"header":{"a9":{"enabled":true,"tag_ids":{"desktop":[{"728x90":["desktop-6","desktop-7"],"160x600":["desktop-1","desktop-2","desktop-3","desktop-4"],"300x250":["desktop-1","desktop-2","desktop-3","desktop-4","desktop-5"],"300x600":["desktop-1","desktop-2","desktop-3"]}]}},"emx":{"enabled":true,"site_id":"57373","tag_ids":{"desktop":[{"728x90":["728x90-1","728x90-2","728x90-3"],"160x600":["160x600-1","160x600-2","160x600-3","160x600-4"],"300x250":["300x250-1","300x250-2","300x250-3","300x250-4","300x250-5"],"300x600":["300x600-1","300x600-2","300x600-3"]}]}},"index":{"enabled":true,"site_id":"293713-300","tag_ids":{"desktop":[{"728x90":["728x90-1","728x90-2","728x90-3"],"160x600":["160x600-1","160x600-2","160x600-3","160x600-4"],"300x250":["300x250-1","300x250-2","300x250-3","300x250-4","300x250-5"],"300x600":["300x600-1","300x600-2","300x600-3"]}]}},"openx":{"enabled":true,"tag_ids":{"desktop":[{"728x90":["540227187","540227188","540227193"],"160x600":["540601492","540245957","540245958","540245959","540601492"],"300x250":["541130666","540227187","540245957","540245958","540245959","540601492"],"300x600":["540601492","540245957","540245958","540245959","540601492"]}]}},"sovrn":{"enabled":true,"tag_ids":{"desktop":[{"728x90":["633141","633142","633159"],"160x600":["633176","633167","633170","633173","633176"],"300x250":["633140","633168","633171","633174","633177"],"300x600":["633178","633169","633172","633175","633178"]}]}},"teads":{"enabled":true,"site_id":"100750","tag_ids":{"desktop":[{"native_horizontal":["109063-1"]}]}},"mantis":{"enabled":true,"tag_ids":{"desktop":[{"728x90":["sitepoint_desktop-6","sitepoint_desktop-7"],"160x600":["sitepoint_desktop-1","sitepoint_desktop-2","sitepoint_desktop-3","sitepoint_desktop-4"],"300x250":["sitepoint_desktop-1","sitepoint_desktop-2","sitepoint_desktop-3","sitepoint_desktop-4","sitepoint_desktop-5"],"300x600":["sitepoint_desktop-1","sitepoint_desktop-2","sitepoint_desktop-3"]}]}},"rubicon":{"enabled":true,"site_id":"208370","tag_ids":{"desktop":[{"728x90":["1034014-6","1034014-7"],"160x600":["1034014-1","1034014-2","1034014-3","1034014-4"],"300x250":["1034014-1","1034014-2","1034014-3","1034014-4","1034014-5"],"300x600":["1034014-1","1034014-2","1034014-3"]}]}},"appnexus":{"enabled":true,"tag_ids":{"desktop":[{"728x90":["13833290","13833287","13833285"],"160x600":["14952816","13833293","13833294","13833292","14952816"],"300x250":["13833290","13833293","13833294","13833292","14952816"],"300x600":["14952816","13833293","13833294","13833292","14952816"]}]}},"pubmatic":{"enabled":true,"tag_ids":{"desktop":[{"728x90":["1","1"],"160x600":["1","1","1","1"],"300x250":["1","1","1","1"],"300x600":["1","1","1"]}]}},"adyoulike":{"enabled":true,"tag_ids":{"desktop":[{"728x90":["d041392bc3f1a7c49850569dca17f360","cdf40fc4834020889dc13be8167f3176","a2a049fefcdccf0327d7da72008510ba"],"160x600":["a7df4725b32656aa63af7ced78bf1414","4441b5d091fb9c0c40a94894ee02f821","58d680ea4872a162ec72c2dbb3b0808c","2bb4dd2f4bc54e6e0d55855339a1b653"],"300x250":["87c3eda6412971524bdeaf8944f90d0a","838dd435c87bc50fa2d4735f6093ba67","9204975f4e8594cfd2b93fde908d5b97","973d98cb65d5794f3f7230a80b706701","9e90f9b9d8ce304d05b377997e043eaa"],"300x600":["79e20a2330e4ee09fcaf85ad1335880f","c376ad02eb16ee219c42dd6765585ed2","11a62673455e349a27732246266e5477"]}]}},"rhythmone":{"enabled":true,"site_id":"210394","tag_ids":{"desktop":[{"728x90":["sitepoint_desktop-6","sitepoint_desktop-7"],"160x600":["sitepoint_desktop-1","sitepoint_desktop-2","sitepoint_desktop-3","sitepoint_desktop-4"],"300x250":["sitepoint_desktop-1","sitepoint_desktop-2","sitepoint_desktop-3","sitepoint_desktop-4","sitepoint_desktop-5"],"300x600":["sitepoint_desktop-1","sitepoint_desktop-2","sitepoint_desktop-3"]}]}},"conversant":{"enabled":true,"site_id":"125147","tag_ids":{"desktop":[{"728x90":["desktop-6","desktop-7"],"160x600":["desktop-1","desktop-2","desktop-3","desktop-4"],"300x250":["desktop-1","desktop-2","desktop-3","desktop-4","desktop-5"],"300x600":["desktop-1","desktop-2","desktop-3"]}]}},"districtmdmx":{"enabled":true,"site_id":"241354","tag_ids":{"desktop":[{"728x90":["desktop-6","desktop-7"],"160x600":["desktop-1","desktop-2","desktop-3","desktop-4"],"300x250":["desktop-1","desktop-2","desktop-3","desktop-4","desktop-5"],"300x600":["desktop-1","desktop-2","desktop-3"]}]}},"sharethrough":{"enabled":true,"tag_ids":{"desktop":[{"728x90":["JuUbtP57wqV1z2Qhrmi4eXkh","x9RT8oYoaqwNQyCh4WyGXyjw","7yhDtdPjguGyn7sQ4PkHfxEL"],"160x600":["MSfPxxi4CRsREKn8HWakHKv1"],"300x250":["zMykY6Uu1uZy7NoDZXktiJgf","4HbyfcfAHYdtxztBFSGw2R5H","yfrWn1uJ1o7Vy8XjksvBJh1f","ztRYQNd1XFRdvaY2LN1XhZ7A","ZoLVVQgPY2hTMhiSdWem8yci"],"300x600":["e7GQz1gssicXvr6DFLfGGxZq","W6Pm5x96KPK5PFzuXqPqwQrD","kGpAnHAHvtRVSPUjRgZaCHsq","zkoTHq8XcK7pquLYDJmpLuLS","e7GQz1gssicXvr6DFLfGGxZq"]}]}},"thirtythreeacross":{"enabled":true,"tag_ids":{"desktop":[{"728x90":["bOf4q8_O8r6yofaKlId8sQ","bZB3SE_O8r6ykcaKkv7mNO","dPoShe7jer6yk_aKlId8sQ"],"160x600":["bjyii2_Par6yoTaKkGJozW","aL_lHq_Par6ykcaKkv7mNO","aYWys8_Par6yoTaKkGJozW","a_Vt9o_Par6yoTaKkGJozW","bjyii2_Par6yoTaKkGJozW"],"300x250":["bOf4q8_O8r6yofaKlId8sQ","aL_lHq_Par6ykcaKkv7mNO","aYWys8_Par6yoTaKkGJozW","a_Vt9o_Par6yoTaKkGJozW","bjyii2_Par6yoTaKkGJozW"],"300x600":["bjyii2_Par6yoTaKkGJozW","aL_lHq_Par6ykcaKkv7mNO","aYWys8_Par6yoTaKkGJozW","a_Vt9o_Par6yoTaKkGJozW","bjyii2_Par6yoTaKkGJozW"]}]}}}},"refresh":{"mobile":{"max":10,"enabled":1,"interval":60000,"exclude_dfp":0,"inview_interval":3000},"desktop":{"max":10,"enabled":1,"interval":60000,"exclude_dfp":0,"inview_interval":3000}},"ad_slots":{"display":{"sitepoint_main_1":{"number":1,"sticky":false,"resolution_size_map":{"768":["728x90"]}},"sitepoint_side_1":{"number":4,"sticky":false,"dynamic":{"mobile":{"enabled":true,"cssselector":"#sitepoint_side_1"},"desktop":{"enabled":true,"cssselector":"#sitepoint_side_1"}},"resolution_size_map":{"768":["160x600","300x250","300x600"]}},"sitepoint_side_2":{"number":5,"sticky":false,"dynamic":{"mobile":{"enabled":true,"cssselector":"#sitepoint_side_2"},"desktop":{"enabled":true,"cssselector":"#sitepoint_side_2"}},"resolution_size_map":{"768":["160x600","300x250","300x600"]}},"sitepoint_side_3":{"number":6,"sticky":false,"dynamic":{"mobile":{"enabled":true,"cssselector":"#sitepoint_side_3"},"desktop":{"enabled":true,"cssselector":"#sitepoint_side_3"}},"refresh":{"mobile":{"enabled":true,"interval":30000,"inview_interval":3000},"desktop":{"enabled":true,"interval":30000,"inview_interval":3000}},"resolution_size_map":{"768":["160x600","300x250","300x600"]}},"sitepoint_dynamic":{"number":10,"sticky":false,"dynamic":{"mobile":{"enabled":true,"cssselector":".sitepoint_content"},"desktop":{"enabled":true,"cssselector":".sitepoint_content"}},"resolution_size_map":{"768":["728x90"]}},"sitepoint_blog_header":{"number":2,"sticky":false,"dynamic":{"mobile":{"enabled":true,"cssselector":"#sitepoint_blog_header"},"desktop":{"enabled":true,"cssselector":"#sitepoint_blog_header"}},"resolution_size_map":{"768":["300x250"]}},"sitepoint_community_1":{"number":9,"sticky":false,"resolution_size_map":{"768":["300x250","336x280","728x90","native_horizontal"]}},"sitepoint_left_sticky":{"number":11,"sticky":true,"refresh":{"mobile":{"interval":30000},"desktop":{"interval":30000}},"sticky_settings":{"brand":false,"position":"left","close_btn":false},"resolution_size_map":{"1500":["160x600"]}},"sitepoint_blog_sponsor_1":{"number":3,"sticky":false,"dynamic":{"mobile":{"enabled":true,"cssselector":"#sitepoint_blog_sponsor_1"},"desktop":{"enabled":true,"cssselector":"#sitepoint_blog_sponsor_1"}},"resolution_size_map":{"768":["300x600"]}},"sitepoint_community_home":{"number":7,"sticky":false,"resolution_size_map":{"768":["728x90"]}},"sitepoint_community_side_1":{"number":8,"sticky":false,"resolution_size_map":{"768":["160x600"]}}}},"auctions":{"mobile":{"max":5,"rounds":0,"timeout":58000},"desktop":{"max":5,"rounds":1,"timeout":58000},"resolution_size_map":{"768":["728x90","160x600","300x250","300x600","336x280","native_horizontal"],"1500":["160x600"]}},"confiant":false,"lazyload":{"mobile":{"enabled":true,"fetchMarginPercent":50,"renderMarginPercent":50},"desktop":{"enabled":true,"fetchMarginPercent":50,"renderMarginPercent":50},"device_specific":false},"extra_css":".proper-ad-unit.sticky-left .close,.proper-ad-unit.sticky-right .close, .proper-ad-unit[class*='sticky-corner-'] .close{display:none !important}.proper-ad-unit.sticky-left .sticky-inner>div:last-of-type, .proper-ad-unit.sticky-right .sticky-inner>div:last-of-type, .proper-ad-unit[class*='sticky-corner-'] .sticky-inner>div:last-of-type, .proper-ad-unit.sticky-left .brand, .proper-ad-unit.sticky-right .brand, .proper-ad-unit[class*='sticky-corner-'] .brand, .proper-ad-unit.sticky-left .close:after, .proper-ad-unit.sticky-right .close:after, .proper-ad-unit[class*='sticky-corner-'] .close:after{border-color: #CCCCCC; border-width: 0px;} .proper-ad-unit.sticky-left .brand, .proper-ad-unit.sticky-right .brand, .proper-ad-unit[class*='sticky-corner-'] .brand { margin-top: calc( 0px - 2px) } .proper-ad-unit.sticky-left .close:after, .proper-ad-unit.sticky-right .close:after, .proper-ad-unit[class*='sticky-corner-'] .close:after { margin-bottom: calc( -0px + 2px) } .proper-ad-unit.sticky-right .sticky-inner>div:last-of-type, .proper-ad-unit.sticky-left .sticky-inner>div:last-of-type, .proper-ad-unit[class*='sticky-corner-'] .sticky-inner>div:last-of-type { padding: 0px; }","site_name":"sitepoint","dfp_per_slot":0,"isolated_urls":[],"report_ad_tool":false,"sandbox_iframe":1,"audience_pixels":{"enabled":false,"thresholds":[]},"sandbox_options":["allow-pointer-lock","allow-popups","allow-same-origin","allow-scripts"],"rtp_file_version":4093,"domain_protection":false,"rtp_file_revision":"latest","additional_domains":[],"traffic_percentage":1,"google_funding_choices":false,"proper_ad_block_message":false}};

		// Traffic Percentages
		var traffic_percentages = {"4093":1};
		var getVersionId = weightedRandom(traffic_percentages);

		function run() {
			// Init version id
			var version_id   = null,
				clear_cookie = false,
				config 		 = null;

			// Check for clear cookie flag
			var get_vars = getUrlParameters(window.location.search.substring(1));
			if(typeof get_vars["vselect_clear"] !== "undefined" && get_vars["vselect_clear"] == 1) {
				clear_cookie = true;
			}
			// Check for version id in url
			if(typeof get_vars["vselect"] !== "undefined" && get_vars["vselect"] && rtp_files[get_vars["vselect"]]) {
				version_id = get_vars["vselect"];
			}

			// Check for session persistent
			if(session_persistent) {
				// Get cookie data
				getSplitTestCookie();

				// Convert dates
				d1 = new Date(cookieData['release_ts']);
				d2 = new Date(last_release_ts);

				// Check if cookie data is out of date
				if(d1 < d2 || !cookieData['version_id'] || !rtp_files[cookieData['version_id']] || version_id || clear_cookie) {
					cookieData['version_id'] = version_id || getVersionId();  // Generate version id based on traffic share
					cookieData['release_ts'] = last_release_ts;   // Update release ts
				}
				// Set new cookie data
				setSplitTestCookie();

				version_id = cookieData['version_id'];
			} else {
				// Generate version id based on traffic share
				version_id = version_id || getVersionId();
			}

			// Check if proper ad block message should be enabled
			activateAdBlockMsg();

			var versions = Object.keys(rtp_files);
			// Find and Activate Config Object.
			if (rtp_files[version_id]) {
				if (versions.length == 1) {
					var config = rtp_files[version_id];
					activatePayload(config.rtp_file_revision);
					activateConfig(config);
				} else {
					var payload_name = rtp_files[version_id];
					activatePayload(payload_name);
					fetchConfig(version_id, function (config) {
						activateConfig(config);
					});
				}
			}
		}

		/**
		 * Activate the Config Object.
		 *
		 * @param {object} config RtpJ Config Object.
		 */
		function activateConfig(config) {
			propertag.cmd.unshift(function () {
				ProperMedia.ad_project.set_options(config);
			});
		}

		/**
		 * Add event listener of ad blockers to show proper ad block message
		 */
		function activateAdBlockMsg() {
			if(proper_ad_block_message) {
				window.addEventListener("proper-ad-bidders-blocked", loadProperMessage);
			}
		}

		/**
         * Load Proper Ad Block Message
         */
        function loadProperMessage() {

            function showProperMessage() {
                try {
                    var ProperMediaMessage = window.ProperMediaMessage || {};
                    ProperMediaMessage.project.show_shield_message('', publisher);
                } catch(e) {
                    console.error(e);
                }
            }

            if(
                !window.ProperMediaMessage ||
                !window.ProperMediaMessage.project ||
                !window.ProperMediaMessage.show_shield_message
            ) {
                console.log("Loading ad-block messaging");
                var script = document.createElement("script");
                script.type = "text/javascript";
                script.src = "https://propermessage.io/design/assets/bundle-message.js";
                script.onload = showProperMessage;
                document.getElementsByTagName("head")[0].appendChild(script);
            } else {
                showProperMessage()
            }
        }

		/**
		 * Grab the Config from the remote server.
		 *
		 * @param {*} version_id The Version Id to fetch.
		 * @param {*} callback Function that will be passed the parsed config.
		 */
		function fetchConfig(version_id, callback) {
			var req = new XMLHttpRequest();

			var listener = function () {
				var config = safeJsonParse(this.responseText);
				console.log("Config Response!", this.responseText, config);
				if(typeof callback == 'function') {
					callback(config);
				}
			};

			req.addEventListener("load", listener);
			req.open("GET", document.location.protocol + "//global.proper.io/config/" + publisher + "." + version_id + '.json');
			req.send();
		}

		/**
		 * Activate the Payload!
		 *
		 * @param {string} payload_name The Payload Release Name.
		 */
		function activatePayload(payload_name) {
			// Main ad code file
			var script = document.createElement("script");

			script.onerror = function() {
				payload_loaded = false;
                // Payload was blocked, trigger this event
                var event = new CustomEvent('proper-ad-bidders-blocked', {});
                window.dispatchEvent(event);
            }

        	payload_loaded = true;
			var payload = document.location.protocol + '//global.proper.io/payloads/' + payload_name + '.js';
			script.type = "text/javascript";
			script.src = payload;
			document.getElementsByTagName("head")[0].appendChild(script);
		}

		// Weighted Random @see https://stackoverflow.com/questions/8435183/generate-a-weighted-random-number
		function weightedRandom(spec) {
			if (!spec) {
				return function() {};
			}

			var ids = Object.keys(spec);

			if (ids.length == 1) {
				return function () { return ids[0] };
			}

			var i, j, table = [];
			for (i in spec) {
				// The constant 10 below should be computed based on the
				// weights in the spec for a correct and optimal table size.
				// E.g. the spec {0:0.999, 1:0.001} will break this impl.
				for (j=0; j<spec[i]*10; j++) {
					table.push(i);
				}
			}
			return function() {
				return table[Math.floor(Math.random() * table.length)];
			}
		}

		function getSplitTestCookie() {
			// Get cookie value
			var cookie_string_value = getCookieValue(cookie_name) || '{}';

			// Set settion object
			var cookieSplitTestData = safeJsonParse(cookie_string_value) || {};
			cookieData = {
				"version_id": cookieSplitTestData['version_id'] || null,
				"release_ts": cookieSplitTestData['release_ts'] || null
			}
		}

		function setSplitTestCookie() {
			// stringify data
			var encoded_cookie_value = JSON.stringify(cookieData);
			// save session cookie
			setCookieValue(encoded_cookie_value);
		}

		function getCookieValue(a) {
			var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
			return b ? b.pop() : undefined;
		}

		function setCookieValue(value) {
			document.cookie = cookie_name + "=" + value + "; path=/;";
		}

		function getUrlParameters(url) {
			var data = decodeURIComponent(url).split('&');
			var res = {};
			for (var i = 0; i < data.length; i++) {
				var parm = data[i].split('=');
				res[parm[0]] = parm[1];
			}
			return res;
		}

		/**
		 * safeJSONParse
		 *
		 * Makes an attempt to parse a JSON safely, but might fail miserably.
		 *
		 * @param {String} the json
		 *
		 * @returns {JSON|null} JSON is parsed, Null if not.
		 *
		 */
		function safeJsonParse(json) {
			try {
				return JSON.parse(json);
			} catch(e) {
				console.error(e);
			}
			return null;
		}

		/**
         * CustomEvent polyfill for IE
         */
        if(!window.CustomEvent !== "function" ) {
            window.CustomEvent = function CustomEvent ( event, params ) {
                params = params || { bubbles: false, cancelable: false, detail: null };
                var evt = document.createEvent( 'CustomEvent' );
                evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
                return evt;
            }
		};

		// Placeholder for Google Funding Choices.
		

		run();

	})(window, document);
} catch (e) {
	console.error(e);
	if(typeof TraceKit !== "undefined") {
		TraceKit.report(e); //error with stack trace gets normalized and sent to subscriber
	}
}
