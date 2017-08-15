---
layout: store-item
title:  "Lonely Island"
preview: lonely-island-sq.jpg
order: 1
draft: true
---

<img src="/dist/images/portfolio/DSC05736.jpg" />

<div id='product-component-e3f29ce8f9e'></div>
<script type="text/javascript">
/*<![CDATA[*/

(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'jimmynotjim.myshopify.com',
      apiKey: 'ee3078ea84c39d94f68b00633012e58f',
      appId: '6',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: [11180847050],
        node: document.getElementById('product-component-e3f29ce8f9e'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "variantId": "all",
    "width": "240px",
    "contents": {
      "img": false,
      "imgWithCarousel": false,
      "title": false,
      "variantTitle": false,
      "price": false,
      "description": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "text-align": "left",
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0",
          "margin-bottom": "50px"
        }
      },
      "button": {
        "background-color": "#25323d",
        "font-family": "Lato, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#3f5568"
        },
        "border-radius": "4px",
        "font-weight": "normal",
        ":focus": {
          "background-color": "#3f5568"
        }
      },
      "variantTitle": {
        "font-family": "Lato, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Lato, sans-serif",
        "font-size": "26px"
      },
      "description": {
        "font-family": "Lato, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Lato, sans-serif",
        "font-size": "18px",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-size": "15px",
        "font-family": "Lato, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Lato",
      "Lato",
      "Lato",
      "Lato",
      "Lato",
      "Lato"
    ]
  },
  "cart": {
    "contents": {
      "button": true
    },
    "styles": {
      "button": {
        "background-color": "#25323d",
        "font-family": "Lato, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#3f5568"
        },
        "border-radius": "4px",
        "font-weight": "normal",
        ":focus": {
          "background-color": "#3f5568"
        }
      },
      "footer": {
        "background-color": "#ffffff"
      }
    },
    "googleFonts": [
      "Lato"
    ]
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "variantTitle": false,
      "buttonWithQuantity": true,
      "button": false,
      "quantity": false
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "background-color": "#25323d",
        "font-family": "Lato, sans-serif",
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px",
        ":hover": {
          "background-color": "#3f5568"
        },
        "border-radius": "4px",
        "font-weight": "normal",
        ":focus": {
          "background-color": "#3f5568"
        }
      },
      "variantTitle": {
        "font-family": "Lato, sans-serif",
        "font-weight": "normal"
      },
      "title": {
        "font-family": "Lato, sans-serif"
      },
      "description": {
        "font-family": "Lato, sans-serif",
        "font-weight": "normal"
      },
      "price": {
        "font-family": "Lato, sans-serif",
        "font-weight": "normal"
      },
      "quantityInput": {
        "font-size": "14px",
        "padding-top": "15px",
        "padding-bottom": "15px"
      },
      "compareAt": {
        "font-family": "Lato, sans-serif",
        "font-weight": "normal"
      }
    },
    "googleFonts": [
      "Lato",
      "Lato",
      "Lato",
      "Lato",
      "Lato",
      "Lato"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Lato, sans-serif",
        "background-color": "#25323d",
        ":hover": {
          "background-color": "#3f5568"
        },
        "font-weight": "normal",
        ":focus": {
          "background-color": "#3f5568"
        }
      },
      "count": {
        "font-size": "14px"
      }
    },
    "googleFonts": [
      "Lato"
    ]
  },
  "option": {
    "styles": {
      "label": {
        "font-family": "Lato, sans-serif"
      },
      "select": {
        "font-family": "Lato, sans-serif"
      }
    },
    "googleFonts": [
      "Lato",
      "Lato"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  }
}
      });
    });
  }
})();
/*]]>*/
</script>
