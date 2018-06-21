
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelationship = require('./IfcRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreldefines.htm
 */
module.exports = class IfcRelDefines extends IfcRelationship {
  
    constructor(globalId) {
        super(globalId)
        
    }
}