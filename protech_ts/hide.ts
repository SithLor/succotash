const swc = require("@swc/core");
const fs = require("fs");
const JavaScriptObfuscator = require('javascript-obfuscator');

namespace exec {
    export function _statements_2(code){return `'te' * ${code} * 'xt';`}
    export function _statements_3(code){return `'te' / ${code} / 'xt';`}
    export function _statements_4(code){return `'te' % ${code} % 'xt';`}
    export function _statements_5(code){return `'te' - ${code} - 'xt';`}
    export function _statements_6(code){return `'te' + ${code} + 'xt';`}
    export function _statements_7(code){return `'te' ^ ${code} ^ 'xt';`}
    export function _statements_8(code){return `'te' > ${code} > 'xt';`}
    export function _statements_9(code){return `'te' < ${code} < 'xt';`}
    export function _statements_10(code){return `'te' == ${code} == 'xt';`}
    export function _statements_11(code){return `'te' & ${code} & 'xt';`}
    export function _statements_12(code){return `'te' , ${code} , 'xt';`}
    export function _statements_13(code){return `'te' | ${code} | 'xt';`}
    export function _statements_14(code){return `'te' ? ${code} : 'xt';`}
    export function _statements_15(code){return `'te' in ${code} in 'xt';`}
    export function _statements_16(code){return `'te' instanceof ${code} instanceof 'xt';`}
    export function _function_1(code){return `eval(${code});`}
    export function _function_2(code){return `Function(${code})();`}
    export function _function_3(code){return `new Function()(${code});`}
    export function _function_5(code){return `open('javascript:${code}');`}
    export function _function_6(code){return `setTimeout(${code},0);`}
    export function _function_7(code){return `constructor.constructor(${code})();`}
    export function _function_8(code){return `Set.constructor("eval"+"${code}")();`}
    export function _varset_1(code){return `location='javascript:${code}';`}
    export function _arrayexec_1(code){return `top["eva"+"l"](${code});`}
    export function _arrayexec_2(code){return `[].filter.constructor(${code})();`}
    export function _class_1(code){return `class exec{constructor(){this.code=${code}};exec(){eval(this.code)}};new exec().exec();`}
    export function _class_2(code){return `class exec{constructor(){this.code=${code}};exec(){Function(this.code)()}};new exec().exec();`}
    export function _class_3(code){return `class exec{constructor(){this.code=${code}};exec(){new Function()(this.code)}};new exec().exec();`}
    export function _class_4(code){return `class exec{constructor(){eval(${code})}};new exec();`}
    export function _class_5(code){return `class exec{constructor(){Function(${code})()}};new exec();`}
    export function _class_6(code){return `class exec{constructor(){new Function()(${code})}};new exec();`}
}
function main(){
    const code = fs.readFileSync('./hide.js', 'utf8');
    const obfuscationResult = JavaScriptObfuscator.obfuscate(code, {
        
}