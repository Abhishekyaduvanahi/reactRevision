import { Children } from "react";
function customRender(reactElement,maincontainer){
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML=reactElement.Children;
  for(prop in reactElement.props){
    
  }

}
const reactElement={
  type:'a',
  props:{
    href:'https://google.com',
    target:'_blank'
  },
  Children:'click me to visit google'
}


const maincontainer =document.querySelector('#root');

customRender(reactElement,maincontainer);