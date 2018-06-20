
const BaseIfc = require('./BaseIfc')
const IfcBoundedCurve = require('./IfcBoundedCurve')
const IfcEdgeCurve = require('./IfcEdgeCurve')
const IfcConnectionGeometry = require('./IfcConnectionGeometry')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcconnectioncurvegeometry.htm
 */
module.exports = class IfcConnectionCurveGeometry extends IfcConnectionGeometry {
  
    constructor(curveOnRelatingElement) {
        super()
		this.CurveOnRelatingElement = curveOnRelatingElement

        	this.CurveOnRelatedElement = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.CurveOnRelatingElement))
		parameters.push(BaseIfc.toStepValue(this.CurveOnRelatedElement))

        return parameters.join()
    }
}