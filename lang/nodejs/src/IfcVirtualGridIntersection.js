
const BaseIfc = require('./BaseIfc')
const IfcGridAxis = require('./IfcGridAxis')
const IfcLengthMeasure = require('./IfcLengthMeasure')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcvirtualgridintersection.htm
 */
module.exports = class IfcVirtualGridIntersection extends BaseIfc {
  
    constructor(intersectingAxes, offsetDistances) {
        super()
		this.IntersectingAxes = intersectingAxes
		this.OffsetDistances = offsetDistances

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.IntersectingAxes))
		parameters.push(BaseIfc.toStepValue(this.OffsetDistances))

        return parameters.join()
    }
}