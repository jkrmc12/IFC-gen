
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcBoolean = require('./IfcBoolean')
const IfcLinearStiffnessMeasure = require('./IfcLinearStiffnessMeasure')
const IfcRotationalStiffnessMeasure = require('./IfcRotationalStiffnessMeasure')
const IfcBoundaryCondition = require('./IfcBoundaryCondition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundarynodecondition.htm
 */
module.exports = class IfcBoundaryNodeCondition extends IfcBoundaryCondition {
  
    constructor() {
        super()
        	this.TranslationalStiffnessX = null  // optional
	this.TranslationalStiffnessY = null  // optional
	this.TranslationalStiffnessZ = null  // optional
	this.RotationalStiffnessX = null  // optional
	this.RotationalStiffnessY = null  // optional
	this.RotationalStiffnessZ = null  // optional

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

        return parameters.join()
    }
}