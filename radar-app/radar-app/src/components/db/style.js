import { StyleSheet } from "react-native";

export default StyleSheet.create({

container: {
    width: 1000

},

inputText: {
    marginTop: 27
},

inputAnswer: {
    maxWidth: 500,
    marginTop: 5,
    height: 30
},

inputAnswerDD: {
    position: "relative",
    maxWidth: 500,
    marginTop: 10,
    zIndex: 100
},

buttonView: {
 flexDirection: 'row',
},
preferenceButtonMW: {
    alignItems: 'center',
    color: "#0C1636",
    // padding: hp('2%'),
    // margin: hp('1%'),
    padding: 5,
    marginTop: 10,
    marginLeft: 5,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "#0C1636",
    borderRadius: 5,
    width: 40
    // borderRadius: hp('2%'),
    // width: wp('39%'),
},
selectedMW: {
    alignItems: 'center',
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: "#0C1636",
    // padding: hp('2%'),
    // margin: hp('1%'),
    marginTop: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    width: 40
    // borderRadius: hp('2%'),
    // width: wp('39%'),
},

done: {
    alignItems: 'center',
    color: "#0C1636",
    // padding: hp('2%'),
    // margin: hp('1%'),
    padding: 5,
    marginTop: 10,
    marginLeft: 400,
    borderWidth: 1,
    borderColor: "#0C1636",
    borderRadius: 5,
    width: 100,
}
})