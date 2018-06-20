
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcBoundedCurve = require('./IfcBoundedCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpolyline.htm
 */
module.exports = class IfcPolyline extends IfcBoundedCurve {
  
    constructor(points) {
        super()
		this.Points = points

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Points))

        return parameters.join()
    }
}