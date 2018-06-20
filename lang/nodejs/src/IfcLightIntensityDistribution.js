
const BaseIfc = require('./BaseIfc')
const IfcLightDistributionCurveEnum = require('./IfcLightDistributionCurveEnum')
const IfcLightDistributionData = require('./IfcLightDistributionData')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightintensitydistribution.htm
 */
module.exports = class IfcLightIntensityDistribution extends BaseIfc {
  
    constructor(lightDistributionCurve, distributionData) {
        super()
		this.LightDistributionCurve = lightDistributionCurve
		this.DistributionData = distributionData

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.LightDistributionCurve))
		parameters.push(BaseIfc.toStepValue(this.DistributionData))

        return parameters.join()
    }
}