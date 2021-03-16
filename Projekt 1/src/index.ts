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


class ProjectApp2 {
    dataDynamicInput: HTMLInputElement;
    box: HTMLDivElement;
    showbox: HTMLDivElement;
    sumData: HTMLInputElement;
    avgData: HTMLInputElement;
    minData: HTMLInputElement;
    maxData: HTMLInputElement;
    helpData: number;
    list: Array<number>;

    constructor() {
        this.StartApp();
    }

    StartApp() {
        this.GetInputs();
        this.WatchInputs();
        this.CalcInputs();
    }
    GetInputs() {
        this.dataDynamicInput = document.querySelector("#dynamic");
        this.box = document.querySelector(".dynamic-inputs");
        this.showbox = document.querySelector(".show-dynamic--inputs")

    }
    WatchInputs() {
        this.dataDynamicInput.addEventListener("input", () => this.GetDate())
    }

    GetDate() {
        const data1 = +this.dataDynamicInput.value;
        this.CreateElement(data1);
    }
    CreateElement(e) {

        for (let i = 0; i < e; i++) {
            const divElement = document.createElement("div"),
                inputElement = document.createElement("input"),
                buttonElement = document.createElement("button"),
                labelElement = document.createElement("label");
            divElement.id = "data" + i;
            inputElement.classList.add("input-data");
            labelElement.innerHTML = "Field:" + i;
            buttonElement.innerText = "Remove";
            this.box.appendChild(divElement)
            divElement.appendChild(inputElement);
            divElement.appendChild(buttonElement);
            inputElement.addEventListener("input", () => this.ShowData(inputElement.value));
            buttonElement.addEventListener("click", () => this.RemoveElement(i))
        }
        if (e == 0) {
            let elements = document.querySelectorAll(".dynamic-inputs > div");
            elements.forEach(element => {
                element.parentNode.removeChild(element);
            });

        }
    }
    CalcInputs() {
        const sumInput = document.createElement("input"),
            sumLabel = document.createElement("label"),
            avgInput = document.createElement("input"),
            avgLabel = document.createElement("label"),
            minInput = document.createElement("input"),
            minLabel = document.createElement("label"),
            maxInput = document.createElement("input"),
            maxLabel = document.createElement("label");

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
    }


    RemoveElement(e) {
        const element = document.querySelector("#data" + e);
        element.parentNode.removeChild(element);
    }

    ShowData(e) {
        let inputList: NodeListOf<HTMLInputElement> = document.querySelectorAll(".input-data");
        let numberList: Array<number> = [];
        inputList.forEach(element => {
            numberList.push(+element.value)
        });
        const min = Math.min(...numberList)
        const max = Math.max(...numberList);
        const avg = numberList.reduce((a, b) => a + b, 0) / numberList.length;
        const sum = numberList.reduce((a, b) => a + b, 0);
        const text = "Only numbers";

        this.sumData = document.querySelector("#sum");
        this.avgData = document.querySelector("#avg");
        this.minData = document.querySelector("#min");
        this.maxData = document.querySelector("#max");


        if (isNaN(e)) {
            this.sumData.value = text;
            this.avgData.value = text;
            this.minData.value = text;
            this.maxData.value = text;
        } else {
            this.sumData.value = sum.toString();
            this.avgData.value = avg.toString();
            this.minData.value = min.toString();
            this.maxData.value = max.toString();
        }

    }
}

// let projectApp = new ProjectApp();
let projectApp2 = new ProjectApp2();
