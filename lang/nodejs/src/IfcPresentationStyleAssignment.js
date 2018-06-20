
const BaseIfc = require('./BaseIfc')
const IfcCurveStyle = require('./IfcCurveStyle')
const IfcFillAreaStyle = require('./IfcFillAreaStyle')
const IfcNullStyle = require('./IfcNullStyle')
const IfcSurfaceStyle = require('./IfcSurfaceStyle')
const IfcTextStyle = require('./IfcTextStyle')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcpresentationstyleassignment.htm
 */
module.exports = class IfcPresentationStyleAssignment extends BaseIfc {
  
    constructor(styles) {
        super()
		this.Styles = styles

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Styles))

        return parameters.join()
    }
}