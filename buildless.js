var buildlessConfig = {
};

window.onload = () => {
    setInterval(buildless.update, 0);
};

var buildless = {
    update: function () {
        for (var i in window) {
            var objects = document.getElementsByTagName(i);

            for (var j = 0; j < objects.length; j++) {
                if (typeof window[i] == 'function') {
                    if (!objects[j].data) {
                        objects[j].data = new ElementData();
                    }

                    var output = window[i](objects[j].data);

                    if (output.element) {
                        if (buildlessConfig.showHashLogs) {
                            console.log(output.hash);
                        }
                        if (objects[j].output != output.hash) {
                            if (objects[j].firstChild != null) {
                                objects[j].removeChild(objects[j].firstChild);
                            }
                            objects[j].appendChild(output.element);
                            objects[j].output = output.hash;
                        }
                    } else {
                        if (objects[j].output != output) {
                            objects[j].innerHTML = output;
                            objects[j].output = output;
                        }
                    }
                }
            }
        }
    },
    hash: function (input) {
        var hash = 0, i, chr;
        if (input.length === 0) return hash;
        for (i = 0; i < this.length; i++) {
            chr = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + chr;
            hash |= 0; // Convert to 32bit integer
        }
        return hash;
    }
}

class BuildlessElement {
    element;
    hash = "";

    constructor(type) {
        this.element = document.createElement(type);
        this.addHashData(type);
    }

    innerHTML(html) {
        this.element.innerHTML = html;
        this.addHashData("html");
        this.addHashData(html);
        return this;
    }

    children() {
        for (var i = 0; i < arguments.length; i++) {
            this.element.appendChild(arguments[i].element);
            this.addHashData("addChild");
            this.addHashData(arguments[i].hash);
        }
        return this;
    }

    initialize(data) {
        if (!this.element.data) {
            this.element.data = new ElementData();
        }
        Object.assign(this.element.data, data);
        this.addHashData("initialize");
        this.addHashData(JSON.stringify(data));
        return this;
    }

    addHashData(data) {
        this.hash += data;
        //this.hash = buildless.hash(this.hash);
    }
}

class ElementData {

}

function element(type) {
    return new BuildlessElement(type);
}