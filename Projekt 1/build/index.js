var ProjectApp = /** @class */ (function () {
    function ProjectApp() {
        this.StartApp();
    }
    ProjectApp.prototype.StartApp = function () {
        this.getInputs();
        this.watchInputs();
    };
    ProjectApp.prototype.getInputs = function () {
        this.dataInput1 = document.querySelector("#data1");
        this.dataInput2 = document.querySelector("#data2");
        this.dataInput3 = document.querySelector("#data3");
        this.dataInput4 = document.querySelector("#data4");
        this.sumData = document.querySelector("#sum");
        this.avgData = document.querySelector("#avg");
        this.minData = document.querySelector("#min");
        this.maxData = document.querySelector("#max");
    };
    ProjectApp.prototype.watchInputs = function () {
        var _this = this;
        this.dataInput1.addEventListener("input", function () { return _this.showData(); });
        this.dataInput2.addEventListener("input", function () { return _this.showData(); });
        this.dataInput3.addEventListener("input", function () { return _this.showData(); });
        this.dataInput4.addEventListener("input", function () { return _this.showData(); });
    };
    ProjectApp.prototype.showData = function () {
        var data1 = +this.dataInput1.value;
        var data2 = +this.dataInput2.value;
        var data3 = +this.dataInput3.value;
        var data4 = +this.dataInput4.value;
        var sum = data1 + data2 + data3 + data4;
        var avg = sum / 4;
        var min = Math.min(data1, data2, data3, data4);
        var max = Math.max(data1, data2, data3, data4);
        this.sumData.value = sum.toString();
        this.avgData.value = avg.toString();
        this.minData.value = min.toString();
        this.maxData.value = max.toString();
    };
    return ProjectApp;
}());
var projectApp = new ProjectApp();
