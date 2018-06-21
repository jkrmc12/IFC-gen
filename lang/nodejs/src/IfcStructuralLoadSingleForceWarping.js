
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcForceMeasure = require('./IfcForceMeasure')
const IfcTorqueMeasure = require('./IfcTorqueMeasure')
const IfcWarpingMomentMeasure = require('./IfcWarpingMomentMeasure')
const IfcStructuralLoadSingleForce = require('./IfcStructuralLoadSingleForce')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingleforcewarping.htm
 */
module.exports = class IfcStructuralLoadSingleForceWarping extends IfcStructuralLoadSingleForce {
  
    constructor() {
        super()
        	this.WarpingMoment = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.WarpingMoment))

        return parameters.join()
    }
}