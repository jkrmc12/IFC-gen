
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCurve = require('./IfcCurve')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcLogical = require('./IfcLogical')
const IfcDirection = require('./IfcDirection')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcoffsetcurve3d.htm
 */
module.exports = class IfcOffsetCurve3D extends IfcCurve {
  
    constructor(basisCurve, distance, selfIntersect, refDirection) {
        super()
		this.BasisCurve = basisCurve
		this.Distance = distance
		this.SelfIntersect = selfIntersect
		this.RefDirection = refDirection

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.BasisCurve))
		parameters.push(BaseIfc.toStepValue(this.Distance))
		parameters.push(BaseIfc.toStepValue(this.SelfIntersect))
		parameters.push(BaseIfc.toStepValue(this.RefDirection))

        return parameters.join()
    }
}