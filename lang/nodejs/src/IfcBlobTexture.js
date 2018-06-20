
const BaseIfc = require('./BaseIfc')
const IfcBoolean = require('./IfcBoolean')
const IfcIdentifier = require('./IfcIdentifier')
const IfcCartesianTransformationOperator2D = require('./IfcCartesianTransformationOperator2D')
const IfcTextureCoordinate = require('./IfcTextureCoordinate')
const IfcSurfaceStyleWithTextures = require('./IfcSurfaceStyleWithTextures')
const IfcBinary = require('./IfcBinary')
const IfcSurfaceTexture = require('./IfcSurfaceTexture')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcblobtexture.htm
 */
module.exports = class IfcBlobTexture extends IfcSurfaceTexture {
  
    constructor(repeatS, repeatT, rasterFormat, rasterCode) {
        super(repeatS,repeatT)
		this.RasterFormat = rasterFormat
		this.RasterCode = rasterCode

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.RepeatS))
		parameters.push(BaseIfc.toStepValue(this.RepeatT))
		parameters.push(BaseIfc.toStepValue(this.Mode))
		parameters.push(BaseIfc.toStepValue(this.TextureTransform))
		parameters.push(BaseIfc.toStepValue(this.Parameter))
		parameters.push(BaseIfc.toStepValue(this.RasterFormat))
		parameters.push(BaseIfc.toStepValue(this.RasterCode))

        return parameters.join()
    }
}