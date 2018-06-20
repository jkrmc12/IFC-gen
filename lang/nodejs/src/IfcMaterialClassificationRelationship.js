
const BaseIfc = require('./BaseIfc')
const IfcClassification = require('./IfcClassification')
const IfcClassificationReference = require('./IfcClassificationReference')
const IfcMaterial = require('./IfcMaterial')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialclassificationrelationship.htm
 */
module.exports = class IfcMaterialClassificationRelationship extends BaseIfc {
  
    constructor(materialClassifications, classifiedMaterial) {
        super()
		this.MaterialClassifications = materialClassifications
		this.ClassifiedMaterial = classifiedMaterial

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.MaterialClassifications))
		parameters.push(BaseIfc.toStepValue(this.ClassifiedMaterial))

        return parameters.join()
    }
}