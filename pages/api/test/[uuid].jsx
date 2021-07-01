import nc from 'next-connect'
import db from 'utils/firebase'

const handler = nc()

handler.get(async (req, res) => {
  const {
    query: { uuid }
  } = req

  await db
    .collection('test')
    .where('uuid', '==', uuid)
    .get()
    .then((items) => {
      let itemsArr = []
      items.forEach(item => {
        itemsArr.push(item.data())
      })
      res.status(201).json(itemsArr[0])
    })
    .catch(err => res.status(401).send(`error getting test item with uuid ${uuid} ${err.message}`))
})

handler.post(async (req, res) => {
  const {
    query: { uuid }
  } = req

  const newItem = {
    uuid: req.body.uuid,
    test: req.body.test,
    test2: req.body.test2
  }

  await db
    .collection('test')
    .where('uuid', '==', uuid)
    .get()
    .then(() => res.status(201).send('successfully added item'))
    .catch(err => res.status(401).send(`error adding new item ${err.message}`))
})

export default handler