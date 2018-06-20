
const BaseIfc = require('./BaseIfc')
const IfcRepresentationContext = require('./IfcRepresentationContext')
const IfcLabel = require('./IfcLabel')
const IfcRepresentationItem = require('./IfcRepresentationItem')
const IfcRepresentationMap = require('./IfcRepresentationMap')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcProductRepresentation = require('./IfcProductRepresentation')
const IfcStyleModel = require('./IfcStyleModel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstyledrepresentation.htm
 */
module.exports = class IfcStyledRepresentation extends IfcStyleModel {
  
    constructor(contextOfItems, items) {
        super(contextOfItems,items)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ContextOfItems))
		parameters.push(BaseIfc.toStepValue(this.RepresentationIdentifier))
		parameters.push(BaseIfc.toStepValue(this.RepresentationType))
		parameters.push(BaseIfc.toStepValue(this.Items))

        return parameters.join()
    }
}