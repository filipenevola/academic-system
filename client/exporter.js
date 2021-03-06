import {Meteor} from 'meteor/meteor';

const Exporter = {
  exportAllRecord() {
    Meteor.call("exportAllRecords", (error, data) => {
      if (error) {
        alert(error);
        return;
      }
      this.downloadCSV(Papa.unparse(data));
    });
  },

  downloadCSV (csv) {
    // TODO refatorar forma de fazer essa exportacao
    const blob = new Blob([csv]);
    const a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob, {type: "text/plain"});
    a.download = "records.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}

export default Exporter;