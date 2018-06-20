
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcTextFontName = require('./IfcTextFontName')
const IfcFontStyle = require('./IfcFontStyle')
const IfcFontVariant = require('./IfcFontVariant')
const IfcFontWeight = require('./IfcFontWeight')
const IfcDescriptiveMeasure = require('./IfcDescriptiveMeasure')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcNormalisedRatioMeasure = require('./IfcNormalisedRatioMeasure')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcPositiveRatioMeasure = require('./IfcPositiveRatioMeasure')
const IfcRatioMeasure = require('./IfcRatioMeasure')
const IfcPreDefinedTextFont = require('./IfcPreDefinedTextFont')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstylefontmodel.htm
 */
module.exports = class IfcTextStyleFontModel extends IfcPreDefinedTextFont {
  
    constructor(name, fontFamily, fontSize) {
        super(name)
		this.FontFamily = fontFamily
		this.FontSize = fontSize

        	this.FontStyle = null  // optional
	this.FontVariant = null  // optional
	this.FontWeight = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.FontFamily))
		parameters.push(BaseIfc.toStepValue(this.FontStyle))
		parameters.push(BaseIfc.toStepValue(this.FontVariant))
		parameters.push(BaseIfc.toStepValue(this.FontWeight))
		parameters.push(BaseIfc.toStepValue(this.FontSize))

        return parameters.join()
    }
}