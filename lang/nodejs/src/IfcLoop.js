
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcTopologicalRepresentationItem = require('./IfcTopologicalRepresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcloop.htm
 */
module.exports = class IfcLoop extends IfcTopologicalRepresentationItem {
  
    constructor() {
        super()
        
    }
    getStepParameters() {
        const parameters = []
    
        return parameters.join()
    }
}