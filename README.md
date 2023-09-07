# GTM data Layer for Shopify ecommerce
## How to use: 
1. Go to theme edit and paste GTM tracking code right after `<head>` tag in `theme.liquid` file
2. Inside the `snippets` folder create a new file name `gtm-datalayer.liquid` file. Copy all of the code from `gtm-datalayer.liquid` code from this repository.
3. In the `theme.liquid` file after your gtm tracking code include `gtm-datalayer.liquid` file as `{% include 'gtm-datalayer' %}`
4. From shopify admin dashboard go to **Settings >> Checkout (Scroll Down) >> Additional scripts**. Copy all code from `checkout.liquid` from this repository to  `Additional scripts` field. Change the example GTM example tracking id **000-00000** to real GTM ID

### Details Video Is Coming Soon 
