window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
const storeCountryCode = window.localStorage.getItem('shopCountryCode');
const event_prefix = '';

if(window.location.href.includes('/checkouts/cn/')) {
  // tag manager 
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-000000');
  // end tag manger
  

  // add_payment_info event
  analytics.subscribe('payment_info_submitted', (event) => {
    const customerInfo = {
      customer: {
        first_name: event.data?.checkout?.billingAddress?.firstName,
        last_name: event.data?.checkout?.billingAddress?.lastName,
        email: event.data?.checkout?.email,
        phone: event.data?.checkout?.phone,
        address: event.data?.checkout?.billingAddress
      }
    }
    dataLayer.push(customerInfo);

    const dataLayerInfo = {
      event: event_prefix + 'add_payment_info',
      ecommerce: {
        transaction_id: event.data?.checkout?.order?.id,
        value: event.data?.checkout?.totalPrice?.amount,
        tax: event.data?.checkout?.totalTax?.amount,
        shipping: event.data?.checkout?.shippingLine?.price?.amount,
        currency: event.data?.checkout?.currencyCode,
        coupon: (event.data?.checkout?.discountApplications || []).map(discount => discount.title).join(','),
        items: (event.data?.checkout?.lineItems || []).map(item => ({ 
           item_id: 'shopify_' + storeCountryCode + '_' + (item.variant?.product?.id || '') + '_' + (item.variant?.id || ''),
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

    dataLayer.push({ ecommerce: null });
    dataLayer.push(dataLayerInfo);

     console.log('Event: add_payment_info', Object.assign(dataLayerInfo, customerInfo));
  });

  // add_shipping_info event
  analytics.subscribe('checkout_shipping_info_submitted', (event) => {

    const customerInfo = {
      customer: {
        first_name: event.data?.checkout?.billingAddress?.firstName,
        last_name: event.data?.checkout?.billingAddress?.lastName,
        email: event.data?.checkout?.email,
        phone: event.data?.checkout?.phone,
        address: event.data?.checkout?.billingAddress
      }
    }
    dataLayer.push(customerInfo);

    const dataLayerInfo = {
      event: event_prefix + 'add_shipping_info',
      ecommerce: {
        transaction_id: event.data?.checkout?.order?.id,
        value: event.data?.checkout?.totalPrice?.amount,
        tax: event.data?.checkout?.totalTax?.amount,
        shipping: event.data?.checkout?.shippingLine?.price?.amount,
        currency: event.data?.checkout?.currencyCode,
        coupon: (event.data?.checkout?.discountApplications || []).map(discount => discount.title).join(','),
        items: (event.data?.checkout?.lineItems || []).map(item => ({ 
           item_id: 'shopify_' + storeCountryCode + '_' + (item.variant?.product?.id || '') + '_' + (item.variant?.id || ''),
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

    dataLayer.push({ ecommerce: null });
    dataLayer.push(dataLayerInfo);

    console.log('Event: ' + event_prefix + 'add_shipping_info', Object.assign(dataLayerInfo, customerInfo));
  });



  // purchase event
  analytics.subscribe('checkout_completed', (event) => {
    const customerInfo = {
      customer: {
        first_name: event.data?.checkout?.billingAddress?.firstName,
        last_name: event.data?.checkout?.billingAddress?.lastName,
        email: event.data?.checkout?.email,
        phone: event.data?.checkout?.phone,
        address: event.data?.checkout?.billingAddress
      }
    }
    dataLayer.push(customerInfo);

    const dataLayerInfo = {
      event: event_prefix + 'purchase',
      ecommerce: {
        transaction_id: event.data?.checkout?.order?.id,
        value: event.data?.checkout?.totalPrice?.amount,
        tax: event.data?.checkout?.totalTax?.amount,
        shipping: event.data?.checkout?.shippingLine?.price?.amount,
        currency: event.data?.checkout?.currencyCode,
        coupon: (event.data?.checkout?.discountApplications || []).map(discount => discount.title).join(','),
        items: (event.data?.checkout?.lineItems || []).map(item => ({ 
           item_id: 'shopify_' + storeCountryCode + '_' + (item.variant?.product?.id || '') + '_' + (item.variant?.id || ''),
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

    dataLayer.push({ ecommerce: null });
    dataLayer.push(dataLayerInfo);

     console.log('Event: ' + event_prefix + 'purchase', Object.assign(dataLayerInfo, customerInfo));
  });
}
