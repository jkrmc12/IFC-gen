
const BaseIfc = require('./BaseIfc')
const IfcMaterial = require('./IfcMaterial')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcmateriallist.htm
 */
module.exports = class IfcMaterialList extends BaseIfc {
  
    constructor(materials) {
        super()
		this.Materials = materials

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Materials))

        return parameters.join()
    }
}