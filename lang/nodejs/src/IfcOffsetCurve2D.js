
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCurve = require('./IfcCurve')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcLogical = require('./IfcLogical')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoffsetcurve2d.htm
 */
module.exports = class IfcOffsetCurve2D extends IfcCurve {
  
    constructor(basisCurve, distance, selfIntersect) {
        super()
		this.BasisCurve = basisCurve
		this.Distance = distance
		this.SelfIntersect = selfIntersect

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BasisCurve))
		parameters.push(BaseIfc.toStepValue(this.Distance))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))

        return parameters.join()
    }
}