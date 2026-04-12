import dividers from './Ar/divider';
import buttons from './Ar/buttons';
import loading from './Ar/loading';
import empty from './Ar/empty';
import locations from './Ar/locations';
import pagesNames from './Ar/pagesNames';
import forms from './Ar/forms';
import address from './Ar/address';
import messagesAndAlerts from './Ar/messagesAndAlerts';
import errorMessages from './Ar/errorMessages';
import tutorial from './Ar/tutorial';
import ordersAndNotifications from './Ar/ordersAndNotifications';
import products from './Ar/products';
import profile from './Ar/profile';
import categories from './Ar/Pages/categories';
import auth from './Ar/Pages/auth';
import churches from './Ar/Pages/churches';
import orders from './Ar/Pages/orders';
import posts from './Ar/Pages/posts';
import saints from './Ar/Pages/saints';
import calender from './Ar/Pages/calender';
import fieldsAndValidations from './Ar/fieldsAndValidations';
import others from './Ar/others';
import functions from './Ar/functions';
import sidebar from './Ar/sidebar/index';
import youtubePage from './Ar/Pages/youtube';
import youtube from './Ar/thirdPartyAPI/youtube';
import bible from './Ar/thirdPartyAPI/bible';
import {Errors, Label} from './Ar/Components';

export default {
  lang: "ar",
  translations:{
    'voiceOfWisdom':'صوت الحكمة',
    ...dividers,
    ...Errors,
    ...Label,
    ...buttons,
    ...loading,
    ...empty,
    ...locations,
    ...pagesNames,
    ...address,
    ...functions,
    ...forms,
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
  isDefault: false
};
