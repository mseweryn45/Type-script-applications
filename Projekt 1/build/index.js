// class ProjectApp {
//     dataInput1: HTMLInputElement;
//     dataInput2: HTMLInputElement;
//     dataInput3: HTMLInputElement;
//     dataInput4: HTMLInputElement;
//     sumData: HTMLInputElement;
//     avgData: HTMLInputElement;
//     minData: HTMLInputElement;
//     maxData: HTMLInputElement;
//     constructor() {
//         this.StartApp();
//     }
//     StartApp() {
//         this.getInputs();
//         this.watchInputs();
//     }
//     getInputs() {
//         this.dataInput1 = document.querySelector("#data1");
//         this.dataInput2 = document.querySelector("#data2");
//         this.dataInput3 = document.querySelector("#data3");
//         this.dataInput4 = document.querySelector("#data4");
//         this.sumData = document.querySelector("#sum");
//         this.avgData = document.querySelector("#avg");
//         this.minData = document.querySelector("#min");
//         this.maxData = document.querySelector("#max");
//     }
//     watchInputs() {
//         this.dataInput1.addEventListener("input", () => this.showData())
//         this.dataInput2.addEventListener("input", () => this.showData())
//         this.dataInput3.addEventListener("input", () => this.showData())
//         this.dataInput4.addEventListener("input", () => this.showData())
//     }
//     showData() {
//         const data1 = +this.dataInput1.value;
//         const data2 = +this.dataInput2.value;
//         const data3 = +this.dataInput3.value;
//         const data4 = +this.dataInput4.value;
//         const sum = data1 + data2 + data3 + data4;
//         const avg = sum / 4;
//         const min = Math.min(data1, data2, data3, data4);
//         const max = Math.max(data1, data2, data3, data4);
//         this.sumData.value = sum.toString();
//         this.avgData.value = avg.toString();
//         this.minData.value = min.toString();
//         this.maxData.value = max.toString();
//     }
// }
// let projectApp = new ProjectApp();
var ProjectApp2 = /** @class */ (function () {
    function ProjectApp2() {
        this.StartApp();
    }
    ProjectApp2.prototype.StartApp = function () {
        this.GetInputs();
        this.WatchInputs();
    };
    ProjectApp2.prototype.GetInputs = function () {
        this.dataDynamicInput = document.querySelector("#dynamic");
        this.box = document.querySelector(".dynamic-inputs");
    };
    ProjectApp2.prototype.WatchInputs = function () {
        var _this = this;
        this.dataDynamicInput.addEventListener("input", function () { return _this.GetDate(); });
    };
    ProjectApp2.prototype.GetDate = function () {
        var data1 = +this.dataDynamicInput.value;
        this.CreateElement(data1);
    };
    ProjectApp2.prototype.CreateElement = function (e) {
        var _this = this;
        var _loop_1 = function (i) {
            var divElement = document.createElement("div");
            var inputElement = document.createElement("input");
            var buttonElement = document.createElement("button");
            divElement.id = "data" + i;
            buttonElement.innerText = "Remove";
            this_1.box.appendChild(divElement);
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);
            buttonElement.addEventListener("click", function () { return _this.RemoveElement(i); });
        };
        var this_1 = this;
        for (var i = 0; i < e; i++) {
            _loop_1(i);
        }
    };
    ProjectApp2.prototype.RemoveElement = function (e) {
        var element = document.querySelector("#data" + e);
        element.parentNode.removeChild(element);
    };
    return ProjectApp2;
}());
var projectApp2 = new ProjectApp2();
