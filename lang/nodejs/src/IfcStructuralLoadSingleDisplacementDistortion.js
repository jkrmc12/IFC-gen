
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcPlaneAngleMeasure = require('./IfcPlaneAngleMeasure')
const IfcCurvatureMeasure = require('./IfcCurvatureMeasure')
const IfcStructuralLoadSingleDisplacement = require('./IfcStructuralLoadSingleDisplacement')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadsingledisplacementdistortion.htm
 */
module.exports = class IfcStructuralLoadSingleDisplacementDistortion extends IfcStructuralLoadSingleDisplacement {
  
    constructor() {
        super()
        	this.Distortion = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.Distortion))

        return parameters.join()
    }
}