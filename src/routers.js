const express = require('express');
const fetch = require('node-fetch');
const weaponRouter = express.Router();

weaponRouter.get('/:id/weapon/:weaponNo', function (req, res) {
    fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: `
      query {
        weapon(weaponNo:"${req.params.weaponNo}", personId: ${req.params.id}){
          model
          personId
          weaponNo
        }
      }
      `
            })
    })
      .then(r => r.json())
      .then(data => res.json({data}))
      .catch(error => {
        console.log(error);
      });
});

const vehicleRouter = express.Router();

vehicleRouter.get('/:id/vehicle/:govNum', function (req, res) {
    fetch('http://localhost:3000/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query: `
      query veh{
        vehicle(govNum: "${req.params.govNum}",personId: ${req.params.id} ){
          model
          personId
          govNum
        }
      }
      `
       })
    })
      .then(r => r.json())
      .then(data => res.json({data}))
      .catch(error => {
        console.log(error);
      });
});

module.exports = {
    vehicleRouter,
    weaponRouter
};
