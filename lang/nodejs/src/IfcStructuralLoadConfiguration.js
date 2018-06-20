
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcStructuralLoadOrResult = require('./IfcStructuralLoadOrResult')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcStructuralLoad = require('./IfcStructuralLoad')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstructuralloadconfiguration.htm
 */
module.exports = class IfcStructuralLoadConfiguration extends IfcStructuralLoad {
  
    constructor(values) {
        super()
		this.Values = values

        	this.Locations = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Values))
		parameters.push(BaseIfc.toStepValue(this.Locations))

        return parameters.join()
    }
}