
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcDataOriginEnum = require('./IfcDataOriginEnum')
const IfcDuration = require('./IfcDuration')
const IfcRatioMeasure = require('./IfcRatioMeasure')
const IfcTaskDurationEnum = require('./IfcTaskDurationEnum')
const IfcSchedulingTime = require('./IfcSchedulingTime')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifclagtime.htm
 */
module.exports = class IfcLagTime extends IfcSchedulingTime {
  
    constructor(lagValue, durationType) {
        super()
		this.LagValue = lagValue
		this.DurationType = durationType

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.LagValue))
		parameters.push(BaseIfc.toStepValue(this.DurationType))

        return parameters.join()
    }
}