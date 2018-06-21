
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
const IfcIrregularTimeSeriesValue = require('./IfcIrregularTimeSeriesValue')
const IfcTimeSeries = require('./IfcTimeSeries')

/**
 * http://www.buildingsmart-tech.org/ifc/IFC4/final/html/link/ifcirregulartimeseries.htm
 */
module.exports = class IfcIrregularTimeSeries extends IfcTimeSeries {
  
    constructor(name, startTime, endTime, timeSeriesDataType, dataOrigin, values) {
        super(name,startTime,endTime,timeSeriesDataType,dataOrigin)
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
		parameters.push(BaseIfc.toStepValue(this.Values))

        return parameters.join()
    }
}