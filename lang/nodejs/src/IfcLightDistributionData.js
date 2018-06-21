
const BaseIfc = require('./BaseIfc')
const IfcPlaneAngleMeasure = require('./IfcPlaneAngleMeasure')
const IfcLuminousIntensityDistributionMeasure = require('./IfcLuminousIntensityDistributionMeasure')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightdistributiondata.htm
 */
module.exports = class IfcLightDistributionData extends BaseIfc {
  
    constructor(mainPlaneAngle, secondaryPlaneAngle, luminousIntensity) {
        super()
		this.MainPlaneAngle = mainPlaneAngle
		this.SecondaryPlaneAngle = secondaryPlaneAngle
		this.LuminousIntensity = luminousIntensity

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.MainPlaneAngle))
		parameters.push(BaseIfc.toStepValue(this.SecondaryPlaneAngle))
		parameters.push(BaseIfc.toStepValue(this.LuminousIntensity))

        return parameters.join()
    }
}