
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcCurve = require('./IfcCurve')
const IfcBoolean = require('./IfcBoolean')
const IfcGrid = require('./IfcGrid')
const IfcVirtualGridIntersection = require('./IfcVirtualGridIntersection')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcgridaxis.htm
 */
module.exports = class IfcGridAxis extends BaseIfc {
  
    constructor(axisCurve, sameSense) {
        super()
		this.AxisCurve = axisCurve
		this.SameSense = sameSense

        	this.AxisTag = null  // optional
	this.PartOfW = null  // inverse
	this.PartOfV = null  // inverse
	this.PartOfU = null  // inverse
	this.HasIntersections = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.AxisTag))
		parameters.push(BaseIfc.toStepValue(this.AxisCurve))
		parameters.push(BaseIfc.toStepValue(this.SameSense))

        return parameters.join()
    }
}