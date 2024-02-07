import { atom } from "recoil";
  const productState=atom({
    key:"productState",
    default:[
        {id:"1" ,titel:"product1"},
        {id:"2" ,titel:"product2"},
        {id:"3" ,titel:"product3"},
    ],
  });
  export default productState;