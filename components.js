var foreverConfig = {

};

function App(state) {
    if (!window.location.hash) {
        window.location.hash = "#main";
    }
    if (window.location.hash == "#documentation") {
        var div = element("div").padding(50);
        div.children(element("DocumentationTitleCard"));
        div.children(element("Header").text("Usage"));
        div.children(element("p").innerHTML(`
The core function of buildless is for making Components. <br>
Components are functions with the following signature <br>
<br>
<quote>
${Example.toString()}
</quote>
<br>
This code produces the following:
		`));
		div.children(element("Example"));
		div.children(element("p").innerHTML(`
			This code works by <br> 
			1. Initializing bucket.count <br>
			2. Incrementing bucket.count <br>
			3. Creating a new "p" element, and safely setting its text to bucket.count, without risk of XSS <br>
			4. Returning said element
		`));
		div.children(element("p").innerHTML(`
Another important function you are likely to use a lot is .children(), <br>
You can use it like this:
<br>
<quote>
${Example2.toString()}
</quote>
<br>
Which renders as
		`));
		div.children(element("Example2"));
		div.children(element("p").innerHTML(`
		Please note, these are only counting in sync because they are initialized in sync, NOT because they're the same component. Multiple instances of the same component do not share data.
		`));
		div.children(element("p").innerHTML(`
		More modifiers are documented below.
		`));
        div.children(element("Header").text("Properties"));
        div.children(element("br"));
        div.children(element("div").class("webkitheader").children(element("label").children(element("input").type("checkbox").id("showWebkit"),element("span").text("Show webkit specific functions"))))
        div.children(element("br"),element("br"));
        div.children(element("Gigatable"));
        return div;
    }
    return element("div").children(element("TitleCard"),element("ButtonContainer")).padding(50);
}

function Example(bucket) {
	//store data in bucket
	//ex:
	if (!bucket.count) {
		bucket.count = 1;
	}
	bucket.count++;
	// return content
	return element("p").text(bucket.count);
}

function Example2(bucket) {
	return element("div").children(element("Example"),element("Example"),element("Example")); // returns three example components
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
    return element("div").children(element("span").fontSize(30).fontWeight("bold").innerHTML("Buildless"),element("Rainbow").innerHTML("slightly less sh*tty than before :)").fontWeight("600")).fontFamily("Inter").textAlign("center");
}

function DocumentationTitleCard(bucket) {
    return element("div").children(element("span").fontSize(30).fontWeight("bold").innerHTML("Documentation"),element("p").innerHTML("The new and improved documentation.").fontWeight("600")).fontFamily("Inter").textAlign("center");
}

function Rainbow(bucket) {
    var elm = element("p");

    for (var i = 0; i < bucket.content.length; i++) {
        elm.children(element("span").innerHTML(bucket.content[i]).color(hsl(((new Date().getTime() + (i * 100)) / 10) % 360,100,50)));
    }

    return elm;
}

function ButtonContainer(bucket) {
    return element("span").children(element("PrettyButton").text("Download").initialize({onclick:function() {
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
    }}),element("PrettyButton").text("Documentation").initialize({onclick:function() {
        window.location.hash = "#documentation";
    }}),element("PrettyButton").text("Contact").initialize({onclick:function() {
        window.location.href = "mailto:scriptegyofficial@gmail.com"
    }}),element("PrettyButton").text("Share").initialize({onclick:function() {
        navigator.share({
			title: 'Buildless',
			text: 'The framework without a build step.',
			url: window.location.href
		  });
    }})).display("flex").flexDirection("row").justifyContent("center");
}

function Gigatable(bucket) {
    var showWebkit = document.getElementById("showWebkit").checked;
    var table = [
        { name: "text", type:"✨Special✨", description: "This safely sets the text inside the element, without risk of XSS." },
        { name: "class", type:"✨Special✨", description: "This adds classes to the element. ex: element.class('one two three'), will add the classes one, two, and three" },
        { name: "children", type:"✨Special✨", description: "Adds children to an element. Don't pass in an array, just multiple inputs. This can be called multiple times." },
        { name: "initialize", type:"✨Special✨", description: "Sets the content of the bucket. This does nothing for normal HTML elements, it only sends information to components." },
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
