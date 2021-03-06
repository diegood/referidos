const faker = require('faker')
const Hash = require('object-hash')
faker.locale = 'es'

class FakeContact {
  constructor () {
    let fc = faker.name
    this.firstName = fc.firstName()
    this.lastName = fc.lastName()
    this.tel = faker.phone.phoneNumberFormat()
    this.email = faker.internet.email()
    this.trabajos = faker.random.arrayElement(['dg', 'dw'])
    this.creado = faker.date.recent()
    this.contrato = {
      fecha: faker.date.recent(),
      producto: faker.commerce.productName(),
      precio: faker.commerce.price(350, 1500, 2, '$')
    }
    this.estado = faker.random.arrayElement(['nuevo', 'contrato', 'contactado'])
  }

  serialize () {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      tel: this.tel,
      email: this.email,
      creado: this.creado,
      contrato: this.contrato,
      estado: this.estado,
      trabajos: this.trabajos
    }
  }
}

module.exports = function () {
  var data = { contactos: [] }
  // creo 1000 Contactos
  data.contactos = generateFakeObject(FakeContact, 100)
  return data
}

function generateFakeObject (TARGETCLASS = '', count = 10) {
  if (typeof TARGETCLASS !== 'function') {
    console.error('no se pudo generar')
    return []
  }
  let result = {}
  for (var i = 0; i < count; i++) {
    const fp = new TARGETCLASS()
    // let ffp = fp.serialize()
    // result[Hash(ffp)] = ffp
    // result.push(fp.serialize())
    result[Hash(fp.serialize())] = fp.serialize()
  }
  return result
}
