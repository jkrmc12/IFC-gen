
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLabel = require('./IfcLabel')
const IfcColourRgb = require('./IfcColourRgb')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcThermodynamicTemperatureMeasure = require('./IfcThermodynamicTemperatureMeasure')
const IfcLuminousFluxMeasure = require('./IfcLuminousFluxMeasure')
const IfcLightEmissionSourceEnum = require('./IfcLightEmissionSourceEnum')
const IfcExternalReference = require('./IfcExternalReference')
const IfcLightIntensityDistribution = require('./IfcLightIntensityDistribution')
const IfcLightSource = require('./IfcLightSource')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcegoniometric.htm
 */
module.exports = class IfcLightSourceGoniometric extends IfcLightSource {
  
    constructor(lightColour, position, colourTemperature, luminousFlux, lightEmissionSource, lightDistributionDataSource) {
        super(lightColour)
		this.Position = position
		this.ColourTemperature = colourTemperature
		this.LuminousFlux = luminousFlux
		this.LightEmissionSource = lightEmissionSource
		this.LightDistributionDataSource = lightDistributionDataSource

        	this.ColourAppearance = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.LightColour))
		parameters.push(BaseIfc.toStepValue(this.AmbientIntensity))
		parameters.push(BaseIfc.toStepValue(this.Intensity))
		parameters.push(BaseIfc.toStepValue(this.Position))
		parameters.push(BaseIfc.toStepValue(this.ColourAppearance))
		parameters.push(BaseIfc.toStepValue(this.ColourTemperature))
		parameters.push(BaseIfc.toStepValue(this.LuminousFlux))
		parameters.push(BaseIfc.toStepValue(this.LightEmissionSource))
		parameters.push(BaseIfc.toStepValue(this.LightDistributionDataSource))

        return parameters.join()
    }
}