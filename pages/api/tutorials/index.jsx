import nc from 'next-connect'
import db from 'utils/firebase'

const handler = nc()

handler.get(async (req, res) => {
  await db
    .collection('tutorials')
    .get()
    .then(tutorials => {
      let tutorialsArr = []
      tutorials.forEach(tutorial => {
        tutorialsArr.push(tutorial.data())
      })
      res.status(201).json(tutorialsArr)
    })
    .catch(err => res.status(401).send(`error getting tutorials from collection ${err.message}`))
})

handler.post(async (req, res) => {
  const newTutorial = {
    uuid: req.body.uuid,
    date: req.body.date,
    title: req.body.title,
    content: req.body.content
  }

  await db
    .collection('tutorials')
    .get()
    .then(tutorials => {
      let tutorialsArr = []
      tutorials.forEach(tutorial => {
        tutorialsArr.push(tutorial.data())
      })
      res.status(201).json(tutorialsArr)
    })
    .catch(err => res.status(401).send(`error getting tutorials from collection ${err.message}`))


  await db
    .collection('test')
    .doc(newTutorial.uuid)
    .set(newTutorial)
    .then(() => res.status(201).send(`successfully added tutorial to collection test with uuid ${newTutorial.uuid}`))
    .catch(err => res.status(401).send(`error adding new tutorial to collection test with uuid ${newTutorial.uuid} ${err.message}`))
})

export default handler