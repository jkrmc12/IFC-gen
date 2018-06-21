
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLabel = require('./IfcLabel')
const IfcColourRgb = require('./IfcColourRgb')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcDirection = require('./IfcDirection')
const IfcLightSource = require('./IfcLightSource')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcedirectional.htm
 */
module.exports = class IfcLightSourceDirectional extends IfcLightSource {
  
    constructor(lightColour, orientation) {
        super(lightColour)
		this.Orientation = orientation

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.LightColour))
		parameters.push(BaseIfc.toStepValue(this.AmbientIntensity))
		parameters.push(BaseIfc.toStepValue(this.Intensity))
		parameters.push(BaseIfc.toStepValue(this.Orientation))

        return parameters.join()
    }
}