import Vue from 'vue'
import Validator from 'vue-validator'

Vue.use(Validator)

Vue.validator('amount', function (amount) {
  return /^[0-9]{11}$/.test(amount)
})
