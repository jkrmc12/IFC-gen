
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcRatioMeasure = require('./IfcRatioMeasure')
const IfcStructuralLoadOrResult = require('./IfcStructuralLoadOrResult')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacereinforcementarea.htm
 */
module.exports = class IfcSurfaceReinforcementArea extends IfcStructuralLoadOrResult {
  
    constructor() {
        super()
        	this.SurfaceReinforcement1 = null  // optional
	this.SurfaceReinforcement2 = null  // optional
	this.ShearReinforcement = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.SurfaceReinforcement1))
		parameters.push(BaseIfc.toStepValue(this.SurfaceReinforcement2))
		parameters.push(BaseIfc.toStepValue(this.ShearReinforcement))

        return parameters.join()
    }
}