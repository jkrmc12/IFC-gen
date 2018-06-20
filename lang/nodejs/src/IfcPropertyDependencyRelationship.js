
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcProperty = require('./IfcProperty')
const IfcResourceLevelRelationship = require('./IfcResourceLevelRelationship')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpropertydependencyrelationship.htm
 */
module.exports = class IfcPropertyDependencyRelationship extends IfcResourceLevelRelationship {
  
    constructor(dependingProperty, dependantProperty) {
        super()
		this.DependingProperty = dependingProperty
		this.DependantProperty = dependantProperty

        	this.Expression = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.DependingProperty))
		parameters.push(BaseIfc.toStepValue(this.DependantProperty))
		parameters.push(BaseIfc.toStepValue(this.Expression))

        return parameters.join()
    }
}