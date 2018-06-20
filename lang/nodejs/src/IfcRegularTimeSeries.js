
const BaseIfc = require('./BaseIfc')
const IfcLabel = require('./IfcLabel')
const IfcText = require('./IfcText')
const IfcDateTime = require('./IfcDateTime')
const IfcTimeSeriesDataTypeEnum = require('./IfcTimeSeriesDataTypeEnum')
const IfcDataOriginEnum = require('./IfcDataOriginEnum')
const IfcDerivedUnit = require('./IfcDerivedUnit')
const IfcMonetaryUnit = require('./IfcMonetaryUnit')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcExternalReferenceRelationship = require('./IfcExternalReferenceRelationship')
const IfcTimeMeasure = require('./IfcTimeMeasure')
const IfcTimeSeriesValue = require('./IfcTimeSeriesValue')
const IfcTimeSeries = require('./IfcTimeSeries')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcregulartimeseries.htm
 */
module.exports = class IfcRegularTimeSeries extends IfcTimeSeries {
  
    constructor(name, startTime, endTime, timeSeriesDataType, dataOrigin, timeStep, values) {
        super(name,startTime,endTime,timeSeriesDataType,dataOrigin)
		this.TimeStep = timeStep
		this.Values = values

        
    }
    getStepParameters() {
        const parameters = []
    		parameters.push(BaseIfc.toStepValue(this.Name))
		parameters.push(BaseIfc.toStepValue(this.Description))
		parameters.push(BaseIfc.toStepValue(this.StartTime))
		parameters.push(BaseIfc.toStepValue(this.EndTime))
		parameters.push(BaseIfc.toStepValue(this.TimeSeriesDataType))
		parameters.push(BaseIfc.toStepValue(this.DataOrigin))
		parameters.push(BaseIfc.toStepValue(this.UserDefinedDataOrigin))
		parameters.push(BaseIfc.toStepValue(this.Unit))
		parameters.push(BaseIfc.toStepValue(this.TimeStep))
		parameters.push(BaseIfc.toStepValue(this.Values))

        return parameters.join()
    }
}