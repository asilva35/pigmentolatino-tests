
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.esm.en.4dfbee80c411d6f27413.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/370.esm.en.f50b586c40eef352dc2b.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/589.esm.en.b74e7f51dc3cd046a682.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/681.esm.en.91a93988e20c886864cc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.esm.en.5a90bbec3a8d04204da1.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.esm.en.e7c87ec84b88595f964f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/21.esm.en.0cfd722a52252391ef58.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.esm.en.ad2f643ddfcd69662b67.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.esm.en.9d3797c24ab40897817e.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/370.esm.en.881a6f42d10e05a1be88.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.esm.en.cfbb45fd8786be5943fa.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/21.esm.en.a9036e45b2438ff44a91.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.esm.en.0c3faebd06215acd5044.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  