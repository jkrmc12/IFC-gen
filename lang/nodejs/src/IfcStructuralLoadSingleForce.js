
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcForceMeasure = require('./IfcForceMeasure')
const IfcTorqueMeasure = require('./IfcTorqueMeasure')
const IfcStructuralLoadStatic = require('./IfcStructuralLoadStatic')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforce.htm
 */
module.exports = class IfcStructuralLoadSingleForce extends IfcStructuralLoadStatic {
  
    constructor() {
        super()
        	this.ForceX = null  // optional
	this.ForceY = null  // optional
	this.ForceZ = null  // optional
	this.MomentX = null  // optional
	this.MomentY = null  // optional
	this.MomentZ = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.ForceX))
		parameters.push(BaseIfc.toStepValue(this.ForceY))
		parameters.push(BaseIfc.toStepValue(this.ForceZ))
		parameters.push(BaseIfc.toStepValue(this.MomentX))
		parameters.push(BaseIfc.toStepValue(this.MomentY))
		parameters.push(BaseIfc.toStepValue(this.MomentZ))

        return parameters.join()
    }
}