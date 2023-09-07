# GTM Data Layer for Shopify ecommerce
## Events Included! ##
1. **view_item**
2. **view_item_list**
3. **add_to_cart**
4. **remove_from_cart**
5. **view_cart**
6. **begin_checkout**
7. **purchase**
8. **newsletter_signup**
9. Logged customer and in the checkout page customer details included as **customer** object with dataLayer

## Special Features ##
With all general event tracking it also tack following special events 
1. Quick View Event Tracking (as **view_item**)
2. Mini Cart and Popup Up Cart Tracking (as **view_cart**)
3. Shopify Direct Checkout Tracking ( as **add_to_cart** & **begin_checkout**)
4. Cart Drawer and Sticky Cart, Sidebar Cart etc Tracaking ( as **add_to_cart**)
5. Event was tacked by **Ajax Response** so not data discrepancy for edge cases
6. No **jQuery**, no **3rd Party Scripet** was included, all code was written ES6 Object Oriented Way. Added proper error handling so that there is not JS error happening run time.

## How to use: 
1. Go to theme edit and paste GTM tracking code right after `<head>` tag in `theme.liquid` file
2. Inside the `snippets` folder create a new file name `gtm-datalayer.liquid` file. Copy all of the code from `gtm-datalayer.liquid` code from this repository.
3. In the `theme.liquid` file after your gtm tracking code include `gtm-datalayer.liquid` file as `{% include 'gtm-datalayer' %}`
4. From shopify admin dashboard go to **Settings >> Checkout (Scroll Down) >> Additional scripts**. Copy all code from `checkout.liquid` from this repository to  `Additional scripts` field. Change the example GTM example tracking id **000-00000** to real GTM ID

### Details Video Is Coming Soon 
