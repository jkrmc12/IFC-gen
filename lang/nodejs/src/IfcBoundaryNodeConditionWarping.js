
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcBoolean = require('./IfcBoolean')
const IfcLinearStiffnessMeasure = require('./IfcLinearStiffnessMeasure')
const IfcRotationalStiffnessMeasure = require('./IfcRotationalStiffnessMeasure')
const IfcWarpingMomentMeasure = require('./IfcWarpingMomentMeasure')
const IfcBoundaryNodeCondition = require('./IfcBoundaryNodeCondition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodeconditionwarping.htm
 */
module.exports = class IfcBoundaryNodeConditionWarping extends IfcBoundaryNodeCondition {
  
    constructor() {
        super()
        	this.WarpingStiffness = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessX))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessY))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessZ))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessX))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessY))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessZ))
		parameters.push(BaseIfc.toStepValue(this.WarpingStiffness))

        return parameters.join()
    }
}