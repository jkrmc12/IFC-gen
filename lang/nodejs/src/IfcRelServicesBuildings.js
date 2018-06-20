
const BaseIfc = require('./BaseIfc')
const IfcGloballyUniqueId = require('./IfcGloballyUniqueId')
const IfcOwnerHistory = require('./IfcOwnerHistory')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcSystem = require('./IfcSystem')
const IfcSpatialElement = require('./IfcSpatialElement')
const IfcRelConnects = require('./IfcRelConnects')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcrelservicesbuildings.htm
 */
module.exports = class IfcRelServicesBuildings extends IfcRelConnects {
  
    constructor(globalId, relatingSystem, relatedBuildings) {
        super(globalId)
		this.RelatingSystem = relatingSystem
		this.RelatedBuildings = relatedBuildings

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.GlobalId))
		parameters.push(BaseIfc.toStepValue(this.OwnerHistory))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingSystem))
		parameters.push(BaseIfc.toStepValue(this.RelatedBuildings))

        return parameters.join()
    }
}