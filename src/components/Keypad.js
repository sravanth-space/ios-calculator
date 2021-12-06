import React from "react";
import Button from "./Button";
const Keypad = (props) => {
   const { actionToPerform, allClear } = props;
   const numericKeys = [7, 8, 9, 4, 5, 6, 1, 2, 3];

const operatorKeys = [
   { label: "÷", value: "/" },
   { label: "×", value: "x" },
   { label: "-", value: "-" },
   { label: "+", value: "+" },
   { label: "=", value: "=" }
];

const functionKeys = [
   { label: allClear ? "AC" : "C", value: allClear ? "AC" : "C" },
   { label: "±", value: "+/-" },
   { label: "%", value: "%" }
];

const lastRowKeys = [
   { label: "0", value: "0", type: "numeric", buttonStyle: "numeric-key special" },
   { label: "·", value: ".", type: "fx", buttonStyle: "numeric-key" }
];
   const handleClickButton = (value, keyType) => {
      actionToPerform(value, keyType);
   }
   return(
      <div id="keypad" className="flex row jc-sp-around">
         <div className="grid">
            {functionKeys.map(
                    functionKey =>
                        <Button key={functionKey.label} label={functionKey.label} value={functionKey.value}
                            buttonStyle="fx-key" onClick={handleClickButton} type="fx" />
             )}
            {numericKeys.map(
                    numericKey =>
                        <Button key={numericKey} label={numericKey} value={numericKey}
                            buttonStyle="numeric-key" onClick={handleClickButton} type="numeric" />
             )}
            {lastRowKeys.map(
                    lastRowKey =>
                        <Button key={lastRowKey.label} label={lastRowKey.label} value={lastRowKey.value}
                            buttonStyle={lastRowKey.buttonStyle} onClick={handleClickButton} type={lastRowKey.type} />
             )} 
         </div>
         <div className="flex column jc-sp-btw">
            {operatorKeys.map(
                    operatorKey =>
                        <Button key={operatorKey.label} label={operatorKey.label} value={operatorKey.value}
                            buttonStyle="op-key" onClick={handleClickButton} type="operator" />
             )}
         </div>
      </div>      
   )
}

export default Keypad;
