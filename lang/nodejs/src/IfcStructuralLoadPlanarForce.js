
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcPlanarForceMeasure = require('./IfcPlanarForceMeasure')
const IfcStructuralLoadStatic = require('./IfcStructuralLoadStatic')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadplanarforce.htm
 */
module.exports = class IfcStructuralLoadPlanarForce extends IfcStructuralLoadStatic {
  
    constructor() {
        super()
        	this.PlanarForceX = null  // optional
	this.PlanarForceY = null  // optional
	this.PlanarForceZ = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.PlanarForceX))
		parameters.push(BaseIfc.toStepValue(this.PlanarForceY))
		parameters.push(BaseIfc.toStepValue(this.PlanarForceZ))

        return parameters.join()
    }
}