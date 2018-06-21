
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcBoolean = require('./IfcBoolean')
const IfcModulusOfLinearSubgradeReactionMeasure = require('./IfcModulusOfLinearSubgradeReactionMeasure')
const IfcModulusOfRotationalSubgradeReactionMeasure = require('./IfcModulusOfRotationalSubgradeReactionMeasure')
const IfcBoundaryCondition = require('./IfcBoundaryCondition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryedgecondition.htm
 */
module.exports = class IfcBoundaryEdgeCondition extends IfcBoundaryCondition {
  
    constructor() {
        super()
        	this.TranslationalStiffnessByLengthX = null  // optional
	this.TranslationalStiffnessByLengthY = null  // optional
	this.TranslationalStiffnessByLengthZ = null  // optional
	this.RotationalStiffnessByLengthX = null  // optional
	this.RotationalStiffnessByLengthY = null  // optional
	this.RotationalStiffnessByLengthZ = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByLengthX))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByLengthY))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByLengthZ))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessByLengthX))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessByLengthY))
		parameters.push(BaseIfc.toStepValue(this.RotationalStiffnessByLengthZ))

        return parameters.join()
    }
}