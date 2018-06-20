
const BaseIfc = require('./BaseIfc')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcIdentifier = require('./IfcIdentifier')
const IfcText = require('./IfcText')
const IfcProperty = require('./IfcProperty')
const IfcMaterialDefinition = require('./IfcMaterialDefinition')
const IfcExtendedProperties = require('./IfcExtendedProperties')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialproperties.htm
 */
module.exports = class IfcMaterialProperties extends IfcExtendedProperties {
  
    constructor(properties, material) {
        super(properties)
		this.Material = material

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Properties))
		parameters.push(BaseIfc.toStepValue(this.Material))

        return parameters.join()
    }
}