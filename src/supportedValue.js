/**
 * @fileoverview supportedValue module
 * @author Frederik Krautwald
 */

import isPropertySupported from './isPropertySupported.js';

function supportedValue(property, values) {
    let found;
    return [].map.call(
        values, function(value) {
            if (!(found)) {
                found = isPropertySupported(property, value);
                return found? value: '';
            }
            return '';
        }
    ).join('');
}

export default supportedValue;
