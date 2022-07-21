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
    return element("div").children(element("span").fontSize(30).fontWeight("bold").innerHTML("Buildless"),element("p").innerHTML("A JS framework that doesn't suck").fontWeight("600")).fontFamily("Inter").textAlign("center");
}

function DocumentationTitleCard(bucket) {
    return element("div").children(element("span").fontSize(30).fontWeight("bold").innerHTML("Documentation"),element("p").innerHTML("Documentation that might suck a little bit.").fontWeight("600")).fontFamily("Inter").textAlign("center");
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
        window.location.href = "documentation.html";
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