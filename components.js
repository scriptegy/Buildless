var foreverConfig = {

};

function AppView(state) {
    if (!buildless.state.page) {
        buildless.state.page = "main";
    }
    if (buildless.state.page == "documentation") {
        var div = element("div").padding(50);
        div.children(element("DocumentationTitleCard"));
        div.children(element("Header").text("Important Information:"));
        div.children(element("p").innerHTML("This is a framework based around elements. All custom elements have an input passed into the function called the data bucket. You can store element information in there. You can also get the initial innerHTML of the element by doing bucket.content. All changes of the bucket persist between calls. If you want to make a custom element, just define a function that returns the content of the element. First, create the base element, using element('element type goes here'), and then modify it by styling it, adding children, and more, then return it. If you want an example, look at the <a href='components.js'>source code</a> of this website."));
        div.children(element("Header").text("Massive Table of All Element Functions"));
        div.children(element("br"));
        div.children(element("div").class("webkitheader").children(element("label").children(element("input").type("checkbox").id("showWebkit"),element("span").text("Show webkit specific functions"))))
        div.children(element("br"),element("br"));
        div.children(element("Gigatable"));
        return div;
    }
    return element("div").children(element("TitleCard"),element("ButtonContainer")).padding(50);
}

function ComponentOne(data) {
    if (!data.number) {
        data.number = 0;
    }
    data.number++;
    //return "yeet " + data.number;
    return element("div").children(element("h1").innerHTML("yeet"),element("p").innerHTML(data.number)).backgroundColor("gray").padding(10).paddingLeft(30).borderRadius("10px");
    console.log(elem.color);
    //return element("div").children(element("h1").innerHTML("heyo"),element("h2").innerHTML("smaller heyo"));
}

function PrettyButton(bucket) {
    return element("button").innerHTML(bucket.content).class("button").onclick(bucket.onclick);
}

function InitializerComponent() {
    return element("ComponentOne").initialize({number:2000});
}

function TitleCard(bucket) {
    return element("div").children(element("span").fontSize(30).fontWeight("bold").innerHTML("Buildless"),element("Rainbow").innerHTML("Now with single-page support!").fontWeight("600")).fontFamily("Inter").textAlign("center");
}

function DocumentationTitleCard(bucket) {
    return element("div").children(element("span").fontSize(30).fontWeight("bold").innerHTML("Documentation"),element("p").innerHTML("Documentation that might suck a little bit.").fontWeight("600")).fontFamily("Inter").textAlign("center");
}

function Rainbow(bucket) {
    var elm = element("p");

    for (var i = 0; i < bucket.content.length; i++) {
        elm.children(element("span").innerHTML(bucket.content[i]).color(hsl(((new Date().getTime() + (i * 100)) / 10) % 360,100,50)));
    }

    return elm;
}

function ButtonContainer(bucket) {
    return element("span").children(element("PrettyButton").innerHTML("Download").initialize({onclick:function() {
        fetch('buildless.js')
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = 'buildless.js';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
            })
            .catch(() => alert('download failed :('));
    }}),element("PrettyButton").innerHTML("Documentation").initialize({onclick:function() {
        buildless.state.page = "documentation";
    }})).display("flex").flexDirection("row").justifyContent("center");
}

function Gigatable(bucket) {
    var showWebkit = document.getElementById("showWebkit").checked;
    var table = [
        { name: "text", type:"✨Special✨", description: "This safely sets the text inside the element, without risk of XSS." },
        { name: "class", type:"✨Special✨", description: "This adds classes to the element" },
        { name: "children", type:"✨Special✨", description: "Adds children to an element. Don't pass in an array, just multiple inputs." },
        { name: "initialize", type:"✨Special✨", description: "Sets the content of the data bucket." },
    ];
    for (var i = 0; i < buildless.attributes.length; i++) {
        if (!buildless.attributes[i].includes("webkit") || showWebkit) {
            table.push({name:buildless.attributes[i], type:"Attribute", description: "This sets the " + buildless.attributes[i] + " attribute to the first input.",  isWebkit: buildless.attributes[i].includes("webkit")});
        }
    }
    for (var i = 0; i < buildless.styles.length; i++) {
        if (!buildless.styles[i].includes("webkit") || showWebkit) {
            table.push({name:buildless.styles[i], type:"Style", description: "This sets the " + buildless.styles[i] + " style to the first input.",  isWebkit: buildless.styles[i].includes("webkit")})
        }
    }
    var tableElement = element("table").width("100%");
    for (var i = 0; i < table.length; i++) {
        var name = element("td").text(table[i].name);
        var type = element("td").text(table[i].type);
        var description = element("td").text(table[i].description);
        var elm = element("tr").children(name,type,description);
        if (table[i].isWebkit) {
            elm.class("webkit");
        }
        tableElement.children(elm);
    }
    return tableElement;
}

function Header(bucket) {
    return element("span").text(bucket.content).fontSize(25).fontWeight(semibold);
}

function TimesNewBastard(bucket) {
    var elm = element("div");
    for (var i = 0; i < bucket.content.length; i++) {
        var text = element("span");
        text.text(bucket.content[i]);
        if (i % 7 == 0) {
            text.fontFamily('Inter');
            text.fontSize(19);
            text.fontWeight(semibold);
        } else {
            text.fontFamily('Times New Roman');
        }
        elm.children(text);
    }
    return elm;
}