//// +++ understanding conceps to virtual dom +++ ///

// inside react create root this is root as we seen it in main.js file 
// that create root add the root element inside the dom 
// it creates the dom like structure and compares the created dom with the rowser dom and updates only those thing which are updated
// the created dom  is the virtual dom where you can update only those thing which are changed it is tree like strucutr
// the original browser dom is rebuild the complete tree structure that is why there is page reloads 

// suppose something is updated on network calls
//react fibre concept :https://github.com/acdlite/react-fiber-architecture
// react fibre : https://www.youtube.com/watch?v=MPCVGFvgVEQ&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=6
// reconciliation cncept --> comparing virtual dom with browser dom
// intriducing keys in iteration array