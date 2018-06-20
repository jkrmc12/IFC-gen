
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRepresentation = require('./IfcRepresentation')
const IfcMaterial = require('./IfcMaterial')
const IfcProductRepresentation = require('./IfcProductRepresentation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmaterialdefinitionrepresentation.htm
 */
module.exports = class IfcMaterialDefinitionRepresentation extends IfcProductRepresentation {
  
    constructor(representations, representedMaterial) {
        super(representations)
		this.RepresentedMaterial = representedMaterial

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Representations))
		parameters.push(BaseIfc.toStepValue(this.RepresentedMaterial))

        return parameters.join()
    }
}