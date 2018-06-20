
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcAreaMeasure = require('./IfcAreaMeasure')
const IfcLabel = require('./IfcLabel')
const IfcReinforcingBarSurfaceEnum = require('./IfcReinforcingBarSurfaceEnum')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcPositiveLengthMeasure = require('./IfcPositiveLengthMeasure')
const IfcCountMeasure = require('./IfcCountMeasure')
const IfcPreDefinedProperties = require('./IfcPreDefinedProperties')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcreinforcementbarproperties.htm
 */
module.exports = class IfcReinforcementBarProperties extends IfcPreDefinedProperties {
  
    constructor(totalCrossSectionArea, steelGrade) {
        super()
		this.TotalCrossSectionArea = totalCrossSectionArea
		this.SteelGrade = steelGrade

        	this.BarSurface = null  // optional
	this.EffectiveDepth = null  // optional
	this.NominalBarDiameter = null  // optional
	this.BarCount = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.TotalCrossSectionArea))
		parameters.push(BaseIfc.toStepValue(this.SteelGrade))
		parameters.push(BaseIfc.toStepValue(this.BarSurface))
		parameters.push(BaseIfc.toStepValue(this.EffectiveDepth))
		parameters.push(BaseIfc.toStepValue(this.NominalBarDiameter))
		parameters.push(BaseIfc.toStepValue(this.BarCount))

        return parameters.join()
    }
}