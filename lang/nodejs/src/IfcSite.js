
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
const IfcCompoundPlaneAngleMeasure = require('./IfcCompoundPlaneAngleMeasure')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcPostalAddress = require('./IfcPostalAddress')
const IfcSpatialStructureElement = require('./IfcSpatialStructureElement')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsite.htm
 */
module.exports = class IfcSite extends IfcSpatialStructureElement {
  
    constructor(globalId) {
        super(globalId)
        	this.RefLatitude = null  // optional
	this.RefLongitude = null  // optional
	this.RefElevation = null  // optional
	this.LandTitleNumber = null  // optional
	this.SiteAddress = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.RefLatitude))
		parameters.push(BaseIfc.toStepValue(this.RefLongitude))
		parameters.push(BaseIfc.toStepValue(this.RefElevation))
		parameters.push(BaseIfc.toStepValue(this.LandTitleNumber))
		parameters.push(BaseIfc.toStepValue(this.SiteAddress))

        return parameters.join()
    }
}