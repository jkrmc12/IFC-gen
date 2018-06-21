
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
const IfcRelSpaceBoundary = require('./IfcRelSpaceBoundary')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelspaceboundary1stlevel.htm
 */
module.exports = class IfcRelSpaceBoundary1stLevel extends IfcRelSpaceBoundary {
  
    constructor(globalId, relatingSpace, relatedBuildingElement, physicalOrVirtualBoundary, internalOrExternalBoundary) {
        super(globalId,relatingSpace,relatedBuildingElement,physicalOrVirtualBoundary,internalOrExternalBoundary)
        	this.ParentBoundary = null  // optional
	this.InnerBoundaries = null  // inverse

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
		parameters.push(BaseIfc.toStepValue(this.ParentBoundary))

        return parameters.join()
    }
}