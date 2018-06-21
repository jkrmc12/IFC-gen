
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcLinearForceMeasure = require('./IfcLinearForceMeasure')
const IfcLinearMomentMeasure = require('./IfcLinearMomentMeasure')
const IfcStructuralLoadStatic = require('./IfcStructuralLoadStatic')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadlinearforce.htm
 */
module.exports = class IfcStructuralLoadLinearForce extends IfcStructuralLoadStatic {
  
    constructor() {
        super()
        	this.LinearForceX = null  // optional
	this.LinearForceY = null  // optional
	this.LinearForceZ = null  // optional
	this.LinearMomentX = null  // optional
	this.LinearMomentY = null  // optional
	this.LinearMomentZ = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.LinearForceX))
		parameters.push(BaseIfc.toStepValue(this.LinearForceY))
		parameters.push(BaseIfc.toStepValue(this.LinearForceZ))
		parameters.push(BaseIfc.toStepValue(this.LinearMomentX))
		parameters.push(BaseIfc.toStepValue(this.LinearMomentY))
		parameters.push(BaseIfc.toStepValue(this.LinearMomentZ))

        return parameters.join()
    }
}