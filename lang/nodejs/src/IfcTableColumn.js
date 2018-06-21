
const BaseIfc = require('./BaseIfc')
const IfcIdentifier = require('./IfcIdentifier')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcDerivedUnit = require('./IfcDerivedUnit')
const IfcMonetaryUnit = require('./IfcMonetaryUnit')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcReference = require('./IfcReference')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctablecolumn.htm
 */
module.exports = class IfcTableColumn extends BaseIfc {
  
    constructor() {
        super()
        	this.Identifier = null  // optional
	this.Name = null  // optional
	this.Description = null  // optional
	this.Unit = null  // optional
	this.ReferencePath = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Identifier))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.ReferencePath))

        return parameters.join()
    }
}