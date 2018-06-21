
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
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcAreaMeasure = require('./IfcAreaMeasure')
const IfcReinforcingBarTypeEnum = require('./IfcReinforcingBarTypeEnum')
const IfcReinforcingBarSurfaceEnum = require('./IfcReinforcingBarSurfaceEnum')
const IfcReinforcingElement = require('./IfcReinforcingElement')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcingbar.htm
 */
module.exports = class IfcReinforcingBar extends IfcReinforcingElement {
  
    constructor(globalId) {
        super(globalId)
        	this.NominalDiameter = null  // optional
	this.CrossSectionArea = null  // optional
	this.BarLength = null  // optional
	this.PredefinedType = null  // optional
	this.BarSurface = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.SteelGrade))
		parameters.push(BaseIfc.toStepValue(this.NominalDiameter))
		parameters.push(BaseIfc.toStepValue(this.CrossSectionArea))
		parameters.push(BaseIfc.toStepValue(this.BarLength))
		parameters.push(BaseIfc.toStepValue(this.PredefinedType))
		parameters.push(BaseIfc.toStepValue(this.BarSurface))

        return parameters.join()
    }
}