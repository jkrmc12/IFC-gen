
const BaseIfc = require('./BaseIfc')
const IfcBoolean = require('./IfcBoolean')
const IfcIdentifier = require('./IfcIdentifier')
const IfcCartesianTransformationOperator2D = require('./IfcCartesianTransformationOperator2D')
const IfcTextureCoordinate = require('./IfcTextureCoordinate')
const IfcSurfaceStyleWithTextures = require('./IfcSurfaceStyleWithTextures')
const IfcInteger = require('./IfcInteger')
const IfcBinary = require('./IfcBinary')
const IfcSurfaceTexture = require('./IfcSurfaceTexture')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpixeltexture.htm
 */
module.exports = class IfcPixelTexture extends IfcSurfaceTexture {
  
    constructor(repeatS, repeatT, width, height, colourComponents, pixel) {
        super(repeatS,repeatT)
		this.Width = width
		this.Height = height
		this.ColourComponents = colourComponents
		this.Pixel = pixel

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.RepeatS))
		parameters.push(BaseIfc.toStepValue(this.RepeatT))
		parameters.push(BaseIfc.toStepValue(this.Mode))
		parameters.push(BaseIfc.toStepValue(this.TextureTransform))
		parameters.push(BaseIfc.toStepValue(this.Parameter))
		parameters.push(BaseIfc.toStepValue(this.Width))
		parameters.push(BaseIfc.toStepValue(this.Height))
		parameters.push(BaseIfc.toStepValue(this.ColourComponents))
		parameters.push(BaseIfc.toStepValue(this.Pixel))

        return parameters.join()
    }
}