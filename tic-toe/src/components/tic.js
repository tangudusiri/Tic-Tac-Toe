import React, { useState } from "react"
import "./tic.css"
const TicToe=()=>{
    
    const [value,setValue]=useState(Array(9).fill(""))
    const [move,setMove]=useState("X")
   const getValue=(n)=>{
    let array=[...value]
    if(value[n]!==''){
     alert("Already Clicked")
     return
    }
    array[n]=move
    setValue(array)
    if(move==='X'){
        setMove("O")
    }else{
        setMove("X")
    }
     if(checkWin(array)){
        alert(move +" " +"is Winner")
        array.fill("")
        setValue(array)
     }
     if(checkDraw(array)){
        alert("Match get draw")
        array.fill("")
        setValue(array)
     }
   }
   const checkDraw=(value)=>{
    let count=0
    value.forEach(ele=>{
        if(ele!==''){
            count++
        }
    })
    if(count>=9){
        return true
    }else{
        return false
    }
   }
   const checkWin=(value)=>{
    let conditions=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    let flag=false
    conditions.forEach((element)=>{
        if(value[element[0]]!=='' && value[element[1]]!=='' && value[element[2]]!=='' ){
            if(value[element[0]]===value[element[1]] && value[element[1]]===value[element[2]]){
                flag=true
              }
        }
    })
    return flag
}
    return(
        <>
        <h3 className="header">YOU HAVE TO CHOOSEN O BUT X GOES FIRST</h3>
        <table>
        <tbody>
        <tr>
        <td onClick={()=>{getValue(0)}}>{value[0]}</td>
        <td onClick={()=>{getValue(1)}}>{value[1]}</td>
        <td onClick={()=>{getValue(2)}}>{value[2]}</td>
        </tr>
        <tr>
        <td onClick={()=>{getValue(3)}}>{value[3]}</td>
        <td onClick={()=>{getValue(4)}}>{value[4]}</td>
        <td onClick={()=>{getValue(5)}}>{value[5]}</td>
        </tr> <tr>
        <td onClick={()=>{getValue(6)}}>{value[6]}</td>
        <td onClick={()=>{getValue(7)}}>{value[7]}</td>
        <td onClick={()=>{getValue(8)}}>{value[8]}</td>
        </tr>
        </tbody>
        </table>
        </>
    )
}
export default TicToe