import React, { useState } from 'react';
import { Text, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createBackDb } from '../../firebaseFuncs';
import DropDownPicker from 'react-native-dropdown-picker';
import {YES, NO} from "../../shared-components/constants";
import styles from './style'

const CreateDb = ({ navigation }) => {

  const [name, setName] = useState('')
  const [year, setYear] = useState('')
  const [web, setWeb] = useState('')
  const [stage, setStage] = useState('')
  const [incYear, setIncYear] = useState('')
  const [incLoc, setIncLoc] = useState('')
  const [fund, setFund] = useState('')


  const sectors = [
    { value: "running" },
    { value: "riding" },
    { value: "reading" },
    { value: "coding" },
    { value: "Niuer" }
  ];

  const setUpStartUp = async () => {
    console.log("hello")
    let companyData = {
      "companyName" : name,
      "foundingYear": year,
      "website": web,
      "growthStage" : stage,
      "incorporationYear" : incYear,
      "incorporationLocation" : incLoc,
      "isFundraising" : fund,
    }

    //Backend Company Creation
    createBackDb(companyData);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.inputText}>Start Up Name</Text>
      <TextInput
          style={styles.inputAnswer}
          placeholder={"Enter the Start Up name"}
          autoCorrect={false}
          autoCapitalize={'words'}
          onChangeText={text => setName(text)}
          value={name}
      />

      <Text style={styles.inputText}>What year was the company founded?</Text>
      <DropDownPicker
          style={styles.inputAnswer}
          items={[
              {label: '2021', value: 2021}, {label: '2020', value: 2020},
              {label: '2019', value: 2019}, {label: '2018', value: 2018},
              {label: '2017', value: 2017}, {label: '2016', value: 2016},
              {label: '2015', value: 2015}, {label: '2014', value: 2014},
              {label: '2013', value: 2013}, {label: '2012', value: 2012},
              {label: '2011', value: 2011}, {label: '2010', value: 2010},
              {label: '2009', value: 2009}, {label: '2008', value: 2008},
              {label: '2007', value: 2007}, {label: '2006', value: 2006},
              {label: '2005', value: 2005}, {label: '2004', value: 2004},
              {label: '2003', value: 2003}, {label: '2002', value: 2002},
              {label: '2001', value: 2001}, {label: '2000', value: 2000}
          ]}
          placeholder={"Select year"}
          onChangeItem={item => setYear(item.value)}  
      />

      <Text style={styles.inputText}>Website</Text>
      <TextInput
          style={styles.inputAnswer}
          placeholder={"Enter the website url"}
          autoCorrect={false}
          autoCapitalize={'words'}
          onChangeText={text => setWeb(text)}
          value={web}
      />

      <Text style={styles.inputText}>What is the current stage of the company?</Text>
      <DropDownPicker
          style={styles.inputAnswerDD}
          items={[
              {label: 'pre-product', value: 'preProd'}, 
              {label: 'pre-revenue', value: 'preRev'},
              {label: 'post-revenue', value: 'postRev'}
          ]}
          placeholder={"Select stage"}
          onChangeItem={item => setStage(item.value)}  
      />
    <Text style={styles.inputText}>Where was the company incorporated?</Text>
        <TextInput
            style={styles.inputAnswer}
            placeholder={"Enter incorporation location"}
            autoCorrect={false}
            autoCapitalize={'words'}
            onChangeText={text => setIncLoc(text)}
            value={incLoc}
        />

    <Text style={styles.inputText}>What year was the company incorporated?</Text>
      <DropDownPicker
          style={styles.inputAnswer}
          items={[
              {label: '2021', value: 2021}, {label: '2020', value: 2020},
              {label: '2019', value: 2019}, {label: '2018', value: 2018},
              {label: '2017', value: 2017}, {label: '2016', value: 2016},
              {label: '2015', value: 2015}, {label: '2014', value: 2014},
              {label: '2013', value: 2013}, {label: '2012', value: 2012},
              {label: '2011', value: 2011}, {label: '2010', value: 2010},
              {label: '2009', value: 2009}, {label: '2008', value: 2008},
              {label: '2007', value: 2007}, {label: '2006', value: 2006},
              {label: '2005', value: 2005}, {label: '2004', value: 2004},
              {label: '2003', value: 2003}, {label: '2002', value: 2002},
              {label: '2001', value: 2001}, {label: '2000', value: 2000}
          ]}
          placeholder={"Select year"}
          onChangeItem={item => setIncYear(item.value)}  
      />


      <Text style={styles.inputText} >Are you fundraising?</Text>
      <View
          style={styles.buttonView}>
            <TouchableOpacity
                style={fund === YES ? styles.selectedMW : styles.preferenceButtonMW}
                onPress={() => setFund(YES)}
                accessibilityLabel={YES}>
                <Text style={ fund === YES ? { color: 'white'} : { color: '#0C1636'}}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={fund === NO ? styles.selectedMW : styles.preferenceButtonMW}
                onPress={() => setFund(NO)}
                accessibilityLabel={NO}>
                <Text style={ fund === NO ? { color: 'white'} : { color: '#0C1636'}}>No</Text>
            </TouchableOpacity>
        </View>

      <TouchableOpacity onPress={setUpStartUp} style={styles.done}>
        <Text>Done</Text>
      </TouchableOpacity>
    </View>
    
  );
}

export default CreateDb;