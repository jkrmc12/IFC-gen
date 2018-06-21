
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
const IfcRelContainedInSpatialStructure = require('./IfcRelContainedInSpatialStructure')
const IfcRelServicesBuildings = require('./IfcRelServicesBuildings')
const IfcRelReferencedInSpatialStructure = require('./IfcRelReferencedInSpatialStructure')
const IfcElementCompositionEnum = require('./IfcElementCompositionEnum')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcSpatialStructureElement = require('./IfcSpatialStructureElement')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcbuildingstorey.htm
 */
module.exports = class IfcBuildingStorey extends IfcSpatialStructureElement {
  
    constructor(globalId) {
        super(globalId)
        	this.Elevation = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.LongName))
		parameters.push(BaseIfc.toStepValue(this.CompositionType))
		parameters.push(BaseIfc.toStepValue(this.Elevation))

        return parameters.join()
    }
}