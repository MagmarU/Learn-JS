function unique(stringArray) {
  let result_Arr_With_Unique_String_Value = [];
  let uniqueStr;
  for (let item in stringArray) {
    uniqueStr = stringArray[item];
    if (stringArray.length == 1) {
      result_Arr_With_Unique_String_Value.push(stringArray[0]);
      break;
    } else {
      stringArray = stringArray.filter(item => item != uniqueStr);
      result_Arr_With_Unique_String_Value.push(uniqueStr);
    }
  }
  return result_Arr_With_Unique_String_Value;
}


let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];


for( let i = 0; i < 10000; i++ ){
  console.log(unique(strings));
}
