SCggCommandChangeIdtf = function (object, newIdtf) {
    this.object = object;
    this.oldIdtf = object.text;
    this.newIdtf = newIdtf;
};

SCggCommandChangeIdtf.prototype = {

    constructor: SCggCommandChangeIdtf,

    undo: function() {
        this.object.setText(this.oldIdtf);
    },

    execute: function() {
        this.object.setText(this.newIdtf);
    }

};
