/**
 * @fileoverview supportedDeclaration module.
 * @author Frederik Krautwald
 */

import supportedProperty from './supportedProperty.js';
import supportedValue from './supportedValue.js';

function supportedDeclaration(properties, values) {
    const declaration = {};
    const property = supportedProperty(properties);
    if (!!(property)) {
        declaration[property] = supportedValue(property, values);
    }
    return declaration;
}

export default supportedDeclaration;
