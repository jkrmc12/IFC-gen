
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcBoolean = require('./IfcBoolean')
const IfcModulusOfSubgradeReactionMeasure = require('./IfcModulusOfSubgradeReactionMeasure')
const IfcBoundaryCondition = require('./IfcBoundaryCondition')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcboundaryfacecondition.htm
 */
module.exports = class IfcBoundaryFaceCondition extends IfcBoundaryCondition {
  
    constructor() {
        super()
        	this.TranslationalStiffnessByAreaX = null  // optional
	this.TranslationalStiffnessByAreaY = null  // optional
	this.TranslationalStiffnessByAreaZ = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByAreaX))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByAreaY))
		parameters.push(BaseIfc.toStepValue(this.TranslationalStiffnessByAreaZ))

        return parameters.join()
    }
}