const assert = require('assert')
const request = require('supertest')
const app = require('../index.js')

describe('Validate setting the test', () => {
    it('should be ok', () => {
        assert.ok(true)
    })
})

describe('GET "/singers"', ()=>{
    it('Something', (done)=>{
        let want = [
            {id: '1', name: 'NCT'},
            {id: '2', name: 'Got7'}
        ]

        request(app).get('/singers').expect(want, done)
    })
})