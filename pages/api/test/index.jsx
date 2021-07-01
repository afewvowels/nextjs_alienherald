import nc from 'next-connect'
import db from 'utils/firebase'

const handler = nc()

handler.get(async (req, res) => {
  await db
    .collection('test')
    .get()
    .then(items => {
      let itemsArr = []
      items.forEach(item => {
        itemsArr.push(item.data())
      })
      res.status(201).json(itemsArr)
    })
    .catch(err => res.status(401).send(`error getting items from test collection ${err.message}`))
})

handler.post(async (req, res) => {
  const newItem = {
    uuid: req.body.uuid,
    test: req.body.test,
    test2: req.body.test2
  }

  await db
    .collection('test')
    .doc(newItem.uuid)
    .set(newItem)
    .then(() => res.status(201).send(`successfully added item to collection test with uuid ${newItem.uuid}`))
    .catch(err => res.status(401).send(`error adding new item to collection test with uuid ${newItem.uuid} ${err.message}`))
})

export default handler