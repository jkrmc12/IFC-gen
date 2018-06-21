
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcCurveStyleFontAndScaling = require('./IfcCurveStyleFontAndScaling')
const IfcCurveStyleFont = require('./IfcCurveStyleFont')
const IfcPreDefinedCurveFont = require('./IfcPreDefinedCurveFont')
const IfcDescriptiveMeasure = require('./IfcDescriptiveMeasure')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcPositiveRatioMeasure = require('./IfcPositiveRatioMeasure')
const IfcRatioMeasure = require('./IfcRatioMeasure')
const IfcColourSpecification = require('./IfcColourSpecification')
const IfcPreDefinedColour = require('./IfcPreDefinedColour')
const IfcBoolean = require('./IfcBoolean')
const IfcPresentationStyle = require('./IfcPresentationStyle')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurvestyle.htm
 */
module.exports = class IfcCurveStyle extends IfcPresentationStyle {
  
    constructor() {
        super()
        	this.CurveFont = null  // optional
	this.CurveWidth = null  // optional
	this.CurveColour = null  // optional
	this.ModelOrDraughting = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.CurveFont))
		parameters.push(BaseIfc.toStepValue(this.CurveWidth))
		parameters.push(BaseIfc.toStepValue(this.CurveColour))
		parameters.push(BaseIfc.toStepValue(this.ModelOrDraughting))

        return parameters.join()
    }
}