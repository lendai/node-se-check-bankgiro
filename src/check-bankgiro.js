const luhn = require('luhn')

function normalize(input = '') {
  return input.toString().replace(/\s+/g, '').replace(/-/g, '')
}

function fail(error) {
  return { isValid: false, error }
}

module.exports = function checkBankgiro(input = '') {
  const normalized = normalize(input)

  if (normalized.length < 7) {
    return fail('TOO_SHORT')
  }
  if (normalized.length > 8) {
    return fail('TOO_LONG')
  }

  const onlyNumbers = /^\d+$/
  if (!onlyNumbers.test(normalized)) {
    return fail('INVALID_CHARACTERS')
  }

  if (!luhn.validate(normalized)) {
    return fail('BAD_CHECKSUM')
  }

  return {
    isValid: true,
  }
}
