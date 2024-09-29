import axios from 'axios';
import express from 'express'
import { Server } from 'http';
const app = express()
const port = 3000

let listener: Server;

beforeAll(() => {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  listener = app.listen(port)
})

describe("Make a good and bad async unit test", () => {
  test("Async test that properly awaits before expect", async () => {
    let response = await axios.get(`http://localhost:${port}`);
    expect(response.data).toBe("Hello World!")
  })

  test("Async test that expects after test completion with incorrect data", () => {
    axios.get(`http://localhost:${port}`).then((response => {
      expect(response.data).toBe("Hello Aiden!")
    }))
  })
})
