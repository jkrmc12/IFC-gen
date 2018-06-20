
const BaseIfc = require('./BaseIfc')
const IfcDescriptiveMeasure = require('./IfcDescriptiveMeasure')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcPositiveRatioMeasure = require('./IfcPositiveRatioMeasure')
const IfcRatioMeasure = require('./IfcRatioMeasure')
const IfcTextAlignment = require('./IfcTextAlignment')
const IfcTextDecoration = require('./IfcTextDecoration')
const IfcTextTransformation = require('./IfcTextTransformation')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyletextmodel.htm
 */
module.exports = class IfcTextStyleTextModel extends IfcPresentationItem {
  
    constructor() {
        super()
        	this.TextIndent = null  // optional
	this.TextAlign = null  // optional
	this.TextDecoration = null  // optional
	this.LetterSpacing = null  // optional
	this.WordSpacing = null  // optional
	this.TextTransform = null  // optional
	this.LineHeight = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.TextIndent))
		parameters.push(BaseIfc.toStepValue(this.TextAlign))
		parameters.push(BaseIfc.toStepValue(this.TextDecoration))
		parameters.push(BaseIfc.toStepValue(this.LetterSpacing))
		parameters.push(BaseIfc.toStepValue(this.WordSpacing))
		parameters.push(BaseIfc.toStepValue(this.TextTransform))
		parameters.push(BaseIfc.toStepValue(this.LineHeight))

        return parameters.join()
    }
}