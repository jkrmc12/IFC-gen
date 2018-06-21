
const BaseIfc = require('./BaseIfc')
const IfcBoolean = require('./IfcBoolean')
const IfcIdentifier = require('./IfcIdentifier')
const IfcCartesianTransformationOperator2D = require('./IfcCartesianTransformationOperator2D')
const IfcTextureCoordinate = require('./IfcTextureCoordinate')
const IfcSurfaceStyleWithTextures = require('./IfcSurfaceStyleWithTextures')
const IfcURIReference = require('./IfcURIReference')
const IfcSurfaceTexture = require('./IfcSurfaceTexture')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcimagetexture.htm
 */
module.exports = class IfcImageTexture extends IfcSurfaceTexture {
  
    constructor(repeatS, repeatT, uRLReference) {
        super(repeatS,repeatT)
		this.URLReference = uRLReference

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.RepeatS))
		parameters.push(BaseIfc.toStepValue(this.RepeatT))
		parameters.push(BaseIfc.toStepValue(this.Mode))
		parameters.push(BaseIfc.toStepValue(this.TextureTransform))
		parameters.push(BaseIfc.toStepValue(this.Parameter))
		parameters.push(BaseIfc.toStepValue(this.URLReference))

        return parameters.join()
    }
}