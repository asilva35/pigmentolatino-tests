
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.esm.es.360c12e6eeaaff5a8e37.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/370.esm.es.cbec5ee04adc8085a115.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/832.esm.es.a362db4378afde4a6164.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/681.esm.es.21129a1c50f743962d81.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.esm.es.0d4ab705d40ccf056201.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/751.esm.es.e7c87ec84b88595f964f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/21.esm.es.0cfd722a52252391ef58.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/100.esm.es.ad2f643ddfcd69662b67.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/OnePage.esm.es.653094e034661bafeda9.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/370.esm.es.881a6f42d10e05a1be88.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.esm.es.cfbb45fd8786be5943fa.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/21.esm.es.a9036e45b2438ff44a91.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/268.esm.es.6f1bb3aba06f3f8f54dd.css"];
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
  