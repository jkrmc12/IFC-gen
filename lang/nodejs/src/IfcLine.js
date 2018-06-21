
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcVector = require('./IfcVector')
const IfcCurve = require('./IfcCurve')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcline.htm
 */
module.exports = class IfcLine extends IfcCurve {
  
    constructor(pnt, dir) {
        super()
		this.Pnt = pnt
		this.Dir = dir

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Pnt))
		parameters.push(BaseIfc.toStepValue(this.Dir))

        return parameters.join()
    }
}