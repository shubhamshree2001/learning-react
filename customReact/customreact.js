// here we are writing function for custom render 
function customRender(reactElement, container){
    /*
    // here we are creating the elemnt inside the dom
    //then we are inserting the text which is chinldren in iside innerhtml
    //now other properties are set which is basically attributes like target , href
    // after that we are adding this dom elemnt inthe container 
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)

        // in this code there is a problem if we are setting attrinbut if there is props like div , h1 then it will be issue
        // elow is the another approach
    */

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // here the loop is created,  accessing each props and adding
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}

// this is the element whihc we have created which has tag name as "a" and other properties 
// it is like a other tags like paragraph, div etc
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// maincontainer is the root of the html which will be inseted
const mainContainer = document.querySelector('#root')

// create render is a function whihc will render the tags element inside 
//it asks for the elemnt which whihc you want to render and where you want to render
customRender(reactElement, mainContainer)