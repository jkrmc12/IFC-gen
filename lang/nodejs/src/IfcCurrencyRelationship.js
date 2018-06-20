
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcMonetaryUnit = require('./IfcMonetaryUnit')
const IfcPositiveRatioMeasure = require('./IfcPositiveRatioMeasure')
const IfcDateTime = require('./IfcDateTime')
const IfcLibraryInformation = require('./IfcLibraryInformation')
const IfcResourceLevelRelationship = require('./IfcResourceLevelRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifccurrencyrelationship.htm
 */
module.exports = class IfcCurrencyRelationship extends IfcResourceLevelRelationship {
  
    constructor(relatingMonetaryUnit, relatedMonetaryUnit, exchangeRate) {
        super()
		this.RelatingMonetaryUnit = relatingMonetaryUnit
		this.RelatedMonetaryUnit = relatedMonetaryUnit
		this.ExchangeRate = exchangeRate

        	this.RateDateTime = null  // optional
	this.RateSource = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.RelatingMonetaryUnit))
		parameters.push(BaseIfc.toStepValue(this.RelatedMonetaryUnit))
		parameters.push(BaseIfc.toStepValue(this.ExchangeRate))
		parameters.push(BaseIfc.toStepValue(this.RateDateTime))
		parameters.push(BaseIfc.toStepValue(this.RateSource))

        return parameters.join()
    }
}