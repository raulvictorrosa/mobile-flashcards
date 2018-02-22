import React, { Component } from 'react'
import {
  Text,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native'
import styled from 'styled-components/native';
import { black, white } from '../utils/colors'

export const Button = ({ children, onPress, style = {} }) => {
  return (
    <View>
      {Platform.OS === 'ios'
        ? <IosBtn onPress={onPress} style={style}>
            <BtnText>{children}</BtnText>
          </IosBtn>
        : <AndroidBtn onPress={onPress} style={style}>
            <BtnText>{children}</BtnText>
          </AndroidBtn>
      }
    </View>
  )
}

export const ButtonOutline = ({ children, onPress, style = {} }) => {
  return (
    <View>
      {Platform.OS === 'ios'
        ? <IosBtnOutline onPress={onPress} style={style}>
            <BtnOutlineText>{children}</BtnOutlineText>
          </IosBtnOutline>
        : <AndroidBtnOutline onPress={onPress} style={style}>
            <BtnOutlineText>{children}</BtnOutlineText>
          </AndroidBtnOutline>
      }
    </View>
  )
}

const BtnDefault = styled.TouchableOpacity`
  height: 45;
  margin-top: 40;
  padding: 10px;
`
const BtnTextDefault = styled.Text`
  font-size: 22;
  text-align: center;
`

const Btn = BtnDefault.extend`
  backgroundColor: ${black};
`
const IosBtn = Btn.extend`
  border-radius: 7;
  margin-left: 40;
  margin-right: 40;
`
const AndroidBtn = Btn.extend`
  align-items: center;
  align-self: center;
  border-radius: 4;
  justify-content: center;
  padding-left: 30;
  padding-right: 30;
`
const BtnText = BtnTextDefault.extend`
  color: ${white};
`

const BtnOutline = BtnDefault.extend`
  backgroundColor: ${white};
  border: 2px solid ${black};
`
const IosBtnOutline = BtnOutline.extend`
  border-radius: 7;
  margin-left: 40;
  margin-right: 40;
`
const AndroidBtnOutline = BtnOutline.extend`
  align-items: center;
  align-self: center;
  border-radius: 4;
  justify-content: center;
  padding-left: 30;
  padding-right: 30;
`
const BtnOutlineText = BtnTextDefault.extend`
  color: ${black};
`
