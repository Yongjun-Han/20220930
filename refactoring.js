const _PORT = {
  portlist : {
    "5000" : "live server",
    "3001" : "react",
    "3002" : "react-native",
    "3003" : "vue",
    "3005" : "electron",
    "3006" : "Database"
  },
  localHostString : "http://127.0.0.1/",

  localHostURLPortStringReturnArray : () => {
    console.log(this);
    let tempArray = [];
    for (let portNumberString in this.portlist) {
      let makeURL = this.localHostString + ":" + portNumberString;
      tempArray.push(makeURL)
    }
    return tempArray;
  }
}
const needObject = {
  needArray:_PORT.localHostURLPortStringReturnArray(),
  needResponseHeader : 200,
  isOn : true,
};