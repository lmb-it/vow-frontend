import dividers from './En/divider';
import buttons from './En/buttons';
import loading from './En/loading';
import empty from './En/empty';
import locations from './En/locations';
import pagesNames from './En/pagesNames';
import address from './En/address';
import forms from './En/forms';
import messagesAndAlerts from './En/messagesAndAlerts';
import errorMessages from './En/errorMessages';
import tutorial from './En/tutorial';
import ordersAndNotifications from './En/ordersAndNotifications';
import products from './En/products';
import profile from './En/profile';
import categories from './En/Pages/categories';
import auth from './En/Pages/auth';
import churches from './En/Pages/churches';
import orders from './En/Pages/orders';
import posts from './En/Pages/posts';
import saints from './En/Pages/saints';
import calender from './En/Pages/calender';
import fieldsAndValidations from './En/fieldsAndValidations';
import others from './En/others';
import functions from './En/functions';
import sidebar from './En/sidebar/index';
import youtubePage from './En/Pages/youtube';
import bible from './En/thirdPartyAPI/bible';
import youtube from './En/thirdPartyAPI/youtube';
import {Errors, Labels} from "./En/Components";

export default {
  lang: "en",
  translations: {
    'voiceOfWisdom':'Voice Of Wisdom',
    ...dividers,
    ...Errors,
    ...Labels,
    ...buttons,
    ...loading,
    ...empty,
    ...locations,
    ...forms,
    ...pagesNames,
    ...address,
    ...functions,
    ...messagesAndAlerts,
    ...errorMessages,
    ...tutorial,
    ...ordersAndNotifications,
    ...products,
    ...profile,
    ...categories,
    ...auth,
    ...orders,
    ...posts,
    ...saints,
    ...calender,
    ...fieldsAndValidations,
    ...youtube,
    ...bible,
    ...churches,
    ...others,
    ...sidebar,
    ...youtubePage,
  },
  isDefault: true
};
