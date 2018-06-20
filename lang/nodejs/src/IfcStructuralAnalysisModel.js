
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
const IfcRelAssignsToGroup = require('./IfcRelAssignsToGroup')
const IfcRelServicesBuildings = require('./IfcRelServicesBuildings')
const IfcAnalysisModelTypeEnum = require('./IfcAnalysisModelTypeEnum')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcStructuralLoadGroup = require('./IfcStructuralLoadGroup')
const IfcStructuralResultGroup = require('./IfcStructuralResultGroup')
const IfcObjectPlacement = require('./IfcObjectPlacement')
const IfcSystem = require('./IfcSystem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralanalysismodel.htm
 */
module.exports = class IfcStructuralAnalysisModel extends IfcSystem {
  
    constructor(globalId, predefinedType) {
        super(globalId)
		this.PredefinedType = predefinedType

        	this.OrientationOf2DPlane = null  // optional
	this.LoadedBy = null  // optional
	this.HasResults = null  // optional
	this.SharedPlacement = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ObjectType))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.OrientationOf2DPlane))
		parameters.push(BaseIfc.toStepValue(this.LoadedBy))
		parameters.push(BaseIfc.toStepValue(this.HasResults))
		parameters.push(BaseIfc.toStepValue(this.SharedPlacement))

        return parameters.join()
    }
}