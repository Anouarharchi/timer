import React , {useState} from 'react';

function Test(){
const [s,sets]=useState(0)
const [m,setm]=useState(0)
const [h,seth]=useState(0)
const [is,setis]=useState(null)
const [im,setim]=useState(null)
const [ih,setih]=useState(null)
function start(){
    if(!is | !im | !ih){
        const st = setInterval( ()=>{
            
                sets((s)=> (s===59? 0  : s + 1) )

            

        },1000)
        setis(st)
        const mt = setInterval( ()=>{
            
                setm((m)=> (m===59? 0  : m + 1) )

            

        },60000)
        setim(mt)
        const ht = setInterval( ()=>{
            
                seth((h)=> (h===59? 0  : h + 1) )

            

        },3600000)
      
        setih(ht)
       
    }
}
function rest(){
    clearInterval(is)
    clearInterval(im)
    clearInterval(ih)
setis(null)
setim(null)
setih(null)
sets(0)
setm(0)
seth(0)
}
return(

<>
<h1>count : {h}:{m}:{s}</h1>
<button onClick={
    // ()=> setc(c+1)
start    } >plus
</button>
<button onClick={
    // ()=> setc(c-1)
    
    rest
    
    } >rest</button>
</>
);

}
export default  Test;