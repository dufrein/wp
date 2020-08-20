import { decorate, observable,computed } from "mobx";

class Store {
  data = {
    buttonText: "Who am I",
  };

  get compute() {
    return this.data.buttonText.length;
  }
}

let store = decorate(Store, {
  tasks: observable,
  compute:computed
});

export default new store();
