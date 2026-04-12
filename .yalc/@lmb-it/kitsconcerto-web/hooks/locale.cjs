'use strict';

var React = require('react');
var index_web = require('../contexts/Locale/index.web.cjs');

const useLanguage = () => React.useContext(index_web.LocaleContext);

exports.useLanguage = useLanguage;
//# sourceMappingURL=locale.cjs.map
