
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcPreDefinedItem = require('./IfcPreDefinedItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpredefinedtextfont.htm
 */
module.exports = class IfcPreDefinedTextFont extends IfcPreDefinedItem {
  
    constructor(name) {
        super(name)
        
    }
}