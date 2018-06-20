
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcPreDefinedColour = require('./IfcPreDefinedColour')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcdraughtingpredefinedcolour.htm
 */
module.exports = class IfcDraughtingPreDefinedColour extends IfcPreDefinedColour {
  
    constructor(name) {
        super(name)
        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))

        return parameters.join()
    }
}