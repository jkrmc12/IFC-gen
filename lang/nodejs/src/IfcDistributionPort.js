
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
const IfcRelConnectsPortToElement = require('./IfcRelConnectsPortToElement')
const IfcRelConnectsPorts = require('./IfcRelConnectsPorts')
const IfcFlowDirectionEnum = require('./IfcFlowDirectionEnum')
const IfcDistributionPortTypeEnum = require('./IfcDistributionPortTypeEnum')
const IfcDistributionSystemEnum = require('./IfcDistributionSystemEnum')
const IfcPort = require('./IfcPort')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdistributionport.htm
 */
module.exports = class IfcDistributionPort extends IfcPort {
  
    constructor(globalId) {
        super(globalId)
        	this.FlowDirection = null  // optional
	this.PredefinedType = null  // optional
	this.SystemType = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.FlowDirection))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.SystemType))

        return parameters.join()
    }
}