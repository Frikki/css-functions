/**
 * @fileoverview supportedProperty module
 * @author Frederik Krautwald
 */

import isPropertySupported from './isPropertySupported.js';

function supportedProperty(propertyNames) {
    let found;
    return [].map.call(
        propertyNames, function(propertyName) {
            if (!(found)) {
                found = isPropertySupported(propertyName);
                return found? propertyName: '';
            }
            return '';
        }
    ).join('');
}

export default supportedProperty;
