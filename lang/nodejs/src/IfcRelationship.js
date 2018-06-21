
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRoot = require('./IfcRoot')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelationship.htm
 */
module.exports = class IfcRelationship extends IfcRoot {
  
    constructor(globalId) {
        super(globalId)
        
    }
}