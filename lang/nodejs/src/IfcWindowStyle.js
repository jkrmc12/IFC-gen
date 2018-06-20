
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
const IfcWindowStyleConstructionEnum = require('./IfcWindowStyleConstructionEnum')
const IfcWindowStyleOperationEnum = require('./IfcWindowStyleOperationEnum')
const IfcBoolean = require('./IfcBoolean')
const IfcTypeProduct = require('./IfcTypeProduct')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcwindowstyle.htm
 */
module.exports = class IfcWindowStyle extends IfcTypeProduct {
  
    constructor(globalId, constructionType, operationType, parameterTakesPrecedence, sizeable) {
        super(globalId)
		this.ConstructionType = constructionType
		this.OperationType = operationType
		this.ParameterTakesPrecedence = parameterTakesPrecedence
		this.Sizeable = sizeable

        
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
		parameters.push(BaseIfc.toStepValue(this.ConstructionType))
		parameters.push(BaseIfc.toStepValue(this.OperationType))
		parameters.push(BaseIfc.toStepValue(this.ParameterTakesPrecedence))
		parameters.push(BaseIfc.toStepValue(this.Sizeable))

        return parameters.join()
    }
}