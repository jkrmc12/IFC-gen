
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcThermodynamicTemperatureMeasure = require('./IfcThermodynamicTemperatureMeasure')
const IfcStructuralLoadStatic = require('./IfcStructuralLoadStatic')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadtemperature.htm
 */
module.exports = class IfcStructuralLoadTemperature extends IfcStructuralLoadStatic {
  
    constructor() {
        super()
        	this.DeltaTConstant = null  // optional
	this.DeltaTY = null  // optional
	this.DeltaTZ = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DeltaTConstant))
		parameters.push(BaseIfc.toStepValue(this.DeltaTY))
		parameters.push(BaseIfc.toStepValue(this.DeltaTZ))

        return parameters.join()
    }
}