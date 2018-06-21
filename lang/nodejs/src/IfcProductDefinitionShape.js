
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcRepresentation = require('./IfcRepresentation')
const IfcProduct = require('./IfcProduct')
const IfcShapeAspect = require('./IfcShapeAspect')
const IfcProductRepresentation = require('./IfcProductRepresentation')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcproductdefinitionshape.htm
 */
module.exports = class IfcProductDefinitionShape extends IfcProductRepresentation {
  
    constructor(representations) {
        super(representations)
        	this.ShapeOfProduct = null  // inverse
	this.HasShapeAspects = null  // inverse

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.Representations))

        return parameters.join()
    }
}