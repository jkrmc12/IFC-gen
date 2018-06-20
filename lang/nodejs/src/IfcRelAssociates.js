
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcPropertyDefinition = require('./IfcPropertyDefinition')
const IfcRelationship = require('./IfcRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassociates.htm
 */
module.exports = class IfcRelAssociates extends IfcRelationship {
  
    constructor(globalId, relatedObjects) {
        super(globalId)
		this.RelatedObjects = relatedObjects

        
    }
}