
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcPhysicalQuantity = require('./IfcPhysicalQuantity')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcphysicalcomplexquantity.htm
 */
module.exports = class IfcPhysicalComplexQuantity extends IfcPhysicalQuantity {
  
    constructor(name, hasQuantities, discrimination) {
        super(name)
		this.HasQuantities = hasQuantities
		this.Discrimination = discrimination

        	this.Quality = null  // optional
	this.Usage = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.HasQuantities))
		parameters.push(BaseIfc.toStepValue(this.Discrimination))
		parameters.push(BaseIfc.toStepValue(this.Quality))
		parameters.push(BaseIfc.toStepValue(this.Usage))

        return parameters.join()
    }
}