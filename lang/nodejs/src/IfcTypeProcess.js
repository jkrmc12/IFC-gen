
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRelAssigns = require('./IfcRelAssigns')
const IfcRelNests = require('./IfcRelNests')
const IfcRelDeclares = require('./IfcRelDeclares')
const IfcRelAggregates = require('./IfcRelAggregates')
const IfcRelAssociates = require('./IfcRelAssociates')
const IfcIdentifier = require('./IfcIdentifier')
const IfcPropertySetDefinition = require('./IfcPropertySetDefinition')
const IfcRelDefinesByType = require('./IfcRelDefinesByType')
const IfcRelAssignsToProcess = require('./IfcRelAssignsToProcess')
const IfcTypeObject = require('./IfcTypeObject')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctypeprocess.htm
 */
module.exports = class IfcTypeProcess extends IfcTypeObject {
  
    constructor(globalId) {
        super(globalId)
        	this.Identification = null  // optional
	this.LongDescription = null  // optional
	this.ProcessType = null  // optional
	this.OperatesOn = null  // inverse

    }
}