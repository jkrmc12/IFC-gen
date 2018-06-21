
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
const IfcRepresentationMap = require('./IfcRepresentationMap')
const IfcRelAssignsToProduct = require('./IfcRelAssignsToProduct')
const IfcDoorTypeEnum = require('./IfcDoorTypeEnum')
const IfcDoorTypeOperationEnum = require('./IfcDoorTypeOperationEnum')
const IfcBoolean = require('./IfcBoolean')
const IfcBuildingElementType = require('./IfcBuildingElementType')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdoortype.htm
 */
module.exports = class IfcDoorType extends IfcBuildingElementType {
  
    constructor(globalId, predefinedType, operationType) {
        super(globalId)
		this.PredefinedType = predefinedType
		this.OperationType = operationType

        	this.ParameterTakesPrecedence = null  // optional
	this.UserDefinedOperationType = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ApplicableOccurrence))
		parameters.push(BaseIfc.toStepValue(this.HasPropertySets))
		parameters.push(BaseIfc.toStepValue(this.RepresentationMaps))
		parameters.push(BaseIfc.toStepValue(this.Tag))
		parameters.push(BaseIfc.toStepValue(this.ElementType))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.OperationType))
		parameters.push(BaseIfc.toStepValue(this.ParameterTakesPrecedence))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedOperationType))

        return parameters.join()
    }
}