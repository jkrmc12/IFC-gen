
const BaseIfc = require('./BaseIfc')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdimensionalexponents.htm
 */
module.exports = class IfcDimensionalExponents extends BaseIfc {
  
    constructor(lengthExponent, massExponent, timeExponent, electricCurrentExponent, thermodynamicTemperatureExponent, amountOfSubstanceExponent, luminousIntensityExponent) {
        super()
		this.LengthExponent = lengthExponent
		this.MassExponent = massExponent
		this.TimeExponent = timeExponent
		this.ElectricCurrentExponent = electricCurrentExponent
		this.ThermodynamicTemperatureExponent = thermodynamicTemperatureExponent
		this.AmountOfSubstanceExponent = amountOfSubstanceExponent
		this.LuminousIntensityExponent = luminousIntensityExponent

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.LengthExponent))
		parameters.push(BaseIfc.toStepValue(this.MassExponent))
		parameters.push(BaseIfc.toStepValue(this.TimeExponent))
		parameters.push(BaseIfc.toStepValue(this.ElectricCurrentExponent))
		parameters.push(BaseIfc.toStepValue(this.ThermodynamicTemperatureExponent))
		parameters.push(BaseIfc.toStepValue(this.AmountOfSubstanceExponent))
		parameters.push(BaseIfc.toStepValue(this.LuminousIntensityExponent))

        return parameters.join()
    }
}