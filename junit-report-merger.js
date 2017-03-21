var junitReportMerger = require("junit-report-merger")
var fileList = require('./getFiles');
junitReportMerger.mergeFiles('./junitReportMerger2.xml', fileList);
