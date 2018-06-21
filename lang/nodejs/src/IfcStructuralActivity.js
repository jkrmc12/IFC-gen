
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
const IfcRelDefinesByObject = require('./IfcRelDefinesByObject')
const IfcRelDefinesByType = require('./IfcRelDefinesByType')
const IfcRelDefinesByProperties = require('./IfcRelDefinesByProperties')
const IfcObjectPlacement = require('./IfcObjectPlacement')
const IfcProductRepresentation = require('./IfcProductRepresentation')
const IfcRelAssignsToProduct = require('./IfcRelAssignsToProduct')
const IfcStructuralLoad = require('./IfcStructuralLoad')
const IfcGlobalOrLocalEnum = require('./IfcGlobalOrLocalEnum')
const IfcRelConnectsStructuralActivity = require('./IfcRelConnectsStructuralActivity')
const IfcProduct = require('./IfcProduct')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralactivity.htm
 */
module.exports = class IfcStructuralActivity extends IfcProduct {
  
    constructor(globalId, appliedLoad, globalOrLocal) {
        super(globalId)
		this.AppliedLoad = appliedLoad
		this.GlobalOrLocal = globalOrLocal

        	this.AssignedToStructuralItem = null  // inverse

    }
}