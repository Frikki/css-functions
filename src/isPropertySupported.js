/**
 * @fileoverview isPropertySupported
 * @author Frederik Krautwald
 */

const element = document.createElement('div');
let camelCased;

function nativeSupport(property, value) {
    if ('CSS' in window && window.CSS.supports) {
        return window.CSS.supports(property, value)
    }
    if (window.supportsCSS) return window.supportsCSS(property, value);
    return false;
}

function toCamelCase(word) {
    return word.replace(
        /-([a-z]|[0-9])/ig, function(match, char) {
            return (char + '').toUpperCase();
        }
    )
}

function canSetProperty(property, value) {
    let support = camelCased in element.style;
    element.style.cssText = property + ':' + value;
    return support && element.style.cssText !== '';
}

function isPropertySupported(property, optValue = 'inherit') {
    let isSupported = nativeSupport(property, optValue);
    if (isSupported) return isSupported;

    camelCased = toCamelCase(property);
    const capitalized = camelCased.charAt(0).toUpperCase()
        + camelCased.slice(1);
    isSupported = canSetProperty(property, optValue);
    const prefixes = ['Webkit', 'Moz', 'O', 'ms'];
    let idx = prefixes.length;
    while (!(isSupported) && idx--) {
        const prefixed = '-' + prefixes[idx].toLowerCase() + '-' + property;
        isSupported = nativeSupport(prefixed, optValue);
        if (!(isSupported)) {
            camelCased = prefixes[idx] + capitalized;
            isSupported = canSetProperty(prefixed, optValue);
        }
    }

    return isSupported;
}

export default isPropertySupported;
