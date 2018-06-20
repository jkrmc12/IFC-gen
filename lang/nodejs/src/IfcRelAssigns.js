
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcObjectTypeEnum = require('./IfcObjectTypeEnum')
const IfcRelationship = require('./IfcRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelassigns.htm
 */
module.exports = class IfcRelAssigns extends IfcRelationship {
  
    constructor(globalId, relatedObjects) {
        super(globalId)
		this.RelatedObjects = relatedObjects

        	this.RelatedObjectsType = null  // optional

    }
}