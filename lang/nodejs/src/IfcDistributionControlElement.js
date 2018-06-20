
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
const IfcIdentifier = require('./IfcIdentifier')
const IfcRelFillsElement = require('./IfcRelFillsElement')
const IfcRelConnectsElements = require('./IfcRelConnectsElements')
const IfcRelInterferesElements = require('./IfcRelInterferesElements')
const IfcRelProjectsElement = require('./IfcRelProjectsElement')
const IfcRelReferencedInSpatialStructure = require('./IfcRelReferencedInSpatialStructure')
const IfcRelVoidsElement = require('./IfcRelVoidsElement')
const IfcRelConnectsWithRealizingElements = require('./IfcRelConnectsWithRealizingElements')
const IfcRelSpaceBoundary = require('./IfcRelSpaceBoundary')
const IfcRelContainedInSpatialStructure = require('./IfcRelContainedInSpatialStructure')
const IfcRelCoversBldgElements = require('./IfcRelCoversBldgElements')
const IfcRelConnectsPortToElement = require('./IfcRelConnectsPortToElement')
const IfcRelFlowControlElements = require('./IfcRelFlowControlElements')
const IfcDistributionElement = require('./IfcDistributionElement')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributioncontrolelement.htm
 */
module.exports = class IfcDistributionControlElement extends IfcDistributionElement {
  
    constructor(globalId) {
        super(globalId)
        	this.AssignedToFlowElement = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.ObjectPlacement))
		parameters.push(BaseIfc.toStepValue(this.Representation))
		parameters.push(BaseIfc.toStepValue(this.Tag))

        return parameters.join()
    }
}