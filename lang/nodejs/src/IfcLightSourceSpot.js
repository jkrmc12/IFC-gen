
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcStyledItem = require('./IfcStyledItem')
const IfcLabel = require('./IfcLabel')
const IfcColourRgb = require('./IfcColourRgb')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcReal = require('./IfcReal')
const IfcDirection = require('./IfcDirection')
const IfcPositivePlaneAngleMeasure = require('./IfcPositivePlaneAngleMeasure')
const IfcLightSourcePositional = require('./IfcLightSourcePositional')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclightsourcespot.htm
 */
module.exports = class IfcLightSourceSpot extends IfcLightSourcePositional {
  
    constructor(lightColour, position, radius, constantAttenuation, distanceAttenuation, quadricAttenuation, orientation, spreadAngle, beamWidthAngle) {
        super(lightColour,position,radius,constantAttenuation,distanceAttenuation,quadricAttenuation)
		this.Orientation = orientation
		this.SpreadAngle = spreadAngle
		this.BeamWidthAngle = beamWidthAngle

        	this.ConcentrationExponent = null  // optional

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
		parameters.push(BaseIfc.toStepValue(this.Orientation))
		parameters.push(BaseIfc.toStepValue(this.ConcentrationExponent))
		parameters.push(BaseIfc.toStepValue(this.SpreadAngle))
		parameters.push(BaseIfc.toStepValue(this.BeamWidthAngle))

        return parameters.join()
    }
}