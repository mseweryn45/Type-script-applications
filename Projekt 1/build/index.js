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
var ProjectApp2 = /** @class */ (function () {
    function ProjectApp2() {
        this.StartApp();
    }
    ProjectApp2.prototype.StartApp = function () {
        this.GetInputs();
        this.WatchInputs();
        this.CalcInputs();
    };
    ProjectApp2.prototype.GetInputs = function () {
        this.dataDynamicInput = document.querySelector("#dynamic");
        this.box = document.querySelector(".dynamic-inputs");
        this.showbox = document.querySelector(".show-dynamic--inputs");
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
            var divElement = document.createElement("div"), inputElement = document.createElement("input"), buttonElement = document.createElement("button"), labelElement = document.createElement("label");
            divElement.id = "data" + i;
            inputElement.classList.add("input-data");
            labelElement.innerHTML = "Field:" + i;
            buttonElement.innerText = "Remove";
            this_1.box.appendChild(divElement);
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);
            inputElement.addEventListener("input", function () { return _this.ShowData(inputElement.value); });
            buttonElement.addEventListener("click", function () { return _this.RemoveElement(i); });
        };
        var this_1 = this;
        for (var i = 0; i < e; i++) {
            _loop_1(i);
        }
        if (e == 0) {
            var elements = document.querySelectorAll(".dynamic-inputs > div");
            elements.forEach(function (element) {
                element.parentNode.removeChild(element);
            });
        }
    };
    ProjectApp2.prototype.CalcInputs = function () {
        var sumInput = document.createElement("input"), sumLabel = document.createElement("label"), avgInput = document.createElement("input"), avgLabel = document.createElement("label"), minInput = document.createElement("input"), minLabel = document.createElement("label"), maxInput = document.createElement("input"), maxLabel = document.createElement("label");
        sumLabel.innerHTML = "Sum:";
        avgLabel.innerHTML = "Avg:";
        minLabel.innerHTML = "Min:";
        maxLabel.innerHTML = "Max:";
        sumInput.id = "sum";
        avgInput.id = "avg";
        minInput.id = "min";
        maxInput.id = "max";
        this.showbox.appendChild(sumLabel);
        this.showbox.appendChild(sumInput);
        this.showbox.appendChild(avgLabel);
        this.showbox.appendChild(avgInput);
        this.showbox.appendChild(minLabel);
        this.showbox.appendChild(minInput);
        this.showbox.appendChild(maxLabel);
        this.showbox.appendChild(maxInput);
    };
    ProjectApp2.prototype.RemoveElement = function (e) {
        var element = document.querySelector("#data" + e);
        element.parentNode.removeChild(element);
    };
    ProjectApp2.prototype.ShowData = function (e) {
        var inputList = document.querySelectorAll(".input-data");
        var numberList = [];
        inputList.forEach(function (element) {
            numberList.push(+element.value);
        });
        var min = Math.min.apply(Math, numberList);
        var max = Math.max.apply(Math, numberList);
        var avg = numberList.reduce(function (a, b) { return a + b; }, 0) / numberList.length;
        var sum = numberList.reduce(function (a, b) { return a + b; }, 0);
        var text = "Only numbers";
        this.sumData = document.querySelector("#sum");
        this.avgData = document.querySelector("#avg");
        this.minData = document.querySelector("#min");
        this.maxData = document.querySelector("#max");
        if (isNaN(e)) {
            this.sumData.value = text;
            this.avgData.value = text;
            this.minData.value = text;
            this.maxData.value = text;
        }
        else {
            this.sumData.value = sum.toString();
            this.avgData.value = avg.toString();
            this.minData.value = min.toString();
            this.maxData.value = max.toString();
        }
    };
    return ProjectApp2;
}());
// let projectApp = new ProjectApp();
var projectApp2 = new ProjectApp2();
