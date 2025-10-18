# Ultimate Shopify DataLayer for Google Tag Manager
**👉 Contact me for support:**

<img src="https://gravatar.com/avatar/0361222ec248091e4b3df42291acb1377e41de5762ccb1cfb5588dd8f81d9164?v=1759449621000&size=500&d=initials" width="60"/>

Email: info@leomeasure.com

Whatsapp: <a href="https://api.whatsapp.com/send?phone=8801723770763" target="_blank">+8801723770763</a>

Linkedin: <a href="https://www.linkedin.com/in/md-h/" target="_blank">linkedin.com/in/md-h/</a>


## How to use: 
1. Go to theme edit and paste GTM tracking code right after `<head>` tag in `theme.liquid` file
2. Inside the `snippets` folder create a new file as `ultimate-datalayer`. Copy all of the code from <a href="https://github.com/webhasan/gtm-datalayer-for-shopify/blob/main/ultimate-datalayer.liquid" target="_blank">`ultimate-datalayer.liquid`</a> of this repository to sinppet file `ultimate-datalayer.liquid`.
3. In the `theme.liquid` file after your GTM tracking code include `ultimate-datalayer.liquid` file as `{% render 'ultimate-datalayer' %}`
4. From your Shopify Admin Dashboard, navigate to Settings → Customer events.
In the top-right corner, click <a href="https://prnt.sc/FYo5izGrmJUw" target="_blank">Add custom pixel</a> to create a new custom pixel. Next, enter <a href="https://prnt.sc/hpEU9KQ3IudC" target="_blank">a title for the pixel</a> and create it. Remove all commented code from the code editor. Then, copy the entire code from the GitHub file <a href="https://github.com/webhasan/gtm-datalayer-for-shopify/blob/main/checkout-webpixel.js" target="_blank">checkout-webpixel.js</a> and <a href="https://prnt.sc/pvuUYeOvqky8" target="_blank">paste it into the code</a> field of your new custom pixel. At the very top of the code, replace the sample GTM Tracking <a href="https://prnt.sc/703lRl6F9_mL" target="_blank">ID GTM-00000000</a> with your actual Google Tag Manager ID. If you’re using server-side tagging with a custom domain, update the <a href="https://prnt.sc/9D2i45a3wVp3" target="_blank">Tag Manager URL</a> to match your website’s subdomain.
5. In the Customer privacy settings section - For the Permission option, select Not required – The pixel will always run and for the Data sale option, choose Data collected does not qualify as data sale.
6. Finally, click connect button in the top right corner to connect custom pixel.
7. Depending on your Shopify theme, you might have to make some adjustments. For more information, please refer to the video below.

<a href="https://leomeasure.com/shopify-datalayer-gtm/" target="_blank"><img src="images/play-png.png" width="100"/></a>
### 


## Events Included! ##
1. **view_item**
2. **view_item_list**
3. **select_item**
4. **add_to_cart**
5. **remove_from_cart**
6. **view_cart**
7. **view_item_list**
8. **begin_checkout**
9. **add_to_wishlist**
10. **add_payment_info**
11. **add_shopping_info**
12. **purchase**
13. **contact_form_submit**
14. **newsletter_signup**
15. **search**
16. **phone_number_click**
17. **email_click**
18. Logged customer and on the checkout page customer details included as **customer** object with dataLayer
19. **Event Parameters:** currency, value, transaction_id, coupon, shipping, vat, items, item_list_name, item_list_id
20. **Items Parameters** item_id, item_name, quantity, price, discount, item_brand, item_category, item_variant, sku, item_list_name, item_list_id

## Features ##
With all general event tracking it also tracks following special events 
1. DataLayer event prefix
2. Quick View Event Tracking (as **view_item**)
3. Mini Cart and Dropdown Cart, Cart Drawer Tracking (as **view_cart**)
4. Shopify Direct Checkout Tracking ( as **add_to_cart** & **begin_checkout**)
5. Sticky Cart, Sidebar Cart, etc Tracking ( as **add_to_cart**)
6. Shopify Ajax Search Tracking ( as **search** )
7. Events was tacked by **Ajax Response** so no data discrepancy for edge cases
8. No **jQuery**, no **3rd Party Scripet** was included, all code was written ES6 Object Oriented Way. Added proper error handling so that there is no JS error

## Testing ##
<a href="https://leomeasure.com/shopify-datalayer-gtm/#preview-testing-shopify-data-layer" target="_blank">Follow the Link For Details</a>


For more information, please watch the video below.

<a href="https://leomeasure.com/shopify-datalayer-gtm/" target="_blank"><img src="images/play-png.png" width="100"/></a>

