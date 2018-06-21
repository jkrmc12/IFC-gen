
const BaseIfc = require('./BaseIfc')
const IfcParameterValue = require('./IfcParameterValue')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifctexturevertexlist.htm
 */
module.exports = class IfcTextureVertexList extends IfcPresentationItem {
  
    constructor(texCoordsList) {
        super()
		this.TexCoordsList = texCoordsList

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.TexCoordsList))

        return parameters.join()
    }
}