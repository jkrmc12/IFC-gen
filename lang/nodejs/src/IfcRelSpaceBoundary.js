
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalSpatialElement = require('./IfcExternalSpatialElement')
const IfcSpace = require('./IfcSpace')
const IfcElement = require('./IfcElement')
const IfcConnectionGeometry = require('./IfcConnectionGeometry')
const IfcPhysicalOrVirtualEnum = require('./IfcPhysicalOrVirtualEnum')
const IfcInternalOrExternalEnum = require('./IfcInternalOrExternalEnum')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary.htm
 */
module.exports = class IfcRelSpaceBoundary extends IfcRelConnects {
  
    constructor(globalId, relatingSpace, relatedBuildingElement, physicalOrVirtualBoundary, internalOrExternalBoundary) {
        super(globalId)
		this.RelatingSpace = relatingSpace
		this.RelatedBuildingElement = relatedBuildingElement
		this.PhysicalOrVirtualBoundary = physicalOrVirtualBoundary
		this.InternalOrExternalBoundary = internalOrExternalBoundary

        	this.ConnectionGeometry = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingSpace))
		parameters.push(BaseIfc.toStepValue(this.RelatedBuildingElement))
		parameters.push(BaseIfc.toStepValue(this.ConnectionGeometry))
		parameters.push(BaseIfc.toStepValue(this.PhysicalOrVirtualBoundary))
		parameters.push(BaseIfc.toStepValue(this.InternalOrExternalBoundary))

        return parameters.join()
    }
}