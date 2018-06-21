
const BaseIfc = require('./BaseIfc')
const IfcSurfaceTexture = require('./IfcSurfaceTexture')
const IfcPresentationItem = require('./IfcPresentationItem')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcsurfacestylewithtextures.htm
 */
module.exports = class IfcSurfaceStyleWithTextures extends IfcPresentationItem {
  
    constructor(textures) {
        super()
		this.Textures = textures

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Textures))

        return parameters.join()
    }
}