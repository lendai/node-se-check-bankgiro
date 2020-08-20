const checkBankgiro = require('../src/check-bankgiro')

describe('checkBankgiro', () => {
  it('should return isValid on legit numbers of different formats', () => {
    expect(checkBankgiro(54029681).isValid).toEqual(true)
    expect(checkBankgiro(2973675).isValid).toEqual(true)
    expect(checkBankgiro(6405070).isValid).toEqual(true)
    expect(checkBankgiro('5402-9681').isValid).toEqual(true)
    expect(checkBankgiro('54029681').isValid).toEqual(true)
    expect(checkBankgiro('297-3675').isValid).toEqual(true)
    expect(checkBankgiro('640-5070').isValid).toEqual(true)
  })

  it('should fail on too short numbers', () => {
    expect(checkBankgiro().isValid).toEqual(false)
    expect(checkBankgiro().error).toEqual('TOO_SHORT')
    expect(checkBankgiro('1').isValid).toEqual(false)
    expect(checkBankgiro('1').error).toEqual('TOO_SHORT')
  })

  it('should fail on too long numbers', () => {
    expect(checkBankgiro('5402-96810').isValid).toEqual(false)
    expect(checkBankgiro('5402-96810').error).toEqual('TOO_LONG')
  })

  it('should fail on invalid checksum', () => {
    expect(checkBankgiro('5402-9682').isValid).toEqual(false)
    expect(checkBankgiro('5402-9682').error).toEqual('BAD_CHECKSUM')
  })

  it('should fail on invalid characters', () => {
    expect(checkBankgiro('5402-968X').isValid).toEqual(false)
    expect(checkBankgiro('5402-968X').error).toEqual('INVALID_CHARACTERS')
  })
})
