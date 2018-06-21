
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
const IfcReinforcingMeshTypeEnum = require('./IfcReinforcingMeshTypeEnum')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcAreaMeasure = require('./IfcAreaMeasure')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcPlaneAngleMeasure = require('./IfcPlaneAngleMeasure')
const IfcReinforcingElementType = require('./IfcReinforcingElementType')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingmeshtype.htm
 */
module.exports = class IfcReinforcingMeshType extends IfcReinforcingElementType {
  
    constructor(globalId, predefinedType) {
        super(globalId)
		this.PredefinedType = predefinedType

        	this.MeshLength = null  // optional
	this.MeshWidth = null  // optional
	this.LongitudinalBarNominalDiameter = null  // optional
	this.TransverseBarNominalDiameter = null  // optional
	this.LongitudinalBarCrossSectionArea = null  // optional
	this.TransverseBarCrossSectionArea = null  // optional
	this.LongitudinalBarSpacing = null  // optional
	this.TransverseBarSpacing = null  // optional
	this.BendingShapeCode = null  // optional
	this.BendingParameters = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.MeshLength))
		parameters.push(BaseIfc.toStepValue(this.MeshWidth))
		parameters.push(BaseIfc.toStepValue(this.LongitudinalBarNominalDiameter))
		parameters.push(BaseIfc.toStepValue(this.TransverseBarNominalDiameter))
		parameters.push(BaseIfc.toStepValue(this.LongitudinalBarCrossSectionArea))
		parameters.push(BaseIfc.toStepValue(this.TransverseBarCrossSectionArea))
		parameters.push(BaseIfc.toStepValue(this.LongitudinalBarSpacing))
		parameters.push(BaseIfc.toStepValue(this.TransverseBarSpacing))
		parameters.push(BaseIfc.toStepValue(this.BendingShapeCode))
		parameters.push(BaseIfc.toStepValue(this.BendingParameters))

        return parameters.join()
    }
}