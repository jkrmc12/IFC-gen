
const BaseIfc = require('./BaseIfc')
const IfcPresentationLayerAssignment = require('./IfcPresentationLayerAssignment')
const IfcRepresentationItem = require('./IfcRepresentationItem')
const IfcPresentationStyle = require('./IfcPresentationStyle')
const IfcPresentationStyleAssignment = require('./IfcPresentationStyleAssignment')
const IfcLabel = require('./IfcLabel')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcstyleditem.htm
 */
module.exports = class IfcStyledItem extends IfcRepresentationItem {
  
    constructor(styles) {
        super()
		this.Styles = styles

        	this.Item = null  // optional
	this.Name = null  // optional

    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Item))
		parameters.push(BaseIfc.toStepValue(this.Styles))
		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join()
    }
}