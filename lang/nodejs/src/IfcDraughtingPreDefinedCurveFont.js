
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcPreDefinedCurveFont = require('./IfcPreDefinedCurveFont')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedcurvefont.htm
 */
module.exports = class IfcDraughtingPreDefinedCurveFont extends IfcPreDefinedCurveFont {
  
    constructor(name) {
        super(name)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join()
    }
}