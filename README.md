# Ultimate GTM Data Layer for Shopify ecommerce
Join the WhatsApp Group for Support, Suggestions, and Bug Reports:

<a href="https://chat.whatsapp.com/CYI4WpjjckA2CsTrw7IlIB" target="_blank"><img src="images/whatsapp.png" width="150"/></a>

## How to use: 
1. Go to theme edit and paste GTM tracking code right after `<head>` tag in `theme.liquid` file
2. Inside the `snippets` folder create a new file as `ultimate-datalayer`. Copy all of the code from `ultimate-datalayer.liquid` of this repository to sinppet file `ultimate-datalayer.liquid`.
3. In the `theme.liquid` file after your gtm tracking code include `ultimate-datalayer.liquid` file as `{% include 'ultimate-datalayer' %}`
4. From shopify admin dashboard go to **Settings >> Checkout (Scroll Down) >> Additional scripts**. Copy all code from `checkout.liquid` from this repository to  `Additional scripts` field. Change the example GTM example tracking id **000-00000** to real GTM ID
5. Depending on your Shopify theme, you might have to make some adjustments. For more information, please refer to the video below.

<a href="https://youtu.be/WBjmUXQ9dIs" target="_blank"><img src="images/play-png.png" width="100"/></a>
### 


## Events Included! ##
1. **view_item**
2. **view_item_list**
3. **add_to_cart**
4. **remove_from_cart**
5. **view_cart**
6. **begin_checkout**
7. **add_to_wishlist**
8. **purchase**
9. **newsletter_signup**
10. **search**
11. **phone_number_click**
12. **email_click**
13. Logged customer and in the checkout page customer details included as **customer** object with dataLayer
14. **Event Paramiters:** currency, value, transaction_id, coupon, shipping, vat, items, item_list_name, item_list_id
15. **Items Paramiters** item_id, item_name, quantity, price, discount, item_brand, item_category, item_variant, sku, item_list_name, item_list_id

## Features ##
With all general event tracking it also tracks following special events 
1. DataLayer event prefix
2. Quick View Event Tracking (as **view_item**)
3. Mini Cart and Dropdown Cart, Cart Drawer Tracking (as **view_cart**)
4. Shopify Direct Checkout Tracking ( as **add_to_cart** & **begin_checkout**)
5. Sticky Cart, Sidebar Cart etc Tracaking ( as **add_to_cart**)
6. Shopify Ajax Search Tracking ( as **search** )
7. Event was tacked by **Ajax Response** so not data discrepancy for edge cases
8. No **jQuery**, no **3rd Party Scripet** was included, all code was written ES6 Object Oriented Way. Added proper error handling so that there is not JS error


For more information, please watch the video below.

<a href="https://youtu.be/WBjmUXQ9dIs" target="_blank"><img src="images/play-png.png" width="100"/></a>

