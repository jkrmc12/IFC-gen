
const IfcSurface = require('./IfcSurface')
const IfcPcurve = require('./IfcPcurve')
const IfcDirection = require('./IfcDirection')
const Number = require('./Number')
const Boolean = require('./Boolean')
const IfcArcIndex = require('./IfcArcIndex')
const IfcLineIndex = require('./IfcLineIndex')
const IfcParameterValue = require('./IfcParameterValue')
const IfcUnitEnum = require('./IfcUnitEnum')
const IfcDimensionalExponents = require('./IfcDimensionalExponents')
const IfcColourSpecification = require('./IfcColourSpecification')
const IfcPreDefinedColour = require('./IfcPreDefinedColour')
const IfcExternallyDefinedHatchStyle = require('./IfcExternallyDefinedHatchStyle')
const IfcFillAreaStyleHatching = require('./IfcFillAreaStyleHatching')
const IfcFillAreaStyleTiles = require('./IfcFillAreaStyleTiles')
const IfcAxis2Placement2D = require('./IfcAxis2Placement2D')
const IfcAxis2Placement3D = require('./IfcAxis2Placement3D')
const IfcObjectPlacement = require('./IfcObjectPlacement')
const IfcObjectTypeEnum = require('./IfcObjectTypeEnum')
const IfcObjectDefinition = require('./IfcObjectDefinition')
const IfcDerivedUnit = require('./IfcDerivedUnit')
const IfcMonetaryUnit = require('./IfcMonetaryUnit')
const IfcNamedUnit = require('./IfcNamedUnit')
const IfcVector = require('./IfcVector')
const IfcDimensionCount = require('./IfcDimensionCount')
const IfcCurve = require('./IfcCurve')
const IfcRationalBSplineCurveWithKnots = require('./IfcRationalBSplineCurveWithKnots')
const IfcDerivedUnitElement = require('./IfcDerivedUnitElement')
const IfcSIUnitName = require('./IfcSIUnitName')
const IfcCompositeCurveOnSurface = require('./IfcCompositeCurveOnSurface')
const IfcSurfaceCurve = require('./IfcSurfaceCurve')
const IfcEdgeLoop = require('./IfcEdgeLoop')
const IfcLengthMeasure = require('./IfcLengthMeasure')
const IfcMaterialLayerSet = require('./IfcMaterialLayerSet')
const IfcPath = require('./IfcPath')
const IfcCartesianPointList = require('./IfcCartesianPointList')
const IfcCartesianPoint = require('./IfcCartesianPoint')
const IfcLabel = require('./IfcLabel')
const IfcRepresentationItem = require('./IfcRepresentationItem')
const IfcRationalBSplineSurfaceWithKnots = require('./IfcRationalBSplineSurfaceWithKnots')
const IfcProfileDef = require('./IfcProfileDef')
const IfcRelDefinesByProperties = require('./IfcRelDefinesByProperties')
const IfcProperty = require('./IfcProperty')
const IfcPropertySetDefinition = require('./IfcPropertySetDefinition')
const IfcPropertyTemplate = require('./IfcPropertyTemplate')
const IfcPhysicalQuantity = require('./IfcPhysicalQuantity')

module.exports = {
    
    IfcAssociatedSurface: function(arg) {
        throw new Error('This function is not yet implemented.')
    },

    IfcBaseAxis: function(dim,axis1,axis2,axis3) {
        throw new Error('This function is not yet implemented.')
    },

    IfcBooleanChoose: function(b,choice1,choice2) {
        throw new Error('This function is not yet implemented.')
    },

    IfcBuild2Axes: function(refDirection) {
        throw new Error('This function is not yet implemented.')
    },

    IfcBuildAxes: function(axis,refDirection) {
        throw new Error('This function is not yet implemented.')
    },

    IfcConsecutiveSegments: function(segments) {
        throw new Error('This function is not yet implemented.')
    },

    IfcConstraintsParamBSpline: function(degree,upKnots,upCp,knotMult,knots) {
        throw new Error('This function is not yet implemented.')
    },

    IfcConvertDirectionInto2D: function(direction) {
        throw new Error('This function is not yet implemented.')
    },

    IfcCorrectDimensions: function(m,dim) {
        throw new Error('This function is not yet implemented.')
    },

    IfcCorrectFillAreaStyle: function(styles) {
        throw new Error('This function is not yet implemented.')
    },

    IfcCorrectLocalPlacement: function(axisPlacement,relPlacement) {
        throw new Error('This function is not yet implemented.')
    },

    IfcCorrectObjectAssignment: function(constraint,objects) {
        throw new Error('This function is not yet implemented.')
    },

    IfcCorrectUnitAssignment: function(units) {
        throw new Error('This function is not yet implemented.')
    },

    IfcCrossProduct: function(arg1,arg2) {
        throw new Error('This function is not yet implemented.')
    },

    IfcCurveDim: function(curve) {
        throw new Error('This function is not yet implemented.')
    },

    IfcCurveWeightsPositive: function(b) {
        throw new Error('This function is not yet implemented.')
    },

    IfcDeriveDimensionalExponents: function(unitElements) {
        throw new Error('This function is not yet implemented.')
    },

    IfcDimensionsForSiUnit: function(n) {
        throw new Error('This function is not yet implemented.')
    },

    IfcDotProduct: function(arg1,arg2) {
        throw new Error('This function is not yet implemented.')
    },

    IfcFirstProjAxis: function(zAxis,arg) {
        throw new Error('This function is not yet implemented.')
    },

    IfcGetBasisSurface: function(c) {
        throw new Error('This function is not yet implemented.')
    },

    IfcListToArray: function(lis,low,u) {
        throw new Error('This function is not yet implemented.')
    },

    IfcLoopHeadToTail: function(aLoop) {
        throw new Error('This function is not yet implemented.')
    },

    IfcMakeArrayOfArray: function(lis,low1,u1,low2,u2) {
        throw new Error('This function is not yet implemented.')
    },

    IfcMlsTotalThickness: function(layerSet) {
        throw new Error('This function is not yet implemented.')
    },

    IfcNormalise: function(arg) {
        throw new Error('This function is not yet implemented.')
    },

    IfcOrthogonalComplement: function(vec) {
        throw new Error('This function is not yet implemented.')
    },

    IfcPathHeadToTail: function(aPath) {
        throw new Error('This function is not yet implemented.')
    },

    IfcPointListDim: function(pointList) {
        throw new Error('This function is not yet implemented.')
    },

    IfcSameAxis2Placement: function(ap1,ap2,epsilon) {
        throw new Error('This function is not yet implemented.')
    },

    IfcSameCartesianPoint: function(cp1,cp2,epsilon) {
        throw new Error('This function is not yet implemented.')
    },

    IfcSameDirection: function(dir1,dir2,epsilon) {
        throw new Error('This function is not yet implemented.')
    },

    IfcSameValidPrecision: function(epsilon1,epsilon2) {
        throw new Error('This function is not yet implemented.')
    },

    IfcSameValue: function(value1,value2,epsilon) {
        throw new Error('This function is not yet implemented.')
    },

    IfcScalarTimesVector: function(scalar,vec) {
        throw new Error('This function is not yet implemented.')
    },

    IfcSecondProjAxis: function(zAxis,xAxis,arg) {
        throw new Error('This function is not yet implemented.')
    },

    IfcShapeRepresentationTypes: function(repType,items) {
        throw new Error('This function is not yet implemented.')
    },

    IfcSurfaceWeightsPositive: function(b) {
        throw new Error('This function is not yet implemented.')
    },

    IfcTaperedSweptAreaProfiles: function(startArea,endArea) {
        throw new Error('This function is not yet implemented.')
    },

    IfcTopologyRepresentationTypes: function(repType,items) {
        throw new Error('This function is not yet implemented.')
    },

    IfcUniqueDefinitionNames: function(relations) {
        throw new Error('This function is not yet implemented.')
    },

    IfcUniquePropertyName: function(properties) {
        throw new Error('This function is not yet implemented.')
    },

    IfcUniquePropertySetNames: function(properties) {
        throw new Error('This function is not yet implemented.')
    },

    IfcUniquePropertyTemplateNames: function(properties) {
        throw new Error('This function is not yet implemented.')
    },

    IfcUniqueQuantityNames: function(properties) {
        throw new Error('This function is not yet implemented.')
    },

    IfcVectorDifference: function(arg1,arg2) {
        throw new Error('This function is not yet implemented.')
    },

    IfcVectorSum: function(arg1,arg2) {
        throw new Error('This function is not yet implemented.')
    }
}