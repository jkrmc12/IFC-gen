
const BaseIfc = require('./BaseIfc')
const IfcShapeModel = require('./IfcShapeModel')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcLogical = require('./IfcLogical')
const IfcProductDefinitionShape = require('./IfcProductDefinitionShape')
const IfcRepresentationMap = require('./IfcRepresentationMap')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcshapeaspect.htm
 */
module.exports = class IfcShapeAspect extends BaseIfc {
  
    constructor(shapeRepresentations, productDefinitional) {
        super()
		this.ShapeRepresentations = shapeRepresentations
		this.ProductDefinitional = productDefinitional

        	this.Name = null  // optional
	this.Description = null  // optional
	this.PartOfProductDefinitionShape = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.ShapeRepresentations))
		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.ProductDefinitional))
		parameters.push(BaseIfc.toStepValue(this.PartOfProductDefinitionShape))

        return parameters.join()
    }
}