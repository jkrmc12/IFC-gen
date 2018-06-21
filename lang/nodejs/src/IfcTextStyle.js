
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcTextStyleForDefinedFont = require('./IfcTextStyleForDefinedFont')
const IfcTextStyleTextModel = require('./IfcTextStyleTextModel')
const IfcExternallyDefinedTextFont = require('./IfcExternallyDefinedTextFont')
const IfcPreDefinedTextFont = require('./IfcPreDefinedTextFont')
const IfcBoolean = require('./IfcBoolean')
const IfcPresentationStyle = require('./IfcPresentationStyle')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctextstyle.htm
 */
module.exports = class IfcTextStyle extends IfcPresentationStyle {
  
    constructor(textFontStyle) {
        super()
		this.TextFontStyle = textFontStyle

        	this.TextCharacterAppearance = null  // optional
	this.TextStyle = null  // optional
	this.ModelOrDraughting = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.TextCharacterAppearance))
		parameters.push(BaseIfc.toStepValue(this.TextStyle))
		parameters.push(BaseIfc.toStepValue(this.TextFontStyle))
		parameters.push(BaseIfc.toStepValue(this.ModelOrDraughting))

        return parameters.join()
    }
}