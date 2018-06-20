
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLabel = require('./IfcLabel')
const IfcColourRgb = require('./IfcColourRgb')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcReal = require('./IfcReal')
const IfcLightSource = require('./IfcLightSource')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcepositional.htm
 */
module.exports = class IfcLightSourcePositional extends IfcLightSource {
  
    constructor(lightColour, position, radius, constantAttenuation, distanceAttenuation, quadricAttenuation) {
        super(lightColour)
		this.Position = position
		this.Radius = radius
		this.ConstantAttenuation = constantAttenuation
		this.DistanceAttenuation = distanceAttenuation
		this.QuadricAttenuation = quadricAttenuation

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.LightColour))
		parameters.push(BaseIfc.toStepValue(this.AmbientIntensity))
		parameters.push(BaseIfc.toStepValue(this.Intensity))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.Radius))
		parameters.push(BaseIfc.toStepValue(this.ConstantAttenuation))
		parameters.push(BaseIfc.toStepValue(this.DistanceAttenuation))
		parameters.push(BaseIfc.toStepValue(this.QuadricAttenuation))

        return parameters.join()
    }
}