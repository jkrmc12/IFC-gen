
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcLoop = require('./IfcLoop')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolyloop.htm
 */
module.exports = class IfcPolyLoop extends IfcLoop {
  
    constructor(polygon) {
        super()
		this.Polygon = polygon

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Polygon))

        return parameters.join()
    }
}