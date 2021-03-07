class ProjectApp {
    dataInput1 : HTMLInputElement;
    dataInput2 : HTMLInputElement;
    dataInput3 : HTMLInputElement;
    dataInput4 : HTMLInputElement;
    sumData : HTMLInputElement;
    avgData : HTMLInputElement;
    minData : HTMLInputElement;
    maxData : HTMLInputElement;

    constructor(){
        this.StartApp();
    }
    StartApp(){
        this.getInputs();
        this.watchInputs();
    }

    getInputs() {
        this.dataInput1 = document.querySelector("#data1");
        this.dataInput2 = document.querySelector("#data2");
        this.dataInput3 = document.querySelector("#data3");
        this.dataInput4 = document.querySelector("#data4");
        this.sumData = document.querySelector("#sum");
        this.avgData = document.querySelector("#avg");
        this.minData = document.querySelector("#min");
        this.maxData = document.querySelector("#max");
    }

    watchInputs() {
        this.dataInput1.addEventListener("input", () => this.showData())
        this.dataInput2.addEventListener("input", () => this.showData())
        this.dataInput3.addEventListener("input", () => this.showData())
        this.dataInput4.addEventListener("input", () => this.showData())
    }

    showData() {
        const data1 = +this.dataInput1.value;
        const data2 = +this.dataInput2.value;
        const data3= +this.dataInput3.value;
        const data4 = +this.dataInput4.value;

        const sum = data1 + data2 + data3 + data4;
        const avg = sum / 4;
        const min = Math.min(data1 , data2 , data3 , data4);
        const max = Math.max(data1 , data2 , data3 , data4);

        this.sumData.value = sum.toString();
        this.avgData.value = avg.toString();
        this.minData.value = min.toString();
        this.maxData.value = max.toString();

    }
}

let projectApp = new ProjectApp(); 