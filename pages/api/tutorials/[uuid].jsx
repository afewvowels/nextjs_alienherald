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
    .then((tutorials) => {
      let tutorialsArr = []
      tutorials.forEach(tutorial => {
        tutorialsArr.push(tutorial.data())
      })
      res.status(201).json(tutorialsArr[0])
    })
    .catch(err => res.status(401).send(`error getting test tutorial with uuid ${uuid} ${err.message}`))
})

handler.post(async (req, res) => {
  const {
    query: { uuid }
  } = req

  const newTutorial = {
    uuid: req.body.uuid,
    date: req.body.date,
    title: req.body.title,
    content: req.body.content
  }

  await db
    .collection('test')
    .where('uuid', '==', uuid)
    .get()
    .then(() => res.status(201).send('successfully added tutorial'))
    .catch(err => res.status(401).send(`error adding new tutorial ${err.message}`))
})

export default handler