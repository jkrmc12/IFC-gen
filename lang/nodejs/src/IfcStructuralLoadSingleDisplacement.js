
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcPlaneAngleMeasure = require('./IfcPlaneAngleMeasure')
const IfcStructuralLoadStatic = require('./IfcStructuralLoadStatic')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacement.htm
 */
module.exports = class IfcStructuralLoadSingleDisplacement extends IfcStructuralLoadStatic {
  
    constructor() {
        super()
        	this.DisplacementX = null  // optional
	this.DisplacementY = null  // optional
	this.DisplacementZ = null  // optional
	this.RotationalDisplacementRX = null  // optional
	this.RotationalDisplacementRY = null  // optional
	this.RotationalDisplacementRZ = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DisplacementX))
		parameters.push(BaseIfc.toStepValue(this.DisplacementY))
		parameters.push(BaseIfc.toStepValue(this.DisplacementZ))
		parameters.push(BaseIfc.toStepValue(this.RotationalDisplacementRX))
		parameters.push(BaseIfc.toStepValue(this.RotationalDisplacementRY))
		parameters.push(BaseIfc.toStepValue(this.RotationalDisplacementRZ))

        return parameters.join()
    }
}