const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define(
  'product',
  {
    company: {
      type: Sequelize.STRING,
      allowNull: false
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    inventory: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        min: 0
      }
    },
    imageUrl: {
      type: Sequelize.STRING,
      defaultValue: '/atolla.png'
    },
    category: {
      type: Sequelize.STRING,
      validate: {
        isIn: [['cleanser', 'serum', 'moisturizer']]
      }
    },
    searchName: {
      type: Sequelize.STRING
    }
  },
  {
    hooks: {
      beforeCreate: product => {
        product.searchName = `${product.company} ${product.name}`
      }
    }
  }
)

Product.prototype.inventoryUpdate = soldItem => {
  this.inventory = this.inventory - soldItem
  return this.inventory
}

module.exports = Product
