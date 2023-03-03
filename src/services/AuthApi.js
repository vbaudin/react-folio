import axios from 'axios'
import * as R from 'ramda';
import jwtDecode from 'jwt-decode'
import { SESSION } from '../constants'
import { getItem, addItem, removeItem } from './LocaleStorage'

export const hasAuthenticated = (token) => {
  const isValid = R.not(R.isNil(token)) // token ? tokenIsValid(token) : false

  // if (!isValid) {
  //   removeItem(SESSION)
  // }

  return isValid
}

export const login = (credientials) => {
  // return axios
  //   .post('http://127.0.0.1:5173/api/login_check', credentials)
  //   .then(response => response)
}

export const logout = (token) => {
  // removeItem(SESSION)
}

const tokenIsValid = (token) => {
  const { exp } = jwtDecode(token)

  if (exp * 1000 > new Date().getTime()) {
    return true
  }
  return false
}