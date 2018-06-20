
const BaseIfc = require('./BaseIfc')
const IfcRepresentationContext = require('./IfcRepresentationContext')
const IfcLabel = require('./IfcLabel')
const IfcRepresentationItem = require('./IfcRepresentationItem')
const IfcRepresentationMap = require('./IfcRepresentationMap')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcProductRepresentation = require('./IfcProductRepresentation')
const IfcRepresentation = require('./IfcRepresentation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstylemodel.htm
 */
module.exports = class IfcStyleModel extends IfcRepresentation {
  
    constructor(contextOfItems, items) {
        super(contextOfItems,items)
        
    }
}