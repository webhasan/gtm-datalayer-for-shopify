const event_prefix = 'leomeasure_';
const formattedItemId = true;
const GTM_container_url = 'https://www.googletagmanager.com';
const GTM_container_id = 'GTM-K9W894CT';


let storeCountryCode = window.localStorage.getItem('shopCountryCode');
storeCountryCode = storeCountryCode || 'US';
window.dataLayer = window.dataLayer || [];
function gtag() {
    dataLayer.push(arguments);
}

if (window.location.href.includes('/checkouts/')) {
    // tag manager 
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src = GTM_container_url + '/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', GTM_container_id);
  
    analytics.subscribe('page_viewed', (event) => {
        window.dataLayer.push({
          event: 'page_view',
          page_location: event.context.document.location.href,   
        });
    });
    // end tag manger


    // DataLayer Events
    analytics.subscribe('payment_info_submitted', (event) => ecommerceDataLayer('add_payment_info', event));

    analytics.subscribe('checkout_shipping_info_submitted', (event) => ecommerceDataLayer('add_shipping_info', event));

    analytics.subscribe('checkout_completed', (event) => ecommerceDataLayer('purchase', event));

}


async function sha256Hash(value) {
    const encoder = new TextEncoder();
    const data = encoder.encode(value);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedValue = hashArray.map(byte => ('00' + byte.toString(16)).slice(-2)).join('');
    return hashedValue;
}

async function ecommerceDataLayer(gtm_event_name, event) {  
    let hash_email;
    let hash_phone;
    const phone = event.data?.checkout?.phone;
    const email = event.data?.checkout?.email;

    if (phone) {
        hash_phone = await sha256Hash(phone);
    }

    if (email) {
        hash_email = await sha256Hash(email);
    }


    const customerInfo = {
        customer: {
            first_name: event.data?.checkout?.billingAddress?.firstName,
            last_name: event.data?.checkout?.billingAddress?.lastName,
            email: email,
            hash_email: hash_email,
            phone: phone,
            hash_phone: hash_phone,
            address: event.data?.checkout?.billingAddress
        }
    }
    dataLayer.push(customerInfo);

    const dataLayerInfo = {
        event: event_prefix + gtm_event_name,
        ecommerce: {
            transaction_id: event.data?.checkout?.order?.id,
            value: event.data?.checkout?.totalPrice?.amount,
            tax: event.data?.checkout?.totalTax?.amount,
            shipping: event.data?.checkout?.shippingLine?.price?.amount,
            currency: event.data?.checkout?.currencyCode,
            coupon: (event.data?.checkout?.discountApplications || []).map(discount => discount.title).join(','),
            items: (event.data?.checkout?.lineItems || []).map(item => ({
                item_id: formattedItemId ? 'shopify_' + storeCountryCode + '_' + (item.variant?.product?.id || '') + '_' + (item.variant?.id || '') : item.variant?.product?.id,
                product_id: item.variant?.product?.id,
                variant_id: item.variant?.id,
                item_name: item.title,
                coupon: item.discountAllocations?.discountApplication?.title,
                discount: item.discountAllocations?.amount?.amount,
                item_variant: item.variant?.title,
                price: item.variant?.price?.amount,
                quantity: item.quantity,
                item_brand: item.variant?.product?.vendor,
                item_category: item.variant?.product?.type

            }))
        }
    }

    dataLayer.push({
        ecommerce: null
    });
    dataLayer.push(dataLayerInfo);

    const css1 = 'background: red; color: #fff; font-size: normal; border-radius: 3px 0 0 3px; padding: 3px 4px;';
    const css2 = 'background-color: blue; color: #fff; font-size: normal; border-radius: 0 3px 3px 0; padding: 3px 4px;';
    
    console.log(
      '%cGTM Event:%c' + event_prefix + gtm_event_name, css1, css2, Object.assign({}, dataLayerInfo, customerInfo)
    );
}
